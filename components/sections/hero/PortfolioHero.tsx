'use client'

import { Container } from '@/components/layout/Container'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export function PortfolioHero() {
  return (
    <SectionWrapper className="relative min-h-screen flex items-center overflow-hidden">

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
