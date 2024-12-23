'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { isAuthenticated, removeToken } from './utils/auth';
import ImageSlider from './components/ImageSlider';
import CategoryComp from './components/card/CategoryComp';
import HowItWorks from './components/generalComp/HowItWorkComp';
import ProductList from './components/card/ProductList';
import InfiniteMarquee from './components/generalComp/Marquee';
import QuickShell from './components/generalComp/QuickShell';
import Testimonials from './components/generalComp/Testimonial';
import ScrollCounter from './components/generalComp/ScrollCounter';
import { GoOnTopButton } from './components/generalComp/Buttons';
import LoginPage from './pages/auth/login/page';
import DetaulsCraft from './components/generalComp/TestFile';

const HomePage = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <div>
        <div>
          <ImageSlider/>
          <CategoryComp/>
          <ProductList/>
          <InfiniteMarquee/>
          <HowItWorks/>
          <QuickShell/>
          <ScrollCounter/>
          <Testimonials/>
          <GoOnTopButton/>
          <DetaulsCraft/>
          {/* <LoginPage/> */}
        </div>
    </div>
  );
};

export default HomePage;
