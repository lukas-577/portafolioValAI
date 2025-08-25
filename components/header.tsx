"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-serif text-xl font-bold text-primary">PORTAFOLIO</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Acerca de mí
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Experiencia
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Mi trabajo
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Fotografías
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Acerca de mí
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Experiencia
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Mi trabajo
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Fotografías
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contacto
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
