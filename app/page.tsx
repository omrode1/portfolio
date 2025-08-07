import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Creative from '@/components/Creative'
import Gallery from '@/components/Gallery'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { FloatingShapes, ScrollProgress, MouseFollower } from '@/components/ScrollAnimations'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background Animations */}
      <FloatingShapes />
      <ScrollProgress />
      <MouseFollower />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Creative />
        <Gallery />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
