import { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

type Props = {
  src: string
  alt?: string
}

type ImagesData = {
  allFile: {
    edges: {
      node: {
        id: string
        name: string
        extensin: string
        relativePath: string
        childrenImageSharp: {
          gatsbyImageData: ImageData
        }[]
      }
    }[]
  }
}

export default function DynamicImage({ src, alt }: Props) {
  const data: ImagesData = useStaticQuery(graphql`
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

  if (!edge) return null

  return <GatsbyImage image={getImage(edge.node.childrenImageSharp[0].gatsbyImageData)} alt={alt} />
}
