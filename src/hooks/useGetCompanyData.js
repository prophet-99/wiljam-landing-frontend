import { useStaticQuery, graphql } from 'gatsby';

const useGetCompanyData = () => {
  const queryData = useStaticQuery(graphql`
    query {
      site {
        info: siteMetadata {
          title
          description
          author
          authorName
          companyPhone
          whatsAppText
        }
      }
    }
  `);

  return queryData.site.info;
};

export default useGetCompanyData;
