import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import Navbar from './Navbar';

const HeroBanner = () => {
  const scrollToElement = (position) => {
    const elementRef = document.querySelectorAll('.js-section')[position];
    const elementRefOffset = elementRef.getBoundingClientRect().top;
    const bodyOffset = document.body.getBoundingClientRect().top;
    window.scrollTo({
      top: elementRefOffset - bodyOffset,
      behavior: 'smooth',
    });
  };

  return (
    <section className="c-hero-banner js-section">
      {/* INIT BACKDROP SECTION */}
      <StaticImage
        className="c-hero-banner__image"
        alt="Hero banner"
        placeholder="tracedSVG"
        src="../assets/images/hero-banner/banner.jpg"
      />
      <div className="c-hero-banner__backdrop" />
      {/* END BACKDROP SECTION */}
      <div className="c-hero-banner__content">
        {/* INIT NAVBAR SECTION */}
        <Navbar />
        {/* END NAVBAR SECTION */}
        <div className="o-flex o-flex-column o-flex-xl-row o-flex-xl-align-center o-flex-equal o-flex-gap-64 o-flex-gap-xl-48  c-hero-banner__wrapper">
          {/* INIT CONTENT SECTION */}
          <article className="o-flex o-flex-column o-flex-align-center o-flex-justify-center o-p-16">
            <span className="c-hero-banner__quote o-mb-16">
              Habilitamos y comercializamos todo tipo de especies marinas
            </span>
            <h1 className="o-text-align-center o-mb-36 o-mb-sm-64 c-hero-banner__title">
              <span className="o-color-neutral-white-100 o-display-block">
                Contrata a la mejor
              </span>
              <span className="c-hero-banner__skew">Empresa pesquera</span>
            </h1>
            <button
              className="c-button c-button--secondary"
              type="button"
              onClick={() => scrollToElement(4)}
            >
              Leer historias de clientes
            </button>
          </article>
          {/* END CONTENT SECTION */}
          {/* INIT VIDEO SECTION */}
          <article className="o-flex-equal">
            <div className="c-hero-banner__video">
              <iframe
                src="https://www.youtube.com/embed/nUPeqT36w48"
                title="Some title of video"
                frameBorder="0"
              />
            </div>
          </article>
          {/* END VIDEO SECTION */}
        </div>
      </div>
    </section>
  );
};
export default HeroBanner;
