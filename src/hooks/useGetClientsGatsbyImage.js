import { useStaticQuery, graphql } from 'gatsby';

const useGetClientsGatsbyImage = () => {
  const queryData = useStaticQuery(graphql`
    query {
      clientsImgs: allFile(
        sort: { fields: base, order: ASC }
        filter: {
          name: { regex: "/clients_[0-9]/" }
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
                width: 1200
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

export default useGetClientsGatsbyImage;
