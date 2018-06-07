import React from 'react'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
  <div className="Catalogue">
    {
      data.products.edges.map(({ node: product }) => (
        <div className="Catalogue__item" key={product.id}>
          <a href="#" className="Product">
            <div className="Product__image">
              <Img sizes={product.image.sizes} />
            </div> <div className="Product__details">
              <div className="Product__name">
                {product.name}
                <div className="Product__price">
                  {product.price}€
                </div>
              </div>
              <span className="Product__buy">Buy now</span>
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
  products: allDatoCmsProduct {
    edges {
      node {
        id
        name
        price
        image {
          sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
            ...GatsbyDatoCmsSizes
          }
        }
      }
    }
  }
}
`
