'use client'

import { Container } from '@/components/layout/Container'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function PortfolioHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }> = []

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
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
        ctx.fillStyle = 'rgba(100, 150, 255, 0.6)'
        ctx.fill()

        particles.forEach((otherParticle, j) => {
          if (i === j) return
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(100, 150, 255, ${0.2 * (1 - distance / 100)})`
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <SectionWrapper className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

      <Container className="relative z-10">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <div className="inline-block">
              <span className="text-sm font-mono text-primary animate-pulse">
                &lt;developer /&gt;
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-gradient">
                Building Digital
              </span>
              <br />
              <span className="text-foreground">Experiences</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl animate-fade-in-up animation-delay-200">
              Full-stack developer crafting innovative web solutions with modern technologies.
              Turning ideas into elegant, performant applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
            <Button size="lg" className="group">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-4 animate-fade-in-up animation-delay-600">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Floating code elements */}
        <div className="absolute top-20 right-10 animate-float hidden lg:block">
          <div className="p-4 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg shadow-lg">
            <pre className="text-xs text-primary font-mono">
              <code>{`const dev = {
  name: "Developer",
  skills: ["React", "Next.js"]
}`}</code>
            </pre>
          </div>
        </div>

        <div className="absolute bottom-32 right-20 animate-float animation-delay-1000 hidden lg:block">
          <div className="p-4 bg-card/80 backdrop-blur-sm border border-accent/20 rounded-lg shadow-lg">
            <pre className="text-xs text-accent font-mono">
              <code>{`npm run build ✓`}</code>
            </pre>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
