// // layout.tsx
// 'use client'
// import { Provider } from 'react-redux';

// import localFont from 'next/font/local';
// import './globals.css';
// import 'react-datepicker/dist/react-datepicker.css';
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import { store } from './store/store';
// import { Toaster } from 'react-hot-toast';
//   // Import the toast styles
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { Suspense } from 'react';
// import { ButtonLoader } from './components/generalComp/Loader';
// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
      
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <Provider store={store}>
//         <Toaster />
//           <Header/>
//           <Suspense fallback={<div> <ButtonLoader /></div>}>
//             {children}
//           </Suspense>
//           <Footer/>
//         </Provider>
//       </body>
//     </html>
//   );
// }
// 'use client'
// import { Provider } from 'react-redux';
// import localFont from 'next/font/local';
// import './globals.css';
// import 'react-datepicker/dist/react-datepicker.css';
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import { store } from './store/store';
// import { Toaster } from 'react-hot-toast';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { Suspense, useState, useEffect } from 'react';
// import { ButtonLoader } from './components/generalComp/Loader';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [loading, setLoading] = useState(true);

//   // Simulate a delay to show the loader on initial load
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 0); // Adjust delay as needed
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <Provider store={store}>
//           <Toaster />
//           <Header />
//           {loading ? (
//             <div className='h-screen flex items-center justify-center'>
//               <ButtonLoader />
//             </div>
//           ) : (
//             <Suspense fallback={<div className='h-screen flex items-center justify-center'><ButtonLoader /></div>}>
//               {children}
//             </Suspense>
//           )}
//           <Footer />
//         </Provider>
//       </body>
//     </html>
//   );
// }
'use client'
import { Provider } from 'react-redux';
import localFont from 'next/font/local';
import './globals.css';
import 'react-datepicker/dist/react-datepicker.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { store } from './store/store';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import { Suspense, useState, useEffect } from 'react';
import { ButtonLoader } from './components/generalComp/Loader';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  // Simulate a delay to show the loader on initial load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);
  

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider store={store}>
          <Toaster />
          {loading ? (
            <div className='h-screen flex items-center justify-center'>
              <ButtonLoader />
            </div>
          ) : (
            <>
              <Header />
              <Suspense fallback={<div className='h-screen flex items-center justify-center'><ButtonLoader /></div>}>
                {children}
              </Suspense>
              <Footer />
            </>
          )}
        </Provider>
      </body>
    </html>
  );
}
