import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import TechStack from './components/TechStack'
import Stats from './components/Stats'
import Portfolio from './components/Portfolio'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-text-light">
      <Header />
      <main>
        <Hero />
        <About />
        <Resume />
        <TechStack />
        <Stats />
        <Portfolio />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
