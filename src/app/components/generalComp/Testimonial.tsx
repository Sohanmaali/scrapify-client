import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PrimaryHeading } from "./Heading";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useRef } from "react";
// import 'swiper/swiper-bundle.min.css';
// import { Navigation, Autoplay } from 'swiper';

// export default function TestimonialCarousel() {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   // Sample testimonials data
//   const testimonials = [
   
//     {
//       name: "Sohan Maali",
//       image: "https://via.placeholder.com/150",
//       review:
//       "Fantastic experience! The platform is intuitive, and the team is incredibly helpful.",
//     },
//     {
//       name: "Mohan Maali",
//       image: "https://via.placeholder.com/150",
//       review:
//         "I found exactly what I needed, and the process was so easy and smooth. Highly recommended!",
//     },
//   ];

//   return (
//     <div className="p-2 sm:p-10 bg-relatedWhite">
//       <div className="relative border  rounded-lg h-[500px] overflow-hidden bg-darkColor">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-8">
//           What Our Customers Say
//         </h2>
//         <button
//           ref={prevRef}
//           className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-lightColor text-mutedColor hover:bg-mutedColor hover:text-relatedWhite p-3 rounded-full shadow-lg"
//         >
//           <GrFormPrevious className="text-2xl font-semibold" />
//         </button>
//         <button
//           ref={nextRef}
//           className="absolute top-1/2 right-4 z-10  bg-lightColor text-mutedColor hover:bg-mutedColor hover:text-relatedWhite p-3 rounded-full shadow-lg transform -translate-y-1/2"
//         >
//           <GrFormNext className="text-2xl font-semibold" />
//         </button>
//         {/* Swiper Carousel with navigation, autoplay, and custom styles */}
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{
//             delay: 3000, // Auto slide every 3 seconds
//             disableOnInteraction: false, // Keep autoplay even when user interacts
//           }}
//           navigation={{
//             prevEl: prevRef.current,
//             nextEl: nextRef.current,
//           }}
//           modules={[Navigation, Autoplay]}
//           className="absolute top-20 left-0 right-0 z-10"
//           onBeforeInit={(swiper: any) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//           }}
//           grabCursor={true}
//         >
//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide
//               key={index}
//               className="flex justify-center items-center"
//             >
//               <div className="text-center flex flex-col justify-center items-center">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="rounded-full w-[150px] h-[150px] object-cover transform scale-90 transition-all duration-300 ease-in-out"
//                 />
//                 <h4 className=" text-relatedWhite text-xl text-black font-semibold mt-4">
//                   {testimonial.name}
//                 </h4>

//                 <p className="text-lightColor mt-2 text-lg text-black sm:px-20 px-5 ">
//                   {testimonial.review}
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <div className="po h-[2000px] w-[2000px] bg-lightColor rounded-full absolute top-[-1690px] left-[50%] transform -translate-x-[50%] overflow-hidden">
//           <h3 className=" px-10absolute top-[90%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] font-semibold text-2xl">
//             <PrimaryHeading firstText="What Our Customers" secondText="Say" />
//           </h3>
//           <p className="absolute top-[60%] left-[50%] transform -translate-x-[50%] text-white text-xl">
//             ABCD
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function TestimonialCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      name: "Sohan Maali",
      image: "https://via.placeholder.com/150",
      review:
        "Fantastic experience! The platform is intuitive and easy to use, making my journey smooth. The support team was incredibly helpful and quick to resolve my queries. I felt valued as a customer, and the overall experience was amazing. I highly recommend this service to anyone looking for a hassle-free process.",
    },
    {
      name: "Mohan Maali",
      image: "https://via.placeholder.com/150",
      review:
        "I found exactly what I needed, and the process was seamless. The platform's user-friendly design exceeded my expectations. The team provided excellent assistance, ensuring I had no doubts or issues. This service is truly remarkable, and I’ll definitely recommend it to my friends and family. A top-notch experience!",
    },
  ];

  return (
    <div className="p-2 sm:p-10 bg-relatedWhite">
      <div className="relative border rounded-lg h-[500px] overflow-hidden bg-darkColor">
        <h2 className="text-3xl font-semibold text-black mb-8">
          What Our Customers Say
        </h2>
        <button
          ref={prevRef}
          className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-lightColor text-black hover:bg-mutedColor hover:text-relatedWhite p-3 rounded-full shadow-lg"
        >
          <GrFormPrevious className="text-2xl font-semibold" />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 right-4 z-10 bg-lightColor text-black hover:bg-mutedColor hover:text-relatedWhite p-3 rounded-full shadow-lg transform -translate-y-1/2"
        >
          <GrFormNext className="text-2xl font-semibold" />
        </button>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation, Autoplay]}
          className="absolute top-20 left-0 right-0 z-10"
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          grabCursor={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="text-center flex flex-col justify-center items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-[150px] h-[150px] object-cover transform scale-90 transition-all duration-300 ease-in-out"
                />
                <h4 className="text-black text-xl font-semibold mt-4">
                  {testimonial.name}
                </h4>
                <p className="text-black mt-2 text-lg sm:px-20 px-5">
                  {testimonial.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="h-[2000px] w-[2000px] bg-lightColor rounded-full absolute top-[-1690px] left-[50%] transform -translate-x-[50%] overflow-hidden">
          <h3 className="px-10 absolute top-[90%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] font-semibold text-2xl text-black">
            <PrimaryHeading firstText="What Our Customers" secondText="Say" />
          </h3>
          <p className="absolute top-[60%] left-[50%] transform -translate-x-[50%] text-black text-xl">
            ABCD
          </p>
        </div>
      </div>
    </div>
  );
}
