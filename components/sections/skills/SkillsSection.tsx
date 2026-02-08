'use client'

import { Container } from '@/components/layout/Container'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { useState } from 'react'

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 100 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    category: 'Tools & DevOps',
    technologies: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 78 },
      { name: 'AWS', level: 72 },
      { name: 'CI/CD', level: 82 },
    ],
  },
]

export function SkillsSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <SectionWrapper className="relative bg-background/80 backdrop-blur-sm overflow-hidden">

      <Container className="relative">
        <div className="text-center space-y-4 mb-16">
          <span className="text-sm font-mono text-primary">
            &lt;skills /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Tech Stack & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Constantly learning and adapting to the latest technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <div
              key={skillGroup.category}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative p-8 h-full overflow-hidden">
                {/* Glowing corner effect */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative space-y-6">
                  <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {skillGroup.category}
                  </h3>

                  <div className="space-y-4">
                    {skillGroup.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        onMouseEnter={() => setHoveredTech(tech.name)}
                        onMouseLeave={() => setHoveredTech(null)}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">
                            {tech.name}
                          </span>
                          <span className="text-sm text-muted-foreground font-mono">
                            {tech.level}%
                          </span>
                        </div>

                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                            style={{
                              width:
                                hoveredTech === tech.name
                                  ? `${tech.level}%`
                                  : '0%',
                            }}
                          >
                            {/* Animated shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating code brackets */}
        <div className="absolute top-10 left-10 text-6xl font-mono text-primary/10 select-none hidden lg:block">
          {'{'}
        </div>
        <div className="absolute bottom-10 right-10 text-6xl font-mono text-primary/10 select-none hidden lg:block">
          {'}'}
        </div>
      </Container>
    </SectionWrapper>
  )
}
