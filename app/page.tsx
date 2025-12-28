import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesOverview from '@/components/sections/ServicesOverview'
import AboutSection from '@/components/sections/AboutSection'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import CaldotCareBanner from '@/components/sections/CaldotCareBanner'
import NewsletterSignup from '@/components/sections/NewsletterSignup'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <HeroSection />
      <ServicesOverview />
      <AboutSection />
      <WhyChooseUs />
      <CaldotCareBanner />
      <NewsletterSignup />
      
      <Footer />
    </main>
  )
}
