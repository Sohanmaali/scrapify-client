"use client"

import React, { useEffect, useState } from "react";

interface PreviewImage {
  id: string;
  url: string;
}

interface ImagePreviewerProps {
  imageFiles: File[]; // Array of image files passed as props
  onRemove?: (index: number) => void; // Optional callback for removing an image
}

const ImagePreviewer: React.FC<ImagePreviewerProps> = ({ imageFiles, onRemove }) => {
  const [images, setImages] = useState<PreviewImage[]>([]);

  // Generate previews whenever the imageFiles prop changes
  useEffect(() => {
    const previews = imageFiles.map((file) => ({
      id: URL.createObjectURL(file),
      url: URL.createObjectURL(file),
    }));
    setImages(previews);

    // Cleanup object URLs when component unmounts or props change
    return () => {
      previews.forEach((preview) => URL.revokeObjectURL(preview.url));
    };
  }, [imageFiles]);

  const handleRemove = (index: number) => {
    if (onRemove) {
      onRemove(index); // Call the provided callback to remove the image from parent state
    } else {
      setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="p-4">
      {/* Image Preview Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={image.id} className="relative group border border-darkColor rounded-lg">
            {/* Image Display */}
            <img
              src={image.url}
              alt={`preview-${index}`}
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            {/* Remove Button */}
            <button
              onClick={() => handleRemove(index)}
              className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Fallback Message */}
      {images.length === 0 && (
        <p className="text-gray-500 text-sm mt-4">No images to display.</p>
      )}
    </div>
  );
};

export default ImagePreviewer;
