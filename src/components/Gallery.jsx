import React, { useRef } from 'react';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import galleryDataJSON from '../assets/json/gallery-data.json';
import DecorationTopSVG from '../assets/svg/gallery/decoration-top.inline.svg';
import DecorationBottomSVG from '../assets/svg/gallery/decoration-bottom.inline.svg';
import useGetGalleryGatsbyImage from '../hooks/useGetGalleryGatsbyImage';

const Gallery = () => {
  const imageDetailModal = useRef();
  const { galleryImgs } = useGetGalleryGatsbyImage();

  const openDetailModal = (imgRef) => {
    document.querySelector('.js-modal-img').src =
      imgRef.childImageSharp.gatsbyImageData.images.fallback.src;
    imageDetailModal.current.classList.add('is-active');
  };

  const closeDetailModal = () => {
    imageDetailModal.current.classList.remove('is-active');
  };

  return (
    <>
      <section className="o-container c-gallery js-section">
        {/* INIT HEADER SECTION */}
        <p className="o-mb-24 o-color-primary-blue-100 o-text-bold o-text-align-center">
          Galería
        </p>
        <h2 className="c-gallery__title o-color-neutral-black-100 o-mb-16 o-text-align-center">
          Un poco de lo que{' '}
          <span className="o-color-primary-blue-100">hacemos</span>
        </h2>
        <p className="c-gallery__text c-gallery__subtitle o-mb-48 o-mb-sm-64 o-color-neutral-plumb-100 o-text-align-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias esse
          magni neque atque ullam deleniti numquam, beatae mollitia minus
          debitis saepe eos consequatur consectetur quos quas ut facilis
          provident aliquid.
        </p>
        {/* END HEADER SECTION */}
        {/* INIT GALLERY SECTION */}
        <article className="c-gallery__container o-grid-container">
          {galleryImgs.edges.map((img) => (
            <div
              key={img.node.id}
              className="c-gallery__card o-grid-column-12 o-grid-column-md-6 o-grid-column-lg-4"
              role="presentation"
              onClick={() => openDetailModal(img.node)}
              onKeyDown={() => openDetailModal(img.node)}
            >
              <section className="o-overflow-hidden">
                <GatsbyImage
                  className="c-gallery__card-img"
                  fluid={img.node.childImageSharp.fluid}
                  alt={img.node.base.split('.')[0]}
                  image={getImage(img.node)}
                />
              </section>
              <div className="o-py-32 o-px-24">
                <p className="o-mb-4 o-text-bold">
                  {
                    galleryDataJSON.find(
                      ({ id }) =>
                        img.node.base.split('.')[0].split('_')[1] === id
                    ).phrase
                  }
                </p>
                <small className="o-mb-0 o-color-neutral-plumb-100">
                  {
                    galleryDataJSON.find(
                      ({ id }) =>
                        img.node.base.split('.')[0].split('_')[1] === id
                    ).author
                  }
                </small>
              </div>
            </div>
          ))}
          {/* INIT DECORATION SECTION */}
          <DecorationTopSVG className="c-gallery__decoration c-gallery__decoration--top" />
          <DecorationBottomSVG className="c-gallery__decoration c-gallery__decoration--bottom" />
          {/* END DECORATION SECTION */}
        </article>
        {/* END GALLERY SECTION */}
      </section>
      {/* INIT FULL IMAGE SECTION */}
      <div className="c-gallery__modal" ref={imageDetailModal}>
        <section className="c-gallery__detail">
          <img
            className="c-gallery__full-img js-modal-img"
            alt="Full width card thumb"
          />
        </section>
        <div
          role="presentation"
          onClick={closeDetailModal}
          onKeyDown={openDetailModal}
        >
          <i className="c-gallery__close fa-regular fa-circle-xmark" />
        </div>
      </div>
      {/* END FULL IMAGE SECTION */}
    </>
  );
};

export default Gallery;
