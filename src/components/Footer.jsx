import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="o-container c-footer">
      <StaticImage
        className="c-navbar__logo o-mb-32"
        alt="WILJAM logo"
        src="../assets/images/brand/example-logo.png"
        placeholder="tracedSVG"
      />
      {/* INIT MENU SECTION */}
      <ul className="o-mb-40 o-display-flex o-flex-column o-flex-sm-row o-flex-align-center o-flex-gap-40">
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
      <article className="o-mb-40 o-flex o-flex-gap-40">
        <a className="c-footer__icon" href="./">
          <i className="fa-brands fa-facebook-f" />
        </a>
        <a className="c-footer__icon" href="./">
          <i className="fa-brands fa-instagram" />
        </a>
        <a className="c-footer__icon" href="./">
          <i className="fa-brands fa-whatsapp" />
        </a>
      </article>
      {/* END SOCIAL NETWORKS */}
      {/* INIT INFO SECTION */}
      <p className="o-color-neutral-lead-100 o-text-align-center o-mb-0 c-footer__copyright">
        © Copyright {currentYear}, WILJAM SAC. <br />
        Todos los derechos reservados.
      </p>
      {/* END INFO SECTION */}
    </section>
  );
};

export default Footer;
