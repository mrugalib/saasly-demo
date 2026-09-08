import { useEffect } from 'react'
import ContactSection from '../components/contact/ContactSection'
import Faq from '../components/Faq'
import CtaBanner from '../components/CtaBanner'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us - SaaSly SaaS Platform'
  }, [])

  return (
    <div>
      <ContactSection />
      <Faq />
      <CtaBanner />
    </div>
  )
}
