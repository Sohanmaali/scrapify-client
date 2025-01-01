"use client"
import ScrapMaterialForm from "@/app/components/AddProductForm";
import { useRouter } from 'next/navigation';

const AddProduct = () => {
  const { id } :any= useRouter();  // Use router to get dynamic params

 
  return (
    <>
      <ScrapMaterialForm category={id} />
    </>
  );
};

export default AddProduct;
