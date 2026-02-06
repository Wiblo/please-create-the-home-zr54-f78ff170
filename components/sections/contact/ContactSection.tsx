'use client'

import { Container } from '@/components/layout/Container'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { Button } from '@/components/ui/button'
import { Mail, MessageSquare, Send } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function ContactSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = canvas.offsetHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }> = []

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 0.8,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.fillStyle = 'rgba(8, 10, 20, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(100, 200, 255, 0.5)'
        ctx.fill()

        particles.forEach((otherParticle, j) => {
          if (i === j) return
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 110) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.18 * (1 - distance / 110)})`
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <SectionWrapper className="relative overflow-hidden bg-gradient-to-b from-background to-primary/10">
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl border border-primary/20 bg-card/50 backdrop-blur-xl overflow-hidden">
            {/* Glowing gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

            {/* Animated spotlight effect */}
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-primary/20 to-transparent animate-pulse" />

            <div className="relative p-12 md:p-16 space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Mail className="h-4 w-4 text-primary animate-pulse" />
                  <span className="text-sm font-mono text-primary">
                    Available for work
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold text-balance">
                  <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                    Let&apos;s Build Something
                  </span>
                  <br />
                  <span className="text-foreground">Amazing Together</span>
                </h2>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Have a project in mind? I&apos;m always excited to collaborate on
                  innovative ideas and bring them to life.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="group text-lg px-8 py-6 hover:shadow-[0_0_30px_rgba(100,150,255,0.5)] transition-all duration-300"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start a Conversation
                  <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </Button>
              </div>

              {/* Decorative elements */}
              <div className="flex justify-center gap-8 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>

            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl opacity-50">
              <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
              <div className="absolute bottom-0 right-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse animation-delay-1000" />
            </div>
          </div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/30 rounded-lg animate-spin-slow hidden lg:block" />
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-accent/30 rounded-full animate-pulse hidden lg:block" />
      </Container>
    </SectionWrapper>
  )
}
