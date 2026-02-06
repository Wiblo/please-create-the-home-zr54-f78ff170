'use client'

import { Container } from '@/components/layout/Container'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const projects = [
  {
    title: 'SaaS Dashboard',
    description:
      'Modern analytics platform with real-time metrics, custom visualizations, and team collaboration features.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
    gradient: 'from-blue-600 to-cyan-600',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Developer Portfolio',
    description:
      'Interactive portfolio site featuring smooth animations, dark mode, and optimized performance with Lighthouse score of 100.',
    tags: ['React', 'Framer Motion', 'CSS Grid', 'Vercel'],
    gradient: 'from-purple-600 to-blue-600',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative task tracker with drag-and-drop interface, real-time updates, and advanced filtering capabilities.',
    tags: ['Next.js', 'Zustand', 'DnD Kit', 'Supabase'],
    gradient: 'from-cyan-600 to-blue-600',
    github: 'https://github.com',
    live: 'https://example.com',
  },
]

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.fillStyle = 'rgba(8, 10, 20, 0.06)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(100, 180, 255, 0.5)'
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
            ctx.strokeStyle = `rgba(100, 180, 255, ${0.2 * (1 - distance / 100)})`
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
    <SectionWrapper className="relative overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:64px_64px]" />

      <Container className="relative">
        <div className="text-center space-y-4 mb-16">
          <span className="text-sm font-mono text-primary">
            &lt;projects /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${idx * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-full rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(100,150,255,0.4)] hover:-translate-y-2">
                {/* Project gradient header */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  {/* Animated grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:20px_20px]" />

                  {/* Floating circles animation */}
                  <div className="absolute inset-0">
                    <div
                      className={`absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl transition-all duration-700 ${
                        hoveredIndex === idx
                          ? 'scale-150 opacity-30'
                          : 'scale-100 opacity-20'
                      }`}
                    />
                    <div
                      className={`absolute bottom-4 left-4 w-32 h-32 bg-white/20 rounded-full blur-xl transition-all duration-700 ${
                        hoveredIndex === idx
                          ? 'scale-125 opacity-30'
                          : 'scale-100 opacity-20'
                      }`}
                    />
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated border effect */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
                    hoveredIndex === idx ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(100,150,255,0.5), transparent)',
                    backgroundSize: '200% 100%',
                    animation: hoveredIndex === idx ? 'shimmer 2s infinite' : 'none',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
          <Button size="lg" variant="outline" className="group">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  )
}
