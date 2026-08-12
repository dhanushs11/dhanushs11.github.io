import { useEffect } from 'react'
import Lenis from 'lenis'

export const lenisStore = { current: null }

export function scrollToTarget(href) {
  if (href === '#hero' || href === '#') {
    lenisStore.current?.scrollTo(0, { duration: 1.4 })
  } else {
    const el = document.querySelector(href)
    if (el) lenisStore.current?.scrollTo(el, { offset: -80, duration: 1.2 })
  }
}

export default function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisStore.current = lenis

    let rafId
    const raf = time => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisStore.current = null
    }
  }, [])
}