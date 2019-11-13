import React, { lazy, Suspense } from 'react';
import '../Home/style.css';
import Footer from '../../components/footer';
import Header from '../../components/header'
import Content from '../../components/content'

const Slider = lazy(() => import('../../components/slider'))

function Home() {
  return (
    <div>
      <Header />
      <Suspense> 
        <Slider />
      </Suspense>
      <Content />
      <Footer /> 
    </div>   
  );
}

export default Home;
