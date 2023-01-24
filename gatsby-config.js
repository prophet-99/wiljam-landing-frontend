/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // pathPrefix: '/public',
  siteMetadata: {
    // TODO: INCLUIR TU PORTAFOLIO EN FOOTER
    // TODO: MEJORAR METADATA: https://www.diamante.com.pe/#productos - VER EN REDES SOCIALES COMO SE VISUALIZA
    title: 'Pesquera WILJAM - Conservas, pescado congelado',
    description:
      'Somos una empresa pesquera que ofrece diferentes servicios a la medida del cliente manteniendo la excelencia en lo que hacemos.',
    author: '@prophet_1999',
    authorName: 'Alexander Avila Briones',
    companyPhone: '+51932265652',
    whatsAppText:
      'Deseo%20más%20informacion%20acerca%20de%20los%20servicios%20que%20brindan',
    keywords:
      'empresa pesquera, vida marina, pesca, criaderos, procesamiento, productos marinos, congelados',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};
