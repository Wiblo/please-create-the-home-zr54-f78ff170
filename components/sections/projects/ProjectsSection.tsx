'use client'

import { Container } from '@/components/layout/Container'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
    gradient: 'from-blue-500 to-cyan-500',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'AI Content Generator',
    description:
      'Machine learning powered content creation tool with natural language processing and custom training models.',
    tags: ['React', 'Python', 'OpenAI', 'FastAPI'],
    gradient: 'from-purple-500 to-pink-500',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Real-Time Analytics Dashboard',
    description:
      'Interactive data visualization platform with live updates, custom charts, and export capabilities.',
    tags: ['Vue', 'D3.js', 'WebSockets', 'Node.js'],
    gradient: 'from-green-500 to-emerald-500',
    github: 'https://github.com',
    live: 'https://example.com',
  },
]

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Animated background mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

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
