import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div className="Catalogue">
    {
      data.site.siteMetadata.products.map(product => (
        <div
          className="Catalogue__item"
          key={product.slug}
        >
          <a href="#" className="Product">
            <div className="Product__image">
              <img src={product.image} />
            </div>
            <div className="Product__details">
              <div className="Product__name">
                {product.name}
                <div className="Product__price">
                  {product.price}€
                </div>
              </div>
              <span className="Product__buy">
                Buy now
              </span>
            </div>
          </a>
        </div>
      ))
    }
  </div>
)

export default IndexPage

export const query = graphql`
  query CatalogueQuery {
    site {
      siteMetadata {
        products {
          slug
          name
          image
          price
        }
      }
    }
  }
`
