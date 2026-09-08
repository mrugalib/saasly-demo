import { useEffect } from 'react'
import FeatureGrid from '../components/FeatureGrid'
import UseCaseTabs from '../components/UseCaseTabs'
import Integrations from '../components/Integrations'
import Faq from '../components/Faq'
import CtaBanner from '../components/CtaBanner'

export default function Features() {
  useEffect(() => {
    document.title = 'Features - SaaSly SaaS Platform'
  }, [])

  return (
    <>
      <FeatureGrid sectionClassName="pt-45 pb-28" />
      <UseCaseTabs />
      <Integrations />
      <Faq />
      <CtaBanner />
    </>
  )
}
