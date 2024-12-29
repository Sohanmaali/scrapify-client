
// const createFormData = (data: any) => {
//   const formData = new FormData();

//   if (!data) return false;

//   Object.keys(data).forEach((key) => {
//     const value = data[key];

//     if (value instanceof File) {
//       // Append the file directly
//       formData.append(key, value);
//     } else if (value && typeof value === "object" && !Array.isArray(value)) {
//       // Handle nested objects (e.g., featured_image as { id: 'some-id' })
//       if (value.id) {
//         formData.append(key, value.id); // Send the ID if available
//       } else {
//         formData.append(key, JSON.stringify(value)); // Stringify if no specific logic
//       }
//     } else if (Array.isArray(value)) {
//       // Handle arrays (e.g., multiple images or other fields)
//       value.forEach((item, index) => {
//         formData.append(`${key}[${index}]`, item);
//       });
//     } else {
//       // Append normal field data
//       formData.append(key, value);
//     }
//   });

//   return formData;
// };

// export default createFormData;


const createFormData = (data: any) => {
  const formData = new FormData();

  if (!data) return false;

  Object.keys(data).forEach((key) => {
    const value = data[key];

    if (value instanceof File) {
      // Append the file directly (e.g., for featured_image)
      formData.append(key, value);
    } else if (value && typeof value === "object" && !Array.isArray(value)) {
      // Handle nested objects (e.g., featured_image as { id: 'some-id' })
      if (value.id) {
        formData.append(key, value.id); // Send the ID if available
      } else {
        formData.append(key, JSON.stringify(value)); // Stringify if no specific logic
      }
    } else if (Array.isArray(value)) {
      // Handle arrays (e.g., multiple images or other fields like gallery)
      value.forEach((item, index) => {
        if (item instanceof File) {
          // If the item is a file (image), append each file separately
          formData.append(`${key}[${index}]`, item);
        } else {
          // Otherwise, append the item normally
          formData.append(`${key}[${index}]`, item);
        }
      });
    } else {
      // Append normal field data
      formData.append(key, value);
    }
  });

  return formData;
};

export default createFormData;
