import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Stories = () => {
  const stories = [
    {
      id: 1,
      title: "El arte de combinar vintage con moderno",
      excerpt: "Descubre cómo mezclar prendas de segunda mano con tu estilo actual.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop",
      category: "Estilo",
    },
    {
      id: 2,
      title: "Moda sustentable: más que una tendencia",
      excerpt: "Por qué comprar segunda mano es el futuro de la moda consciente.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop",
      category: "Sustentabilidad",
    },
    {
      id: 3,
      title: "Historias reales: Mi clóset vintage",
      excerpt: "Conoce a María y su colección de piezas únicas con historia.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
      category: "Comunidad",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Historias Tachos
          </h2>
          <p className="mt-2 text-muted-foreground">
            Inspiración, consejos y comunidad
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.id}
              className="group overflow-hidden rounded-lg bg-card shadow-soft transition-smooth hover:shadow-medium"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-verde px-3 py-1 text-xs font-medium text-blanco">
                    {story.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-card-foreground line-clamp-2">
                  {story.title}
                </h3>
                <p className="mb-4 text-muted-foreground line-clamp-2">
                  {story.excerpt}
                </p>
                <Button variant="link" className="h-auto p-0 text-verde">
                  Leer más
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            Ver todas las historias
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Stories;
