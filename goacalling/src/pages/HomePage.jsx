import React from 'react';
import Header from '../components/Header';
import Plans from '../components/Plans';
import ImageSlide from '../components/ImageSlide';
import Footer from '../components/Footer';
import TourDataDisplay from '../components/TourDataDisplay';


export default function HomePage() {
  return (
<>
        <Header />
        <ImageSlide />
       
        <Plans />
        <TourDataDisplay />
        <Footer />
        </>
  );
}