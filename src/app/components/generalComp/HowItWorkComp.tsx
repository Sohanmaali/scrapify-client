import React from "react";
import { SiAuthy } from "react-icons/si";
import { AiFillProduct } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
const HowItWorks = () => {
  const steps = [
    {
      title: "Sign up account.",
      description: "It has survived not only centuries but also leaped into electronic.",
      icon: <SiAuthy />, // You can replace this with an SVG or image
    },
    {
      title: "Upload scrap or handmade products",
      description: "It has survived not only centuries but also leaped into electronic.",
      icon: <AiFillProduct/>, // Replace with SVG or image
    },
    {
      title: "Buyers confirm purchases",
      description: "It has survived not only centuries but also leaped into electronic.",
      icon: <MdOutlinePayment/>, // Replace with SVG or image
    },
  ];

  return (
    <section className=" py-8 bg-relatedWhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <p className="text-darkColor text-lg font-semibold mb-2">
          Over 1,735+ product`s sell
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
         Why Choose <span className="text-darkColor underline decoration-wavy">us?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-16 gap-8 mt-12">
          {steps.map((step, index) => (
           <div
           key={index}
           className=" border hover:border-darkColor h-72 relative bg-lightColor p-8 rounded-xl shadow-md text-left group hover:shadow-lg transition-shadow"
         >
           <div className="text-4xl w-16 h-16 flex items-center justify-center  bg-relatedWhite group-hover:bg-darkColor group-hover:text-relatedWhite rounded-lg text-mutedColor text-2xl mb-4 transition-all duration-300 ease-in-out ">
             {step.icon}
           </div>
         
           <h3 className="text-lg font-semibold text-gray-800 group-hover:text-darkColor">
             {step.title}
           </h3>
           <p className="text-gray-500 mt-2">{step.description}</p>
         </div>
         

          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
