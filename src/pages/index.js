// import React, { Suspense } from 'react';
import DownloadApp from '../components/DownloadApp'
import HowItWorks from '../components/HowItWoks';
import OurProducts from '../components/OurProducts';
import ViewAll from '../components/ViewAll';
import Intro from '../components/Intro';

// const OurProducts = React.lazy(() => import('../components/OurProducts'));

export default function Home() {

  return (
    <div>
      <Intro />
      <HowItWorks />
      <OurProducts />
      <ViewAll />
      <DownloadApp />
    </div>
  );
}
