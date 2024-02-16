import { useEffect } from 'react'

function useRippleCleanUp(
  rippleCount: number,
  duration: number,
  cleanUpFunction: () => void
) {
  useEffect(() => {
    let bounce: any = null
    if (rippleCount > 0) {
      clearTimeout(bounce)

      bounce = setTimeout(() => {
        cleanUpFunction()
        clearTimeout(bounce)
      }, duration * 4)
    }

    return () => clearTimeout(bounce)
  }, [rippleCount, duration, cleanUpFunction])
}

export default useRippleCleanUp
