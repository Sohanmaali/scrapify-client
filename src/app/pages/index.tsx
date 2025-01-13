import React from 'react';
import ImageSlider from '../components/ImageSlider';
import CategoryComp from '../components/card/CategoryComp';
import ProductList from '../components/card/ProductList';
import HowItWorks from '../components/generalComp/WhyChooseUs';
import LandingSection from '../components/generalComp/QuickShell';
import ScrollCounter from '../components/generalComp/ScrollCounter';
import TestimonialCarousel from '../components/generalComp/Testimonial';
import { GoOnTopButton } from '../components/generalComp/Buttons';

const HomePage = () => {
  return (
    <>
    <ImageSlider/>
    <CategoryComp/>
    <ProductList/>
    <HowItWorks/>
    <LandingSection/>
    <ScrollCounter/>
    <TestimonialCarousel/>
    <GoOnTopButton/>
    </>
  );
};

export default HomePage;
