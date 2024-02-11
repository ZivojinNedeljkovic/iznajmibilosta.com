import React, { ComponentProps } from 'react'

type Props = ComponentProps<'div'> & {
  direction?: React.CSSProperties['flexDirection']
  gap?: React.CSSProperties['gap']
}

function FlexBox({ direction, gap, ...divProps }: Props) {
  return (
    <div
      {...divProps}
      style={{ display: 'flex', flexDirection: direction, gap }}
    />
  )
}

export default FlexBox
