"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Instagram } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error")
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Reset form on success
        setFormData({ name: "", email: "", subject: "", message: "" })
        setSubmitStatus("success")
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error enviando formulario:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

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
                  <a
                    href="mailto:valentinmedinar@gmail.com"
                    className="flex items-center space-x-4 hover:opacity-80 transition"
                  >
                    <Mail className="h-6 w-6 text-accent" />
                    <span className="text-foreground">valentinmedinar@gmail.com</span>
                  </a>

                  <a
                    href="tel:+56945165571"
                    className="flex items-center space-x-4 hover:opacity-80 transition"
                  >
                    <Phone className="h-6 w-6 text-accent" />
                    <span className="text-foreground">+56 945165571</span>
                  </a>

                  <a
                    href="https://www.instagram.com/natural_wildchile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 hover:opacity-80 transition"
                  >
                    <Instagram className="h-6 w-6 text-accent" />
                    <span className="text-foreground">@natural_wildchile</span>
                  </a>

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

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-md text-green-700">
                    ¡Mensaje enviado exitosamente! Te contactaré pronto.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-md text-red-700">
                    Error al enviar el mensaje. Por favor, completa todos los campos requeridos.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre *"
                      className="bg-input border-border"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Tu email *"
                      className="bg-input border-border"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Asunto"
                      className="bg-input border-border"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tu mensaje... *"
                      rows={5}
                      className="bg-input border-border resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
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
