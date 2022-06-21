import { useState, useEffect, useCallback } from 'react'

type Props = {
  initialHeight: string
  initialWidth: string
  pivotPx: number
  resizedHeight: string
  resizedWidth: string
}

const useResize = (
  { initialHeight, initialWidth, pivotPx, resizedHeight, resizedWidth }: Props = {
    initialHeight: 'vh-100',
    initialWidth: 'w-50',
    pivotPx: 767,
    resizedHeight: 'h-100',
    resizedWidth: 'w-100',
  }
) => {
  const [height, setHeight] = useState<string>(initialHeight)
  const [width, setWidth] = useState<string>(initialWidth)

  const resize = useCallback(() => {
    if (document.documentElement) {
      const { clientWidth } = document.documentElement
      if (clientWidth <= pivotPx) {
        setHeight(resizedHeight)
        setWidth(resizedWidth)
      } else {
        setHeight(initialHeight)
        setWidth(initialWidth)
      }
    }
  }, [initialHeight, initialWidth, pivotPx, resizedHeight, resizedWidth])

  useEffect(() => {
    window.addEventListener('resize', resize)
    resize()
    return () => window.removeEventListener('resize', resize)
  }, [resize])

  return {
    height,
    width,
  }
}

export default useResize
