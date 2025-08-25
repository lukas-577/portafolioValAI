import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Work } from "@/components/work"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Gallery />
      <Contact />
    </main>
  )
}
