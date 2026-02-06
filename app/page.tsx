import { PortfolioHero } from '@/components/sections/hero/PortfolioHero'
import { SkillsSection } from '@/components/sections/skills/SkillsSection'
import { ProjectsSection } from '@/components/sections/projects/ProjectsSection'
import { ContactSection } from '@/components/sections/contact/ContactSection'

export default function HomePage() {
  return (
    <>
      <PortfolioHero />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
