// @flow
import React from 'react'
import type { Node } from 'react'
import { Waypoint } from 'react-waypoint'

type Props = {
  onEnter: Function,
  topOffset: ?(string | number),
  bottomOffset: ?(string | number),
}

function withInView(WrappedComponent: Node) {
  return ({ onEnter, topOffset, bottomOffset, ...props }: Props) => (
    <Waypoint onEnter={onEnter} topOffset={topOffset || '50%'} bottomOffset={bottomOffset || '40%'}>
      <div>
        <WrappedComponent {...props} />
      </div>
    </Waypoint>
  )
}

export default withInView
