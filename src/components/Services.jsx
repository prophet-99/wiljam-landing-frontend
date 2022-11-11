import React from 'react';

import DecorationSVG from '../assets/svg/services/decoration.inline.svg';

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
      <DecorationSVG className="c-services__decoration" />
      {/* END DECORATION SECTION */}
    </section>
  );
};

export default Services;
