
"use client"
import CategoryCard from "@/app/components/card/CategoryCard";
import PageBanner from "@/app/components/generalComp/PageBanner";
import { useAllCategories } from "@/hooks/categoryHelper";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";  // Use the useSearchParams hook
import { useEffect, useState } from "react";
import { FaBorderAll } from "react-icons/fa";


const CategoryPage = () => {
  const categoryData: any = useAllCategories();
  const searchParams = useSearchParams();  
  const categoryType = searchParams?.get("type") || "all";  
  const [showingCategory, setShowingCategory] = useState<any>([]);
  const router = useRouter()

  useEffect(() => {
    if (categoryData?.length > 0) {
      // Filter based on categoryType
      if (categoryType !== "all") {
        const filteredCategories = categoryData?.filter(
          (category: any) => category.slug === categoryType
        );
        setShowingCategory(filteredCategories);
      } else {
        setShowingCategory(categoryData); // Show all if "all" is selected
      }
    }
  }, [categoryType, categoryData]); 



  return (
    <div className="bg-relatedWhite">
      <PageBanner
        pageName="Category"
        parentPage="Home"
        backgroundImage="/assert/images/recycle_image.jpg"
      />
      <h1 className="mt-10 flex items-center justify-center text-3xl font-bold text-mutedColor py-3 px-8 rounded-lg">
        <span className="mr-2">♻️</span> {/* Example icon */}
        <span>Start Selling Your <span className="text-darkColor underline decoration-wavy">Scrap</span> Materials Now!</span>
      </h1>

      <div className="sm:p-0 lg:pt-10 p-2">
        <div className="grid grid-cols-1 gap-4 p-4 bg-lightColor sm:grid-cols-2 lg:grid-cols-4">
          <button
            className={`flex items-center  gap-2 px-4  text-lg font-medium ${categoryType === "all" ? "bg-darkColor text-relatedWhite" : "text-mutedColor bg-relatedWhite"} rounded-lg shadow-md hover:bg-darkColor hover:text-relatedWhite border border-darkColor focus:outline-none focus:ring-2 focus:ring-green-300`}
            onClick={() => router.push(`?type=all`, { scroll: false })}
          >
              <span className="text-2xl py-2"> 
                
                <FaBorderAll className="w-[80px] h-[80px] object-cover rounded-3 rounded-lg  " />
              
              </span>
            

            <span className="text-2xl"></span>
            {"All"}
          </button>

          {categoryData.length > 0 && categoryData.map((category: any, index: number) => (
            <button
              key={index}
              className={`flex items-center  gap-2 px-4  text-lg font-medium ${categoryType === category.slug ? "bg-darkColor text-relatedWhite" : "text-mutedColor bg-relatedWhite"} rounded-lg shadow-md hover:bg-darkColor hover:text-relatedWhite border border-darkColor focus:outline-none focus:ring-2 focus:ring-green-300`}
              onClick={() => router.push(`?type=${category?.slug}`, { scroll: false })}
            >
              <span className="text-2xl py-2"> <img
                className="w-[80px] h-[80px] object-cover rounded-3 rounded-lg  "
                src={
                  category?.featured_image
                    ? `${category.featured_image.filepath}`
                    : '/assert/images/noimage.png'
                }
                alt="Profile"
              />
              </span>
              <span>{category.name}</span>

            </button>
          ))}
        </div>
      </div>

      <div className="bg-relatedWHite h-auto py-5">
        {showingCategory.length > 0 && showingCategory.map((category: any, index: number) => (
          <div className="flex flex-col items-center justify-center h-full gap-8 mt-5 px-8" key={index} >
            <h1 className="flex items-center justify-center text-2xl font-bold text-darkColor bg-lightColor py-2 px-6 rounded-full shadow-lg space-x-2">
              <span>{category?.name}</span>
              <span>{category?.icon}</span>
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 lg:grid-cols-6 sm:gap-6  w-full justify-items-center">
              {category?.children?.length > 0 && category?.children.map((item: any, subIndex: any) => (
               <Link href={`/pages/addscrap/${item?._id}`}> <CategoryCard data={item} key={subIndex} /></Link>
              ))}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
