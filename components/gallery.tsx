"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Mirador laguna Amarga",
    image: "/laguna-amarga-viewpoint-torres-del-paine-with-turq.png",
    category: "Paisajes",
  },
  {
    id: 2,
    title: "Puma concolor",
    image: "/patagonian-puma-in-natural-habitat-stalking.png",
    category: "Vida Salvaje",
  },
  {
    id: 3,
    title: "Guanacos y paisajes",
    image: "/guanacos-grazing-with-torres-del-paine-mountains-b.png",
    category: "Fauna",
  },
  {
    id: 4,
    title: "Loros cachaña",
    image: "/austral-parakeets-colorful-birds-in-patagonia.png",
    category: "Aves",
  },
  {
    id: 5,
    title: "Madre e hijo - Puma concolor",
    image: "/mother-puma-with-cub-in-patagonian-landscape.png",
    category: "Vida Salvaje",
  },
  {
    id: 6,
    title: "Cachorro puma concolor con fondo primaveral",
    image: "/young-puma-cub-with-spring-flowers-in-background.png",
    category: "Vida Salvaje",
  },
  {
    id: 7,
    title: "Búhos presentes en la Patagonia",
    image: "/patagonian-owl-species-in-natural-habitat.png",
    category: "Aves",
  },
  {
    id: 8,
    title: "Armadillo",
    image: "/patagonian-armadillo-in-grassland.png",
    category: "Fauna",
  },
  {
    id: 9,
    title: "Puma concolor en temporada invernal",
    image: "/puma-in-winter-snow-patagonia-landscape.png",
    category: "Vida Salvaje",
  },
  {
    id: 10,
    title: "Aves migratorias y aves nativas",
    image: "/migratory-birds-and-native-birds-of-patagonia.png",
    category: "Aves",
  },
  {
    id: 11,
    title: "Tucuquere - Vista a las torres del Paine en otoño",
    image: "/placeholder.svg?height=400&width=600",
    category: "Aves",
  },
  {
    id: 12,
    title: "Cumbre cerro Paine grande",
    image: "/placeholder.svg?height=400&width=600",
    category: "Paisajes",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-primary">FOTOGRAFÍAS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="group cursor-pointer overflow-hidden bg-card border-border hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-serif text-lg font-bold">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.category}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-serif text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-white/80">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
