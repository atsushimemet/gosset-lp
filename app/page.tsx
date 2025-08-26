import Company from '@/components/Company'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Strengths from '@/components/Strengths'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Strengths />
      <Company />
      <Contact />
      <Footer />
    </main>
  )
}
