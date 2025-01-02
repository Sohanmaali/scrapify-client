"use client"
import ScrapMaterialForm from '@/app/pages//scrapProducts/AddProductForm';
import { useParams } from 'next/navigation';

const AddProduct = () => {
  const { id }:any = useParams();  // Use useParams to extract dynamic route params

 
  return (
    <>
      <ScrapMaterialForm category={id} />
    </>
  );
};

export default AddProduct;
