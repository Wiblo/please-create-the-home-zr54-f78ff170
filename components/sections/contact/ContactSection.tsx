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

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const waves: Array<{
      y: number
      length: number
      amplitude: number
      frequency: number
    }> = [
      { y: canvas.height * 0.3, length: 0.02, amplitude: 30, frequency: 0.01 },
      { y: canvas.height * 0.5, length: 0.015, amplitude: 40, frequency: 0.015 },
      { y: canvas.height * 0.7, length: 0.025, amplitude: 25, frequency: 0.012 },
    ]

    let increment = 0

    function animate() {
      if (!ctx || !canvas) return
      ctx.fillStyle = 'rgba(8, 10, 20, 0.03)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      waves.forEach((wave, index) => {
        ctx.beginPath()
        ctx.moveTo(0, wave.y)

        for (let i = 0; i < canvas.width; i++) {
          ctx.lineTo(
            i,
            wave.y +
              Math.sin(i * wave.length + increment * wave.frequency) *
                wave.amplitude
          )
        }

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
        gradient.addColorStop(0, `rgba(100, 150, 255, ${0.1 + index * 0.05})`)
        gradient.addColorStop(0.5, `rgba(100, 200, 255, ${0.2 + index * 0.05})`)
        gradient.addColorStop(1, `rgba(100, 150, 255, ${0.1 + index * 0.05})`)

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()
      })

      increment += 0.5
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
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
