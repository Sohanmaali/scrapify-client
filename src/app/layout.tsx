// layout.tsx
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
  // Import the toast styles
import Header from './components/Header';
import Footer from './components/Footer';
import { Suspense } from 'react';
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
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider store={store}>
        <Toaster />
          <Header/>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
