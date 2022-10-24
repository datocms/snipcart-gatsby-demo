import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../layouts/index';
import Img from 'gatsby-image';

const Home = () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
        products: allDatoCmsProduct {
          edges {
            node {
              id
              name
              price
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        seo: datoCmsSeoMetaTags {
          tags
        }
        site: datoCmsSite {
          faviconMetaTags {
            tags
          }
          globalSeo {
            siteName
          }
        }
      }
    `}
    render={data => (
      <Layout
        site={data.site}
        seo={{ ...data.seo, ...data.site.faviconMetaTags }}
      >
        <div className="Catalogue">
          {data.products.edges.map(({ node: product }) => (
            <div className="Catalogue__item" key={product.id}>
              <div
                className="Product snipcart-add-item"
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-image={product.image.url}
                data-item-name={product.name}
                data-item-url={`/`}
              >
                <div className="Product__image">
                  <Img sizes={product.image.sizes} />
                </div>{' '}
                <div className="Product__details">
                  <div className="Product__name">
                    {product.name}
                    <div className="Product__price">{product.price}€</div>
                  </div>
                  <span className="Product__buy">Buy now</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    )}
  />
);

export default Home;
