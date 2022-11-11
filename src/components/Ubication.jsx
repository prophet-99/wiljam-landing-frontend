import React from 'react';

import DecorationSVG from '../assets/svg/ubication/decoration.inline.svg';

const Ubication = () => (
  <section className="o-container c-ubication js-section">
    {/* INIT HEADER SECTION */}
    <p className="o-mb-24 o-color-primary-blue-100 o-text-bold o-text-align-center">
      Ubicación
    </p>
    <h2 className="c-gallery__title o-color-neutral-black-100 o-mb-16 o-text-align-center">
      El lugar donde puedes{' '}
      <span className="o-color-primary-blue-100">encontrarnos</span>
    </h2>
    <p className="c-gallery__text c-gallery__subtitle o-mb-48 o-mb-sm-64 o-color-neutral-plumb-100 o-text-align-center">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias esse magni
      neque atque ullam deleniti numquam, beatae mollitia minus debitis saepe
      eos consequatur consectetur quos quas ut facilis provident aliquid.
    </p>
    {/* END HEADER SECTION */}
    {/* INIT LOCATION SECTION */}
    <article className="o-flex">
      <iframe
        title="Location"
        className="c-ubication__map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1400.7992279960004!2d-79.87619031637587!3d-6.762717828469464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1664032790813!5m2!1ses!2spe"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </article>
    {/* INIT LOCATION SECTION */}
    {/* INIT DECORATION SECTION */}
    <DecorationSVG className="c-ubication__decoration" />
    {/* END DECORATION SECTION */}
  </section>
);

export default Ubication;
