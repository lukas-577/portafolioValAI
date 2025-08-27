export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/profesional.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4">Valentín Medina Rozas</h1>
        <p className="text-xl md:text-2xl font-light mb-8">Guía y Fotógrafo</p>
        <div className="w-24 h-1 bg-accent mx-auto"></div>
      </div>
    </section>
  )
}
