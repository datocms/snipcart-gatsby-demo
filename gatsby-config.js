require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteName: 'My Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken:
          process.env.DATO_API_TOKEN || '1b2fe1bfc8abf2e08343a75e444b4d',
      },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey:
          process.env.SNIPCART_PUBLIC_TOKEN ||
          'OWE3MmZmMjQtNTk3Yi00OThhLWEwMmUtZDY4ZWM4NzIwYzZiNjM2NjM0Mzc1NzE0MTUwNzI1',
        autopop: true,
      },
    },
  ],
};
