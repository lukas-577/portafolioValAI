import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-primary">CONTACTO</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold mb-6 text-primary">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-accent" />
                    <span className="text-foreground">valentinmedinar@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-accent" />
                    <span className="text-foreground">+56 945165571</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Instagram className="h-6 w-6 text-accent" />
                    <span className="text-foreground">@natural_wildchile</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-xl font-bold mb-4 text-primary">Servicios Disponibles</h4>
                <ul className="space-y-2 text-foreground">
                  <li>• Tours fotográficos en Torres del Paine</li>
                  <li>• Guía especializado en vida salvaje</li>
                  <li>• Expediciones de fotografía de naturaleza</li>
                  <li>• Talleres de fotografía en la Patagonia</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-6 text-primary">Envíame un Mensaje</h3>
                <form className="space-y-6">
                  <div>
                    <Input placeholder="Tu nombre" className="bg-input border-border" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Tu email" className="bg-input border-border" />
                  </div>
                  <div>
                    <Input placeholder="Asunto" className="bg-input border-border" />
                  </div>
                  <div>
                    <Textarea placeholder="Tu mensaje..." rows={5} className="bg-input border-border resize-none" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
