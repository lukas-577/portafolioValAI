export function Work() {
  return (
    <section id="work" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-primary">MI TRABAJO</h2>

          <div className="text-center space-y-6">
            <p className="text-lg leading-relaxed text-foreground max-w-3xl mx-auto">
              A continuación podrán ver el resultado de mi trabajo hasta el día de hoy en el Parque nacional Torres del
              Paine, colaborando en terreno con agencias locales de Puerto Natales, la puerta de entrada al parque
              nacional más famoso y visitado de Chile.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <img
                  src="/torresHorizontal.jpeg"
                  alt="Torres del Paine"
                  className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg"
                />
                <h3 className="font-serif text-xl font-bold text-primary">Paisajes Icónicos</h3>
                <p className="text-muted-foreground">Las famosas Torres del Paine</p>
              </div>

              <div className="text-center">
                <img
                  src="/patagonian-wildlife-puma-in-natural-habitat.png"
                  alt="Vida Salvaje"
                  className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg"
                />
                <h3 className="font-serif text-xl font-bold text-primary">Vida Salvaje</h3>
                <p className="text-muted-foreground">Pumas y fauna patagónica</p>
              </div>

              <div className="text-center">
                <img
                  src="/patagonian-guanacos-in-grassland-landscape.png"
                  alt="Fauna Local"
                  className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg"
                />
                <h3 className="font-serif text-xl font-bold text-primary">Fauna Local</h3>
                <p className="text-muted-foreground">Guanacos y aves nativas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
