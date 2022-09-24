import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const Navbar = () => {
  const toggleMobileMenu = () => {
    document.querySelector('.js-navbar-mobile').classList.toggle('is-active');
  };

  return (
    <header className="c-navbar">
      <nav className="c-navbar__desktop">
        <StaticImage
          className="c-navbar__logo"
          alt="WILJAM logo"
          src="../assets/images/brand/example-logo.png"
          placeholder="tracedSVG"
        />
        <span
          className="o-display-block o-display-lg-none"
          role="presentation"
          onClick={toggleMobileMenu}
          onKeyDown={toggleMobileMenu}
        >
          <i className="c-navbar__desktop-icon fa-solid fa-bars " />
        </span>
        {/* INIT DESKTOP MENU SECTION */}
        <ul className="o-display-none o-display-lg-flex o-flex-gap-40">
          <li className="c-navbar__item">
            <a href="#/home">Inicio</a>
          </li>
          <li className="c-navbar__item">
            <a href="#/about">Nososotros</a>
          </li>
          <li className="c-navbar__item">
            <a href="#/services">Servicios</a>
          </li>
          <li className="c-navbar__item">
            <a href="#/team">Equipo</a>
          </li>
          <li className="c-navbar__item">
            <a href="#/customers">Clientes</a>
          </li>
        </ul>
        <button
          className="o-display-none o-display-lg-block c-button c-button--primary"
          type="button"
        >
          Contáctanos
        </button>
        {/* END DESKTOP MENU SECTION */}
      </nav>
      {/* INIT MOBILE MENU SECTION */}
      <section className="c-navbar__mobile js-navbar-mobile">
        <span
          className="c-navbar__mobile-wrap"
          role="presentation"
          onClick={toggleMobileMenu}
          onKeyDown={toggleMobileMenu}
        >
          <i className="c-navbar__mobile-icon fa-solid fa-xmark" />
        </span>
        <span className="o-p-4">
          <a href="#/home">Inicio</a>
        </span>
        <span className="o-p-4">
          <a href="#/about">Nososotros</a>
        </span>
        <span className="o-p-4">
          <a href="#/services">Servicios</a>
        </span>
        <span className="o-p-4">
          <a href="#/team">Equipo</a>
        </span>
        <span className="o-p-4">
          <a href="#/customers">Clientes</a>
        </span>
        <span className="o-p-4">
          <button className="c-button c-button--primary" type="button">
            Contáctanos
          </button>
        </span>
      </section>
      {/* END MOBILE MENU SECTION */}
    </header>
  );
};
export default Navbar;
