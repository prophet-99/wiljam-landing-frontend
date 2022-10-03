import React from 'react';

const Services = () => {
  const serviceList = [
    {
      id: 0,
      icon: 'fa-solid fa-shield-halved',
      title: 'Seguridad',
      description:
        'Estrictamente solo tratamos con proveedores que brindan seguridad de primer nivel.',
    },
    {
      id: 1,
      icon: 'fa-solid fa-headphones-simple',
      title: 'Consultoría 24/7',
      description:
        'Brindamos consultoría las 24 horas del día, los 7 días de la semana.',
    },
    {
      id: 2,
      icon: 'fa-solid fa-bolt',
      title: 'Rapidez',
      description:
        'Rápida puesta en marcha, sin trabas y con la calidad de siempre.',
    },
    {
      id: 3,
      icon: 'fa-solid fa-bolt',
      title: 'Rapidez',
      description:
        'Rápida puesta en marcha, sin trabas y con la calidad de siempre.',
    },
    {
      id: 4,
      icon: 'fa-solid fa-bolt',
      title: 'Rapidez',
      description:
        'Rápida puesta en marcha, sin trabas y con la calidad de siempre.',
    },
    {
      id: 5,
      icon: 'fa-solid fa-bolt',
      title: 'Rapidez',
      description:
        'Rápida puesta en marcha, sin trabas y con la calidad de siempre.',
    },
  ];

  return (
    <section className="o-container c-services js-section">
      {/* INIT HEADER SECTION */}
      <p className="o-mb-24 o-color-primary-blue-100 o-text-bold o-text-align-center">
        Servicios
      </p>
      <h2 className="c-services__title o-color-neutral-black-100 o-mb-16 o-text-align-center">
        Nuestros <span className="o-color-primary-blue-100">servicios</span>
      </h2>
      <p className="c-services__text c-services__subtitle o-mb-48 o-mb-sm-64 o-color-neutral-plumb-100 o-text-align-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias esse
        magni neque atque ullam deleniti numquam, beatae mollitia minus debitis
        saepe eos consequatur consectetur quos quas ut facilis provident
        aliquid.
      </p>
      {/* END HEADER SECTION */}
      {/* INIT SERVICES SECTION */}
      <div className="c-services__grid o-grid-container o-grid-container--gap-24 o-grid-container--gap-sm-32 o-grid-container--gap-lg-64">
        {serviceList.map(({ id, icon, title, description }) => (
          <article
            className="o-flex o-flex-column o-flex-md-row o-flex-align-center o-flex-gap-16 o-grid-column-12 o-grid-column-md-6 o-grid-column-lg-4"
            key={id}
          >
            <span className="c-services__miniature">
              <i className={icon} />
            </span>
            <section>
              <h5 className="o-text-align-center o-text-align-md-left o-mb-8">
                {title}
              </h5>
              <p className="c-services__text o-mb-0 o-color-neutral-plumb-100 o-text-align-center o-text-align-md-left">
                {description}
              </p>
            </section>
          </article>
        ))}
      </div>
      {/* END SERVICES SECTION */}
      {/* INIT DECORATION SECTION */}
      <svg
        className="c-services__decoration"
        width="600"
        height="600"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path
            d="M125,-160.4C159.9,-146.7,184.6,-107.3,178.8,-70.9C173.1,-34.4,137,-0.8,128.8,47.3C120.7,95.5,140.6,158.2,123.8,198.4C107,238.6,53.5,256.3,5.4,248.9C-42.7,241.5,-85.4,208.9,-112.7,172.1C-140,135.3,-151.8,94.2,-146.3,59.7C-140.8,25.1,-117.9,-2.9,-104,-30.1C-90.1,-57.3,-85,-83.7,-69.1,-103.5C-53.3,-123.4,-26.6,-136.7,9.2,-149.4C45.1,-162,90.1,-174,125,-160.4Z"
            fill="#FFB4BC"
          />
        </g>
      </svg>
      {/* END DECORATION SECTION */}
    </section>
  );
};

export default Services;
