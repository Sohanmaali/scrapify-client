import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PrimaryHeading } from './Heading';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { useRef } from 'react';
// import 'swiper/swiper-bundle.min.css';
// import { Navigation, Autoplay } from 'swiper';

export default function TestimonialCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  // Sample testimonials data
  const testimonials = [
    {
      name: "John Doe",
      image: "https://via.placeholder.com/150",
      review: "If you want the center image to be larger (highlighted), the scale-100 will apply, and the transition effect ensures it smoothly scales when it becomes the active slide.."
    },
    {
      name: "Jane Smith",
      image: "https://via.placeholder.com/150",
      review: "I found exactly what I needed, and the process was so easy and smooth. Highly recommended!"
    },
    {
      name: "Alice Brown",
      image: "https://via.placeholder.com/150",
      review: "Fantastic experience! The platform is intuitive, and the team is incredibly helpful."
    }
  ];

  return (
    <div className='p-2 sm:p-10 bg-relatedWhite'>
      <div className="relative border  rounded-lg h-[500px] overflow-hidden bg-darkColor">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Customers Say</h2>
        <button
          ref={prevRef}
          className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-lightColor text-mutedColor hover:bg-mutedColor hover:text-relatedWhite p-3 rounded-full shadow-lg"
        >
          <GrFormPrevious className='text-2xl font-semibold' />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 right-4 z-10  bg-lightColor text-mutedColor hover:bg-mutedColor hover:text-relatedWhite p-3 rounded-full shadow-lg transform -translate-y-1/2"
        >
          <GrFormNext className='text-2xl font-semibold' />
        </button>
        {/* Swiper Carousel with navigation, autoplay, and custom styles */}
        <Swiper
        
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000, // Auto slide every 3 seconds
            disableOnInteraction: false, // Keep autoplay even when user interacts
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation, Autoplay]}
          className="absolute top-20 left-0 right-0 z-10"
          // centeredSlides={true} // Center the current slide
          // slideToClickedSlide={true} // Allow click to focus on a specific slide
          onBeforeInit={(swiper:any) => {
            // Attach navigation elements before initialization
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          // loop
          grabCursor={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="text-center flex flex-col justify-center items-center">
                {/* Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-[150px] h-[150px] object-cover transform scale-90 transition-all duration-300 ease-in-out"
                />
                {/* Customer Name */}
                <h4 className=" text-relatedWhite text-xl font-semibold mt-4">{testimonial.name}</h4>
                {/* Customer Review */}
                <p className="text-lightColor mt-2 text-lg sm:px-20 px-5 ">{testimonial.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* The rounded circle div */}
        <div className="po h-[2000px] w-[2000px] bg-lightColor rounded-full absolute top-[-1690px] left-[50%] transform -translate-x-[50%] overflow-hidden">
          <h3 className=" px-10absolute top-[90%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] font-semibold text-2xl">
            <PrimaryHeading firstText="What Our Customers" secondText="Say" />
          </h3>
          <p className="absolute top-[60%] left-[50%] transform -translate-x-[50%] text-white text-xl">
            ABCD
          </p>
        </div>
      </div>
    </div>
  );
}
