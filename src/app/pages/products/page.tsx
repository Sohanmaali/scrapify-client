import NotAvalilable from "@/app/components/generalComp/NotAvailable"
import PageBanner from "@/app/components/generalComp/PageBanner"


const ProductPage = ()=>{
    return (<>
   <div className="bg-relatedWhite">
   <PageBanner
        pageName="Products"
        parentPage="Home"
        backgroundImage="/assert/images/recycle_image.jpg"
      />
      <div>
        <NotAvalilable/>
      </div>
   </div>
    </>)
}

export default ProductPage