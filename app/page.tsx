import { PortfolioHero } from '@/components/sections/hero/PortfolioHero'
import { SkillsSection } from '@/components/sections/skills/SkillsSection'
import { ProjectsSection } from '@/components/sections/projects/ProjectsSection'
import { ContactSection } from '@/components/sections/contact/ContactSection'
import { FancyBackground } from '@/components/ui/fancy-background'

export default function HomePage() {
  return (
    <>
      <FancyBackground />
      <PortfolioHero />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
