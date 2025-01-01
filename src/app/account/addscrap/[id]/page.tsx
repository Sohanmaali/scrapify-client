import ScrapMaterialForm from "@/app/components/AddProductForm"

interface AddProductProps {
  params: {
    id: string;
  };
}

const AddProduct = ({ params }: AddProductProps) => {
  return (
    <>
      <ScrapMaterialForm category={params.id} />
    </>
  );
}

export default AddProduct;
