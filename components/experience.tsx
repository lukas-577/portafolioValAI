import { Card, CardContent } from "@/components/ui/card"

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-primary">EXPERIENCIA</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Guía y Fotógrafo</h3>
                <p className="text-lg text-card-foreground mb-2">Fotosafari Torres del Paine</p>
                <p className="text-muted-foreground">
                  Especializado en tours fotográficos de vida salvaje y paisajes naturales
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Guía y Fotógrafo</h3>
                <p className="text-lg text-card-foreground mb-2">Onteaiken agencia turismo</p>
                <p className="text-muted-foreground">Guía especializado en expediciones fotográficas en la Patagonia</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
