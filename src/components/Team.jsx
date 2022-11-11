import React, { Fragment } from 'react';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import teamDataJSON from '../assets/json/team-data.json';
import useGetTeamGatsbyImage from '../hooks/useGetTeamGatsbyImage';

const Team = () => {
  const { teamImgs } = useGetTeamGatsbyImage();

  return (
    <section className="o-container c-team o-flex o-flex-align-center o-flex-column-reverse o-flex-lg-row o-flex-gap-32 js-section">
      {/* INIT HEADER SECTION */}
      <article className="o-flex-equal">
        <p className="o-mb-24 o-color-primary-blue-100 o-text-bold o-text-align-center o-text-align-lg-left">
          Equipo
        </p>
        <h2 className="c-team__title o-color-neutral-black-100 o-mb-16 o-text-align-center o-text-align-lg-left">
          Contamos con el mejor equipo{' '}
          <span className="o-color-primary-blue-100">profesional</span> del
          sector
        </h2>
        <p className="c-team__text o-color-neutral-plumb-100 o-text-align-center o-text-align-lg-left o-mb-48">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias esse
          magni neque atque ullam deleniti numquam, beatae mollitia minus
          debitis saepe eos consequatur consectetur quos quas ut facilis
          provident aliquid.
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
      <article className="o-flex-equal o-grid-container o-grid-container--gap-16 o-grid-container--gap-sm-32">
        {teamImgs.edges.map((img) => (
          <Fragment key={img.node.id}>
            <div className="o-grid-column-6 o-grid-column-sm-4">
              <div className="o-mb-8 o-flex o-flex-justify-center">
                <GatsbyImage
                  className="c-team__profile"
                  fluid={img.node.childImageSharp.fluid}
                  alt={img.node.base.split('.')[0]}
                  image={getImage(img.node)}
                />
              </div>
              <p className="o-text-bold o-text-align-center o-mb-4">
                {
                  teamDataJSON.find(
                    ({ id }) => img.node.base.split('.')[0].split('_')[1] === id
                  ).name
                }
              </p>
              <small className="o-text-align-center o-display-block o-color-neutral-plumb-100">
                {
                  teamDataJSON.find(
                    ({ id }) => img.node.base.split('.')[0].split('_')[1] === id
                  ).workPosition
                }
              </small>
            </div>
          </Fragment>
        ))}
      </article>
      {/* END GRID SECTION */}
    </section>
  );
};

export default Team;
