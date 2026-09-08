import { useEffect } from 'react'
import Pricing from '../components/Pricing'
import PricingComparisonTable from '../components/PricingComparisonTable'
import Faq from '../components/Faq'

export default function PricingPage() {
  useEffect(() => {
    document.title = 'Pricing - SaaSly SaaS Platform'
  }, [])

  return (
    <div className="pt-17">
      <Pricing />
      <PricingComparisonTable />
      <Faq />
    </div>
  )
}
