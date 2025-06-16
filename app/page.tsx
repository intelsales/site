
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import About from '../components/about'
import Services from '../components/services'
import Testimonials from '../components/testimonials'
import ContactForm from '../components/contact-form'
import Footer from '../components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
