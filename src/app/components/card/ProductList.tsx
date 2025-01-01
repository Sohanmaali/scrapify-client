import { PrimaryButton } from "../generalComp/Buttons";
import ProductCardComp from "./ProdcutCardCopm";

const ProductList = () => {

  const products = [
    { id: 1, price: 500.00, originalPrice: 700.00, rating: 4.5, material: "Scrap Material", date: "December 21, 2024" },
    { id: 2, price: 1200.00, originalPrice: 1500.00, rating: 4.0, material: "Metal Scrap", date: "December 20, 2024" },
    { id: 3, price: 800.00, originalPrice: 900.00, rating: 4.8, material: "Plastic Scrap", date: "December 18, 2024" },
    { id: 4, price: 350.00, originalPrice: 500.00, rating: 3.9, material: "Wood Scrap", date: "December 17, 2024" },
    { id: 5, price: 900.00, originalPrice: 1100.00, rating: 5.0, material: "Aluminum Scrap", date: "December 15, 2024" },
    { id: 6, price: 250.00, originalPrice: 350.00, rating: 4.2, material: "Copper Scrap", date: "December 14, 2024" }
  ];
  return <>
    <div>
  <div className="bg-relatedWhite grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10 sm:px-10">
    {products.map((item,index) => <ProductCardComp key={index} index={index} />)}
  </div>
  
  {/* Centering the button */}
  <div className="flex justify-center py-3 bg-relatedWhite">
    <PrimaryButton heading={'View All Products '} />
  </div>
</div>


  </>
}

export default ProductList