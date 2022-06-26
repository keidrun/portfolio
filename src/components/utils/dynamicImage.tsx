import { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import * as GatsbyTypes from '../../../graphql-types'

type Props = {
  src: string
  alt: string
}

export default function DynamicImage({ src, alt }: Props) {
  const data = useStaticQuery<GatsbyTypes.Query>(graphql`
    query ImagesQuery {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
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
  `)

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
