// @flow
import React from 'react'
import type { Node } from 'react'

import Footer from '../footer'
import '../../styles/index.scss'

type Props = {
  children: Node,
}

const Layout = ({ children }: Props) => (
  <div>
    {children}
    <Footer />
  </div>
)

export default Layout
