export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-primary">ACERCA DE MÍ</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                Hola, mi nombre es Valentin Medina. Tengo 32 años y mi hobby es la Fotografía. Me dedico a la fotografía
                hace unos 6 años con experiencia como guía de montaña y fotógrafo de paisajes naturales, especialmente
                de vida salvaje en la Patagonia chilena.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                Mi pasión es compartir y guiar a personas amantes de la fotografía y la naturaleza.
              </p>
            </div>

            <div className="relative">
              <img
                src="/professional-portrait-of-mountain-guide-and-photog.png"
                alt="Valentín Medina Rozas"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
