import { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import * as Types from '../../../graphql-types'

const query = graphql`
  query Images {
    allFile(filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "optimized" } }) {
      edges {
        node {
          id
          name
          extension
          relativePath
          childrenImageSharp {
            gatsbyImageData(quality: 70, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

type Props = {
  src: string
  alt: string
}

function DynamicImage({ src, alt }: Props) {
  const data = useStaticQuery<Types.ImagesQuery>(query)

  const edge = useMemo(() => data.allFile.edges.find((e) => e.node.relativePath === src), [data, src])
  if (
    !edge ||
    !edge.node ||
    !edge.node.childrenImageSharp ||
    edge.node.childrenImageSharp.length <= 0 ||
    !edge.node.childrenImageSharp[0] ||
    !edge.node.childrenImageSharp[0].gatsbyImageData
  )
    return null

  const image = getImage(edge.node.childrenImageSharp[0].gatsbyImageData as ImageDataLike)
  if (!image) return null

  return <GatsbyImage image={image} alt={alt} />
}

export default DynamicImage
