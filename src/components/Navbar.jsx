import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import {
  getCellPhoneUtil,
  redirectToWhatsAppUtil,
} from '../utils/company.util';

const Navbar = () => {
  const toggleMobileMenu = () => {
    document.querySelector('.js-navbar-mobile').classList.toggle('is-active');
  };

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
            <a href="#/" onClick={() => scrollToElement(0)}>
              Inicio
            </a>
          </li>
          <li className="c-navbar__item">
            <a href="#/" onClick={() => scrollToElement(1)}>
              Nososotros
            </a>
          </li>
          <li className="c-navbar__item">
            <a href="#/" onClick={() => scrollToElement(2)}>
              Servicios
            </a>
          </li>
          <li className="c-navbar__item">
            <a href="#/" onClick={() => scrollToElement(3)}>
              Equipo
            </a>
          </li>
          <li className="c-navbar__item">
            <a href="#/" onClick={() => scrollToElement(4)}>
              Clientes
            </a>
          </li>
          <li className="c-navbar__item">
            <a href="#/" onClick={() => scrollToElement(5)}>
              Galería
            </a>
          </li>
          <li className="c-navbar__item">
            <a href="#/" onClick={() => scrollToElement(6)}>
              Ubicación
            </a>
          </li>
        </ul>
        <button
          className="o-display-none o-display-lg-block c-button c-button--primary"
          type="button"
          onClick={() => redirectToWhatsAppUtil()}
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
          <a href="#/">Inicio</a>
        </span>
        <span className="o-p-4">
          <a href="#/">Nososotros</a>
        </span>
        <span className="o-p-4">
          <a href="#/">Servicios</a>
        </span>
        <span className="o-p-4">
          <a href="#/">Equipo</a>
        </span>
        <span className="o-p-4">
          <a href="#/">Clientes</a>
        </span>
        <span className="o-p-4">
          <a href="#/">Galería</a>
        </span>
        <span className="o-p-4">
          <a href="#/">Ubicación</a>
        </span>
        <span className="o-p-4">
          <button
            className="c-button c-button--primary"
            type="button"
            onClick={() => {
              window.open(`tel:${getCellPhoneUtil()}`);
            }}
          >
            Contáctanos
          </button>
        </span>
      </section>
      {/* END MOBILE MENU SECTION */}
    </header>
  );
};
export default Navbar;
