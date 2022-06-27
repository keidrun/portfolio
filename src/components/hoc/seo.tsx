import { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'
import * as Types from '../../../graphql-types'

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
      }
    }
  }
`

type Props = {
  title?: string
  description?: string
  children?: ReactNode
}

function SEO({ title, description, children }: Props) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery<Types.SeoQuery>(query)

  const { defaultTitle, defaultDescription, siteUrl } = { ...site?.siteMetadata }
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title || undefined}>
      <meta name="description" content={seo.description as string} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title || undefined} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {children}
    </Helmet>
  )
}

export default SEO
