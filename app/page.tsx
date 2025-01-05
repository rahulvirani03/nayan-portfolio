import Hero from './components/Hero'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import ArtworkGallery from './components/ArtworkGallery'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <ArtworkGallery />
      <Contact />
    </main>
  )
}

