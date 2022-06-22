import { ReactNode } from 'react'

import Footer from '../footer'
import '../../styles/index.scss'

type Props = {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}

export default Layout
