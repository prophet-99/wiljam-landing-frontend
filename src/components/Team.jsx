import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const Team = () => (
  <section className="o-container c-team o-flex o-flex-align-center o-flex-column-reverse o-flex-lg-row o-flex-gap-32">
    {/* INIT HEADER SECTION */}
    <article className="o-flex-equal">
      <p className="o-mb-24 o-color-primary-blue-100 o-text-bold o-text-align-center o-text-align-lg-left">
        Equipo
      </p>
      <h2 className="c-team__title o-color-neutral-black-100 o-mb-16 o-text-align-center o-text-align-lg-left">
        Contamos con el mejor equipo{' '}
        <span className="o-color-primary-blue-100">profesional</span> del sector
      </h2>
      <p className="c-team__text o-color-neutral-plumb-100 o-text-align-center o-text-align-lg-left o-mb-48">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias esse
        magni neque atque ullam deleniti numquam, beatae mollitia minus debitis
        saepe eos consequatur consectetur quos quas ut facilis provident
        aliquid.
      </p>
      <div className="o-flex o-flex-gap-32 o-flex-column o-flex-sm-row o-flex o-flex-justify-between">
        <div className="o-text-align-center o-text-align-sm-left">
          <p className="o-text-bold">
            <span className="c-team__thumb o-color-semantic-green-100 o-bg-semantic-green-30">
              <i className="fa-solid fa-briefcase" />
            </span>{' '}
            Profesional
          </p>
          <p className="o-color-neutral-plumb-100">
            Contamos con los mejores profesionales de la región para trabajar
            con usted.
          </p>
        </div>
        <div className="o-text-align-center o-text-align-sm-left">
          <p className="o-text-bold">
            <span className="c-team__thumb o-color-semantic-blue-100 o-bg-semantic-blue-30">
              <i className="fa-solid fa-hand-holding-dollar" />
            </span>{' '}
            Asequible
          </p>
          <p className="o-color-neutral-plumb-100">
            Prometemos ofrecerle la mejor tarifa que podamos, a la par con el
            estándar de la industria.
          </p>
        </div>
      </div>
    </article>
    {/* END HEADER SECTION */}
    {/* INIT GRID SECTION */}
    <article className="o-flex-equal o-grid-container o-grid-container--gap-32">
      {[0, 1].map(() => (
        <>
          <div className="o-grid-column-6 o-grid-column-sm-4">
            <div className="o-mb-8 o-flex o-flex-justify-center">
              <StaticImage
                alt="Profile Juan"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                class="c-team__profile "
              />
            </div>
            <p className="o-text-bold o-text-align-center o-mb-4">
              Juan Llaxa Flores
            </p>
            <small className="o-text-align-center o-display-block o-color-neutral-plumb-100">
              Desarrollador
            </small>
          </div>
          <div className="o-grid-column-6 o-grid-column-sm-4">
            <div className="o-mb-8 o-flex o-flex-justify-center">
              <StaticImage
                alt="Profile Juan"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                class="c-team__profile "
              />
            </div>
            <p className="o-text-bold o-text-align-center o-mb-4">
              Maryuri Lopez Quinde
            </p>
            <small className="o-text-align-center o-display-block o-color-neutral-plumb-100">
              Relaciones internacionales
            </small>
          </div>
          <div className="o-grid-column-6 o-grid-column-sm-4">
            <div className="o-mb-8 o-flex o-flex-justify-center">
              <StaticImage
                alt="Profile Juan"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="c-team__profile "
              />
            </div>
            <p className="o-text-bold o-text-align-center o-mb-4">
              Marlene Ruiz Soldado
            </p>
            <small className="o-text-align-center o-display-block o-color-neutral-plumb-100">
              Recursos humanos
            </small>
          </div>
        </>
      ))}
    </article>
    {/* END GRID SECTION */}
  </section>
);

export default Team;
