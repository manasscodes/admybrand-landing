import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Features from "@/components/sections/Features"
import Pricing from "@/components/sections/Pricing"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import ContactForm from "@/components/sections/ContactForm"
import Starfield from "@/components/ui/Starfield"

export default function Home() {
  return (
    <main className="min-h-screen relative bg-black">
      <Starfield />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <Footer />
      </div>
    </main>
  )
}
