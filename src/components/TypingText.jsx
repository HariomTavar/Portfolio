import { useEffect, useMemo, useState } from 'react'

export default function TypingText({
  texts,
  loop = true,
  className = '',
  typingSpeed = 65,
  deletingSpeed = 36,
  pauseMs = 1100,
  eraseOnComplete = true,
}) {
  const normalized = useMemo(() => {
    if (Array.isArray(texts)) {
      return texts.filter(Boolean)
    }
    return texts ? [texts] : []
  }, [texts])

  const [index, setIndex] = useState(0)
  const [current, setCurrent] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!normalized.length) {
      return undefined
    }

    const activeText = normalized[index % normalized.length]

    const timer = setTimeout(
      () => {
        if (!deleting) {
          const next = activeText.slice(0, current.length + 1)
          setCurrent(next)
          if (next === activeText) {
            if (eraseOnComplete) {
              setDeleting(true)
            }
          }
        } else {
          const next = activeText.slice(0, current.length - 1)
          setCurrent(next)
          if (!next) {
            setDeleting(false)
            setIndex((prev) => {
              const nextIndex = prev + 1
              if (loop) {
                return nextIndex
              }
              return Math.min(nextIndex, normalized.length - 1)
            })
          }
        }
      },
      deleting
        ? deletingSpeed
        : current === activeText
          ? pauseMs
          : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [
    current,
    deleting,
    deletingSpeed,
    index,
    loop,
    normalized,
    pauseMs,
    typingSpeed,
    eraseOnComplete,
  ])

  if (!normalized.length) {
    return null
  }

  return (
    <span className={className}>
      {current}
      <span className="ml-1 inline-block h-[1.1em] w-[1px] animate-pulse bg-primary" />
    </span>
  )
}
