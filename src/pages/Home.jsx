import Hero from '../components/Hero'
import LogoMarquee from '../components/LogoMarquee'
import FeatureGrid from '../components/FeatureGrid'
import UseCaseTabs from '../components/UseCaseTabs'
import Integrations from '../components/Integrations'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
import CtaBanner from '../components/CtaBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <FeatureGrid />
      <UseCaseTabs />
      <Integrations />
      <Testimonials />
      <Pricing />
      <Faq />
      <CtaBanner />
    </>
  )
}
