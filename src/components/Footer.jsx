import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import useGetCompanyData from '../hooks/useGetCompanyData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { companyPhone, whatsAppText, authorName } = useGetCompanyData();

  const scrollToElement = (position) => {
    const elementRef = document.querySelectorAll('.js-section')[position];
    const elementRefOffset = elementRef.getBoundingClientRect().top;
    const bodyOffset = document.body.getBoundingClientRect().top;
    window.scrollTo({
      top: elementRefOffset - bodyOffset,
      behavior: 'smooth',
    });
  };

  const redirectToWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=${companyPhone}&text=${whatsAppText}`,
      '_blank'
    );
  };

  return (
    <section className="o-container c-footer">
      <StaticImage
        className="c-navbar__logo o-mb-32"
        alt="WILJAM logo"
        src="../assets/images/brand/example-logo.png"
        placeholder="tracedSVG"
      />
      {/* INIT MENU SECTION */}
      <ul className="o-mb-40 o-display-flex o-flex-column o-flex-md-row o-flex-align-center o-flex-gap-40">
        <li className="c-footer__item">
          <a href="#/" onClick={() => scrollToElement(0)}>
            Inicio
          </a>
        </li>
        <li className="c-footer__item">
          <a href="#/" onClick={() => scrollToElement(1)}>
            Nososotros
          </a>
        </li>
        <li className="c-footer__item">
          <a href="#/" onClick={() => scrollToElement(2)}>
            Servicios
          </a>
        </li>
        <li className="c-footer__item">
          <a href="#/" onClick={() => scrollToElement(3)}>
            Equipo
          </a>
        </li>
        <li className="c-footer__item">
          <a href="#/" onClick={() => scrollToElement(4)}>
            Clientes
          </a>
        </li>
        <li className="c-footer__item">
          <a href="#/" onClick={() => scrollToElement(5)}>
            Galería
          </a>
        </li>
        <li className="c-footer__item">
          <a href="#/" onClick={() => scrollToElement(6)}>
            Ubicación
          </a>
        </li>
      </ul>
      {/* END MENU SECTION */}
      {/* INIT SOCIAL NETWORKS */}
      <article className="o-mb-40 o-flex o-flex-gap-40">
        <a className="c-footer__icon" href="/#">
          <i className="fa-brands fa-facebook-f" />
        </a>
        <a className="c-footer__icon" href="./">
          <i className="fa-brands fa-instagram" />
        </a>
        <a
          className="c-footer__icon"
          href="/#"
          onClick={() => redirectToWhatsApp()}
        >
          <i className="fa-brands fa-whatsapp" />
        </a>
      </article>
      {/* END SOCIAL NETWORKS */}
      {/* INIT INFO SECTION */}
      <p className="o-color-neutral-lead-100 o-text-align-center o-mb-40 c-footer__copyright">
        © Copyright {currentYear}, WILJAM SAC. <br />
        Todos los derechos reservados.
      </p>
      <small className="o-mb-0">Powered by {authorName} 🐱‍👤</small>
      {/* END INFO SECTION */}
    </section>
  );
};

export default Footer;
