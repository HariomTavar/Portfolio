import { HeroSectionFive } from '../components/ui/hero-section-5'
import { portfolioData } from '../data/portfolioData'

export default function HeroSection({ hero, links, onNavigate }) {
  return (
    <HeroSectionFive
      hero={hero}
      links={links}
      onNavigate={onNavigate}
      navItems={portfolioData.nav}
    />
  )
}
