'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { isAuthenticated, removeToken } from './utils/auth';
import ImageSlider from './components/ImageSlider';
import CategoryComp from './components/card/CategoryComp';
import ProductList from './components/card/ProductList';
import InfiniteMarquee from './components/generalComp/Marquee';
import QuickShell from './components/generalComp/QuickShell';
import Testimonials from './components/generalComp/Testimonial';
import ScrollCounter from './components/generalComp/ScrollCounter';
import { GoOnTopButton } from './components/generalComp/Buttons';
import LoginPage from './pages/auth/login/page';
import DetaulsCraft from './components/generalComp/HowItIsWorkComp';
import ScrapProductCard from './components/card/ScrapProductCard';
import CategoryCard from './components/card/CategoryCard';
import { ButtonLoader } from './components/generalComp/Loader';
import HeroSection from './components/Home/HeroSection';
import HowItIsWorkComp from './components/generalComp/HowItIsWorkComp';
import WhyChooseUs from './components/generalComp/WhyChooseUs';
const HomePage = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <div>
        <div>
          <ImageSlider/>
          <CategoryComp/>
          {/* <ProductList/> */}
         
           <HowItIsWorkComp/>
           <InfiniteMarquee/>
           <HeroSection/>
          <WhyChooseUs/>
          <QuickShell/>
          <ScrollCounter/>
          <Testimonials/>
          <GoOnTopButton/>
        </div>
    </div>
  );
};

export default HomePage;
