import { Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-forest text-sage-light py-12 border-t border-sage/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-white">Valentín Medina Rozas</h3>
            <p className="text-sage-light/80 text-sm leading-relaxed">
              Guía y Fotógrafo especializado en vida salvaje de la Patagonia chilena. Capturando la belleza natural de
              Torres del Paine.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Navegación</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-sage-light/80 hover:opacity-80 transition text-sm">
                Acerca de mí
              </a>
              <a href="#experience" className="text-sage-light/80 hover:opacity-80 transition text-sm">
                Experiencia
              </a>
              <a href="#work" className="text-sage-light/80 hover:opacity-80 transition text-sm">
                Mi trabajo
              </a>
              <a href="#gallery" className="text-sage-light/80 hover:opacity-80 transition text-sm">
                Fotografías
              </a>
              <a href="#contact" className="text-sage-light/80 hover:opacity-80 transition text-sm">
                Contacto
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contacto</h4>
            <div className="space-y-3">
              <a
                href="mailto:valentinmedinar@gmail.com"
                className="flex items-center gap-2 text-sage-light/80 hover:opacity-80 transition text-sm"
              >
                <Mail className="w-4 h-4" />
                valentinmedinar@gmail.com
              </a>
              <a
                href="tel:+56945165571"
                className="flex items-center gap-2 text-sage-light/80 hover:opacity-80 transition text-sm"
              >
                <Phone className="w-4 h-4" />
                +56 945165571
              </a>
              <a
                href="https://instagram.com/natural_wildchile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sage-light/80 hover:opacity-80 transition text-sm"
              >
                <Instagram className="w-4 h-4" />
                @natural_wildchile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-sage/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sage-light/60 text-sm">
            © {new Date().getFullYear()} Power By  
                <a
                    href="mailto:lukasmedinar@gmail.com"
                    className="text-primary text-sage-light/80 hover:opacity-80 transition text-sm"
                >
                    Lukas
                </a>. Todos los derechos reservados.
          </p>
          <p className="text-sage-light/60 text-sm">Fotografía de vida salvaje • Patagonia chilena</p>
        </div>
      </div>
    </footer>
  )
}