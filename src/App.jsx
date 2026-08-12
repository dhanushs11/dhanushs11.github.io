import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Resume from './components/Resume'
import Numbers from './components/Numbers'
import TechStack from './components/TechStack'
import Portfolio from './components/Portfolio'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useSmoothScroll from './hooks/useSmoothScroll'

export default function App() {
  useSmoothScroll()

  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Resume />
        <Numbers />
        <TechStack />
        <Portfolio />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}