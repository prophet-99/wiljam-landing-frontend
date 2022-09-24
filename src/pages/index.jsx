import React from 'react';

import HeroBanner from '../components/HeroBanner';
import About from '../components/About';
import Services from '../components/Services';
import Banner from '../components/Banner';
import Team from '../components/Team';
import Clients from '../components/Clients';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Index = () => (
  <main>
    <HeroBanner />
    <About />
    <Banner />
    <Services />
    <Team />
    <Clients />
    <Gallery />
    <Footer />
  </main>
);

export default Index;
