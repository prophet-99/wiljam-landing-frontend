import React from 'react';
import { Helmet } from 'react-helmet';

import useGetCompanyData from '../hooks/useGetCompanyData';

const SEO = () => {
  const { title, description, keywords, author } = useGetCompanyData();

  return (
    <Helmet
      htmlAttributes={{ lang: 'es' }}
      title={title}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: author },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
      ]}
    />
  );
};

export default SEO;
