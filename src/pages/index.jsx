import React, { useLayoutEffect } from 'react';

import { redirectToWhatsAppUtil } from '../utils/company.util';
import HeroBanner from '../components/HeroBanner';
import About from '../components/About';
import Services from '../components/Services';
import Banner from '../components/Banner';
import Team from '../components/Team';
import Clients from '../components/Clients';
import Gallery from '../components/Gallery';
import Ubication from '../components/Ubication';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Index = () => {
  useLayoutEffect(() => {
    setTimeout(() => {
      document.querySelector('.js-loader').classList.add('is-loaded');
      document.querySelector('.js-content').classList.remove('is-loading');
    }, 1000);
  }, []);

  return (
    <>
      <main className="c-loader-content is-loading js-content">
        <HeroBanner />
        <About />
        <Banner />
        <Services />
        <Team />
        <Clients />
        <Gallery />
        <Ubication />
        <Footer />
      </main>
      <Loader />
      <button
        type="button"
        className="c-button c-button--whatsapp"
        onClick={() => redirectToWhatsAppUtil()}
      >
        <i className="fab fa-whatsapp" />
      </button>
    </>
  );
};

export default Index;
