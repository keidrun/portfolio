// @flow
import React, { useState } from 'react'
import type { Node } from 'react'

import InView from './inView'

type Props = {
  ids: Array<string>,
  navIndex: Number,
  delayMs: number,
  children: Node,
}

const InViews = ({ ids, navIndex, delayMs, children }: Props) => {
  const [activeName, setActiveName] = useState('header')

  const changeActiveName = name => setActiveName(name)

  const changeActiveNameLazily = name => setTimeout(() => setActiveName(name), delayMs)

  return (
    <>
      {children.map((component, index) =>
        index === navIndex ? (
          <InView key={ids[index]} onEnter={() => changeActiveName(ids[index])}>
            {React.cloneElement(component, {
              dynamicActive: `${activeName}`,
              dynamicOnClick: changeActiveNameLazily,
            })}
          </InView>
        ) : (
          <InView key={ids[index]} onEnter={() => changeActiveName(ids[index])}>
            {component}
          </InView>
        )
      )}
    </>
  )
}

InViews.defaultProps = {
  navIndex: 0,
  delayMs: 100,
}

export default InViews
