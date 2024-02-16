'use client'
import React, { useState } from 'react'

import { getRipplePositionAndSideWidth } from './ripple-utils'
import styles from './ripple.module.scss'
import useRippleCleanUp from './use-ripple-clean-up'

type RippleData = { x: number; y: number; sideWidth: number }

type Props = {
  duration?: number
  className?: string
  trackClick?: boolean
}

const Ripple = ({ duration, className, trackClick }: Props) => {
  const [ripples, setRipples] = useState<RippleData[]>([])

  trackClick ??= true
  duration ??= 800

  useRippleCleanUp(ripples.length, duration, () => {
    setRipples([])
  })

  const addRipple = (event: React.MouseEvent) => {
    const newRipple = getRipplePositionAndSideWidth(event)

    setRipples(prev => [
      ...prev.map(({ x, y, sideWidth }) => ({ x, y, sideWidth })),
      newRipple,
    ])
  }

  return (
    <div className={styles.wrapper} onMouseDown={addRipple}>
      {ripples.length > 0 &&
        ripples.map((ripple, index) => {
          return (
            <span
              key={'span' + index}
              className={className}
              style={
                trackClick
                  ? {
                      top: ripple.y,
                      left: ripple.x,
                      width: ripple.sideWidth,
                      height: ripple.sideWidth,
                      animationDuration: `${duration}ms`,
                    }
                  : { animationDuration: `${duration}ms` }
              }
            />
          )
        })}
    </div>
  )
}

export default Ripple
