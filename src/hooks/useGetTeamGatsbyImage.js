import { useStaticQuery, graphql } from 'gatsby';

const useGetTeamGatsbyImage = () => {
  const queryData = useStaticQuery(graphql`
    query {
      teamImgs: allFile(
        sort: { fields: base, order: ASC }
        filter: {
          name: { regex: "/team_[0-9]/" }
          extension: { regex: "/(jpeg|jpg)/" }
        }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              gatsbyImageData(
                placeholder: TRACED_SVG
                width: 800
                formats: AUTO
                quality: 70
              )
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return queryData;
};

export default useGetTeamGatsbyImage;
