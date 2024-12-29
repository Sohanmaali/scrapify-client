import ScrapMaterialForm from "@/app/components/AddProductForm"

const AddProduct =({ params }: { params: { id: string } })=>{
    return (<>
    <ScrapMaterialForm category={params.id}/>
    </>)
}

export default AddProduct