'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface FancyBackgroundProps {
  className?: string
}

export function FancyBackground({ className }: FancyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    // Responsive canvas sizing
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    // Gradient orbs configuration
    const orbs = [
      {
        x: 0.2,
        y: 0.3,
        radiusBase: 400,
        speedX: 0.0003,
        speedY: 0.0002,
        // Primary color: oklch(0.65 0.18 240) -> rgb(79, 136, 255)
        color: 'rgba(79, 136, 255, 0.15)',
      },
      {
        x: 0.8,
        y: 0.4,
        radiusBase: 500,
        speedX: -0.0002,
        speedY: 0.0004,
        // Accent color: oklch(0.75 0.2 220) -> rgb(99, 182, 255)
        color: 'rgba(99, 182, 255, 0.12)',
      },
      {
        x: 0.5,
        y: 0.7,
        radiusBase: 450,
        speedX: 0.0004,
        speedY: -0.0003,
        // Chart color: oklch(0.7 0.16 260) -> rgb(132, 130, 255)
        color: 'rgba(132, 130, 255, 0.1)',
      },
      {
        x: 0.3,
        y: 0.8,
        radiusBase: 350,
        speedX: -0.0003,
        speedY: -0.0002,
        // Chart color: oklch(0.65 0.14 220) -> rgb(87, 153, 235)
        color: 'rgba(87, 153, 235, 0.08)',
      },
    ]

    const animate = () => {
      const { width, height } = canvas

      // Clear canvas with a subtle fade effect for motion blur
      ctx.fillStyle = getComputedStyle(document.documentElement)
        .getPropertyValue('--background')
        .trim()
        ? 'rgba(250, 250, 252, 0.1)'
        : 'rgba(20, 20, 28, 0.1)'

      // Check if dark mode
      const isDark = document.documentElement.classList.contains('dark')
      ctx.fillStyle = isDark ? 'rgba(20, 20, 28, 0.08)' : 'rgba(250, 250, 252, 0.08)'
      ctx.fillRect(0, 0, width, height)

      if (prefersReducedMotion) {
        // Static version for reduced motion
        orbs.forEach((orb) => {
          const x = width * orb.x
          const y = height * orb.y
          const radius = orb.radiusBase

          const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
          gradient.addColorStop(0, orb.color)
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

          ctx.fillStyle = gradient
          ctx.fillRect(0, 0, width, height)
        })
      } else {
        // Animated version
        time += 1

        orbs.forEach((orb) => {
          // Calculate floating position
          const offsetX = Math.sin(time * orb.speedX) * 150
          const offsetY = Math.cos(time * orb.speedY) * 100
          const x = width * orb.x + offsetX
          const y = height * orb.y + offsetY

          // Pulsing radius
          const radiusPulse = Math.sin(time * 0.001) * 50
          const radius = orb.radiusBase + radiusPulse

          // Create radial gradient
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
          gradient.addColorStop(0, orb.color)
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

          ctx.fillStyle = gradient
          ctx.fillRect(0, 0, width, height)
        })
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      {/* Base background with subtle gradient */}
      <div
        className={cn(
          'fixed inset-0 -z-10 bg-background',
          'before:absolute before:inset-0',
          'before:bg-gradient-to-br before:from-primary/5 before:via-transparent before:to-accent/5',
          className
        )}
        aria-hidden="true"
      />

      {/* Animated canvas overlay */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Noise texture overlay for depth */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.015] dark:opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
    </>
  )
}
