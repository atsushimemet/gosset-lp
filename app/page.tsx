import Company from '@/components/Company'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Strengths from '@/components/Strengths'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Strengths />
        <Company />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
