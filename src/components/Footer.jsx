import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => (
  <section className="o-container c-footer">
    <StaticImage
      className="c-navbar__logo o-mb-24"
      alt="WILJAM logo"
      src="../assets/images/brand/example-logo.png"
      placeholder="tracedSVG"
    />
    {/* INIT MENU SECTION */}
    <ul className="o-mb-24 o-display-flex o-flex-gap-40">
      <li className="c-footer__item">
        <a href="#/home">Inicio</a>
      </li>
      <li className="c-footer__item">
        <a href="#/about">Nososotros</a>
      </li>
      <li className="c-footer__item">
        <a href="#/services">Servicios</a>
      </li>
      <li className="c-footer__item">
        <a href="#/team">Equipo</a>
      </li>
      <li className="c-footer__item">
        <a href="#/customers">Clientes</a>
      </li>
    </ul>
    {/* END MENU SECTION */}
    {/* INIT SOCIAL NETWORKS */}
    <article>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti iusto
      voluptatibus corrupti magni rerum, recusandae tenetur delectus iste,
      sapiente dolore, ut asperiores iure vero quibusdam alias dolorem at modi
      ex?
    </article>
    {/* END SOCIAL NETWORKS */}
    {/* INIT INFO SECTION */}
    <p className="o-color-neutral-lead-120 o-text-align-center o-mb-0">
      © Copyright 2022
    </p>
    {/* END INFO SECTION */}
  </section>
);

export default Footer;
