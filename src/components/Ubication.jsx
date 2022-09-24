import React from 'react';

const Ubication = () => (
  <section className="o-container c-ubication">
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
    <svg
      className="c-ubication__decoration"
      width="600"
      height="600"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(300,300)">
        <path
          d="M176.2,-106.9C208.7,-45.5,201.8,33.5,165.8,99.4C129.9,165.3,65,218.2,-9.2,223.5C-83.4,228.8,-166.9,186.7,-201.6,121.4C-236.4,56.2,-222.6,-32.2,-180.9,-98.9C-139.1,-165.7,-69.6,-210.8,1.2,-211.5C71.9,-212.2,143.8,-168.3,176.2,-106.9Z"
          fill="#F2D388"
        />
      </g>
    </svg>
    {/* END DECORATION SECTION */}
  </section>
);

export default Ubication;
