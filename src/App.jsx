import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Resume from './components/Resume'
import TechStack from './components/TechStack'
import Portfolio from './components/Portfolio'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Resume />
        <TechStack />
        <Portfolio />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}