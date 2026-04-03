import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)
  const mouseRef = useRef({ x: -200, y: -200 })
  const currentRef = useRef({ x: -200, y: -200 })
  const frameRef = useRef(null)
  const moveTimeoutRef = useRef(null)

  useEffect(() => {
    const isTouchDevice =
      typeof window !== 'undefined' &&
      (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)

    if (isTouchDevice || !glowRef.current) {
      return undefined
    }

    const update = () => {
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.14
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.14

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0)`
      }

      frameRef.current = requestAnimationFrame(update)
    }

    const onMove = (event) => {
      if (moveTimeoutRef.current) {
        return
      }
      moveTimeoutRef.current = window.setTimeout(() => {
        mouseRef.current = { x: event.clientX - 110, y: event.clientY - 110 }
        moveTimeoutRef.current = null
      }, 8)
    }

    window.addEventListener('mousemove', onMove)
    frameRef.current = requestAnimationFrame(update)

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current)
      }
    }
  }, [])

  return <div ref={glowRef} className="pointer-events-none fixed z-10 hidden h-56 w-56 rounded-full md:block cursor-glow" />
}
