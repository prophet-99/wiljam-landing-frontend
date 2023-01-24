/* eslint-disable import/no-unresolved */
import React, { useRef, useState } from 'react';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import clientsDataJSON from '../assets/json/clients-data.json';
import useGetClientsGatsbyImage from '../hooks/useGetClientsGatsbyImage';
import DecorationTopSVG from '../assets/svg/clients/decoration-top.inline.svg';
import DecorationBottomSVG from '../assets/svg/clients/decoration-bottom.inline.svg';
import QuoteLeftSVG from '../assets/svg/clients/quote-left.inline.svg';
import QuoteRightSVG from '../assets/svg/clients/quote-right.inline.svg';

const Clients = () => {
  const { clientsImgs } = useGetClientsGatsbyImage();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentClient, setCurrentClient] = useState(clientsDataJSON[0]);

  return (
    <section className="o-container c-clients o-flex o-flex-align-center o-flex-column-reverse o-flex-lg-row o-flex-gap-32 js-section">
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
          onSlideChange={(s) => setCurrentClient(clientsDataJSON[s.realIndex])}
        >
          {clientsImgs.edges.map((img) => (
            <SwiperSlide key={img.node.base.split('.')[0]}>
              <GatsbyImage
                className="c-clients__swiper-img"
                fluid={img.node.childImageSharp.fluid}
                alt={img.node.base.split('.')[0]}
                image={getImage(img.node)}
              />
            </SwiperSlide>
          ))}
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
            <QuoteLeftSVG className="c-clients__quote is-left" />
            {currentClient.quote}
            <QuoteRightSVG className="c-clients__quote is-right" />
          </blockquote>
        </div>
        {/* END BLOCKQUOTE SECTION */}
      </article>
      {/* END HEADER SECTION */}
      {/* INIT DECORATION SECTION */}
      <DecorationTopSVG className="c-clients__decoration-top" />
      <DecorationBottomSVG className="c-clients__decoration-bottom" />
      {/* END DECORATION SECTION */}
    </section>
  );
};

export default Clients;
