import React from 'react';

const Banner = () => (
  <section className="o-container c-banner">
    {/* INIT HEADER SECTION */}
    <h2 className="c-banner__title o-color-neutral-white-100 o-mb-16 o-text-align-center">
      Cerca de 20 proyectos realizados
    </h2>
    <p className="c-banner__subtitle c-banner__text o-mb-48 o-mb-sm-64 o-color-neutral-white-100 o-text-align-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    {/* END HEADER SECTION */}
    {/* INIT DETAILS SECTION */}
    <article className="o-flex o-flex-gap-32 o-flex-justify-center">
      <div className="o-flex o-flex-column o-flex-justify-center o-flex-align-center">
        <h2 className="o-mb-8 o-text-align-center o-color-neutral-white-100">
          20+
        </h2>
        <span className="o-color-neutral-white-100 o-text-bold">Clientes</span>
      </div>
      <div className="o-flex o-flex-column o-flex-justify-center o-flex-align-center">
        <h2 className="o-mb-8 o-text-align-center o-color-neutral-white-100">
          150+
        </h2>
        <span className="o-color-neutral-white-100 o-text-bold">Empleados</span>
      </div>
    </article>
    {/* END DETAILS SECTION */}
  </section>
);

export default Banner;
