import { useEffect } from 'react'
import AboutHero from '../components/about/AboutHero'
import LogoMarquee from '../components/LogoMarquee'
import OurStory from '../components/about/OurStory'
import StatsCounter from '../components/about/StatsCounter'
import CoreValues from '../components/about/CoreValues'
import TeamGrid from '../components/about/TeamGrid'

export default function About() {
  useEffect(() => {
    document.title = 'About Us - SaaSly SaaS Platform'
  }, [])

  return (
    <div>
      <AboutHero />
      <LogoMarquee />
      <OurStory />
      <StatsCounter />
      <CoreValues />
      <TeamGrid />
    </div>
  )
}
