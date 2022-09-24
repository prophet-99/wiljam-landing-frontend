/* eslint-disable import/no-unresolved */
import React, { useRef, useState } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

const Clients = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const clientList = [
    {
      id: 0,
      name: 'Rolando Castellanos Palacios',
      role: 'Jefe de exportaciones en Indra',
      quote:
        'Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    },
    {
      id: 1,
      name: 'Homero Agapito Romain',
      role: 'Jefe de Solitas SAC',
      quote:
        'Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    },
    {
      id: 2,
      name: 'Christian Guerrero Lapadula',
      role: 'Jefe de exportaciones en Phill',
      quote:
        'Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    },
  ];
  const [currentClient, setCurrentClient] = useState(clientList[0]);

  return (
    <section className="o-container c-clients o-flex o-flex-align-center o-flex-column-reverse o-flex-lg-row o-flex-gap-32">
      {/* INIT GALLERY SECTION */}
      <article className="c-clients__swiper-wrap">
        <div className="c-clients__swiper-controls">
          <button type="button" ref={prevRef}>
            <i className="fa-solid fa-angle-left" />
          </button>
          <button type="button" ref={nextRef}>
            <i className="fa-solid fa-angle-right" />
          </button>
        </div>
        <Swiper
          className="c-clients__swiper"
          loop
          grabCursor
          modules={[Navigation]}
          onInit={(swiper) => {
            const swiperRef = swiper;
            swiperRef.params.navigation.prevEl = prevRef.current;
            swiperRef.params.navigation.nextEl = nextRef.current;
            swiperRef.navigation.init();
            swiperRef.navigation.update();
          }}
          onSlideChange={(s) => setCurrentClient(clientList[s.realIndex])}
        >
          <SwiperSlide>
            <StaticImage
              class="c-clients__swiper-img"
              alt="Custom client 1"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              class="c-clients__swiper-img"
              alt="Custom client 2"
              src="https://images.unsplash.com/photo-1487252168646-fa0e87f6e83c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1108&q=80"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              class="c-clients__swiper-img"
              alt="Custom client 3"
              src="https://images.unsplash.com/photo-1515631604561-23e0be68ee06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </SwiperSlide>
        </Swiper>
      </article>
      {/* END GALLERY SECTION */}
      {/* INIT HEADER SECTION */}
      <article className="o-flex-equal">
        {/* INIT CONTENT SECTION */}
        <p className="o-mb-24 o-color-primary-blue-100 o-text-bold o-text-align-center o-text-align-lg-left">
          Clientes
        </p>
        <h2 className="c-clients__title o-color-neutral-black-100 o-mb-16 o-text-align-center o-text-align-lg-left">
          Nuestros clientes y sus{' '}
          <span className="o-color-primary-blue-100">testimonios</span>
        </h2>
        <p className="c-clients__text o-color-neutral-plumb-100 o-text-align-center o-text-align-lg-left o-mb-48">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias esse
          magni neque atque ullam deleniti numquam, beatae mollitia minus
          debitis saepe eos consequatur consectetur quos quas ut facilis
          provident aliquid.
        </p>
        {/* END CONTENT SECTION */}
        {/* INIT BLOCKQUOTE SECTION */}
        <div className="c-clients__blockquote">
          <section className="o-mb-16 o-text-align-center o-text-align-lg-left">
            <h4 className="o-color-primary-blue-100">{currentClient.name}</h4>
            <small className="o-display-block">{currentClient.role}</small>
          </section>
          <blockquote className="c-clients__text o-m-0 o-text-align-center o-text-align-lg-left">
            <svg className="c-clients__quote is-left" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
              />
            </svg>
            {currentClient.quote}
            <svg className="c-clients__quote is-right" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179z"
              />
            </svg>
          </blockquote>
        </div>
        {/* END BLOCKQUOTE SECTION */}
      </article>
      {/* END HEADER SECTION */}
      {/* INIT DECORATION SECTION */}
      <svg
        className="c-clients__decoration-top"
        width="600"
        height="600"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path
            d="M176.2,-106.9C208.7,-45.5,201.8,33.5,165.8,99.4C129.9,165.3,65,218.2,-9.2,223.5C-83.4,228.8,-166.9,186.7,-201.6,121.4C-236.4,56.2,-222.6,-32.2,-180.9,-98.9C-139.1,-165.7,-69.6,-210.8,1.2,-211.5C71.9,-212.2,143.8,-168.3,176.2,-106.9Z"
            fill="#6415ff"
          />
        </g>
      </svg>
      <svg
        className="c-clients__decoration-bottom"
        width="600"
        height="600"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path
            d="M125,-160.4C159.9,-146.7,184.6,-107.3,178.8,-70.9C173.1,-34.4,137,-0.8,128.8,47.3C120.7,95.5,140.6,158.2,123.8,198.4C107,238.6,53.5,256.3,5.4,248.9C-42.7,241.5,-85.4,208.9,-112.7,172.1C-140,135.3,-151.8,94.2,-146.3,59.7C-140.8,25.1,-117.9,-2.9,-104,-30.1C-90.1,-57.3,-85,-83.7,-69.1,-103.5C-53.3,-123.4,-26.6,-136.7,9.2,-149.4C45.1,-162,90.1,-174,125,-160.4Z"
            fill="#81e6d9"
          />
        </g>
      </svg>
      {/* END DECORATION SECTION */}
    </section>
  );
};

export default Clients;
