"use client"
import ScrapMaterialForm from '@/app/pages//scrapProducts/AddProductForm';
import { useParams } from 'next/navigation';

const AddProduct = () => {

  const { id }:any = useParams(); 
 
  return (
    <>
      <ScrapMaterialForm category={id} />
    </>
  );
};

export default AddProduct;
