// @flow
import React from 'react'
import type { Node } from 'react'

type Props = {
  idName: string,
  dynamicActive: string,
  dynamicOnClick: Function,
  children: Node,
}

const DynamicNavLink = ({ idName, dynamicActive, dynamicOnClick, children }: Props) => (
  <>
    {React.cloneElement(children, {
      active: dynamicActive === idName,
      onClick: () => dynamicOnClick(idName),
    })}
  </>
)

export default DynamicNavLink
