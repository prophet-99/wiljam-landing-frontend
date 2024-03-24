import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const About = () => (
  <section className="o-container c-about o-flex o-flex-align-center o-flex-column o-flex-md-row o-flex-gap-32 js-section">
    {/* INIT IMAGE SECTION */}
    <article className="o-flex o-flex-align-center o-flex-justify-center o-flex-equal">
      <StaticImage
        className="c-about__image"
        alt="Employees in factory"
        placeholder="tracedSVG"
        src="../assets/images/about/about-employees.png"
      />
    </article>
    {/* END IMAGE SECTION */}
    {/* INIT CONTENT SECTION */}
    <article className="o-flex-equal">
      <p className="o-mb-24 o-color-primary-blue-100 o-text-bold o-text-align-center o-text-align-md-left">
        Nosotros
      </p>
      <h2 className="c-about__title o-mb-16 o-color-neutral-black-100 o-text-align-center o-text-align-md-left">
        Hemos estado haciendo esto desde{' '}
        <span className="o-color-primary-blue-100">1999</span>
      </h2>
      <p className="c-about__text o-color-neutral-plumb-100 o-text-align-center o-text-align-md-left">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi qui
        consequuntur, cupiditate quia ut fugiat sint laudantium ad? Repellendus
        vero fuga quis placeat vitae, voluptate consequuntur rem cupiditate
        nulla iure?
      </p>
    </article>
    {/* END CONTENT SECTION */}
  </section>
);

export default About;
