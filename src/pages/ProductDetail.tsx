import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock products data (should match Products.tsx)
  const products = [
    {
      id: 1,
      image: product1,
      name: "Chamarra Denim Vintage",
      price: "450",
      condition: "Como nuevo",
      size: "M",
      category: "Mujeres",
      tags: ["Vintage", "Denim", "90s", "Casual"],
      description: "Hermosa chamarra de denim vintage en excelente estado. Perfecta para un look casual y retro. Confeccionada con mezclilla de alta calidad que mejora con el tiempo.",
    },
    {
      id: 2,
      image: product2,
      name: "Vestido Floral Retro",
      price: "320",
      condition: "Excelente",
      size: "S",
      category: "Mujeres",
      tags: ["Retro", "Floral", "Verano", "Elegante"],
      description: "Vestido floral con estilo retro, ideal para ocasiones especiales o salidas casuales. Tejido suave y cómodo con estampado de flores vibrantes.",
    },
    {
      id: 3,
      image: product3,
      name: "Bolsa de Piel Clásica",
      price: "580",
      condition: "Buen estado",
      category: "Accesorios",
      tags: ["Clásico", "Piel", "Elegante", "Atemporal"],
      description: "Bolsa clásica de piel auténtica con diseño atemporal. Espaciosa y práctica, perfecta para el día a día. Incluye varios compartimentos internos.",
    },
    {
      id: 4,
      image: product1,
      name: "Camisa Vintage 90s",
      price: "380",
      condition: "Como nuevo",
      size: "L",
      category: "Hombres",
      tags: ["Vintage", "90s", "Casual", "Streetwear"],
      description: "Camisa vintage de los años 90 en perfecto estado. Diseño único y auténtico de la época. Ideal para un look urbano y desenfadado.",
    },
    {
      id: 5,
      image: product2,
      name: "Vestido Floral Vintage",
      price: "290",
      condition: "Excelente",
      size: "M",
      category: "Mujeres",
      tags: ["Vintage", "Floral", "Bohemio", "Primavera"],
      description: "Vestido vintage con estampado floral romántico. Perfecto para la primavera y el verano. Corte favorecedor y tela ligera.",
    },
    {
      id: 6,
      image: product3,
      name: "Cartera Retro",
      price: "420",
      condition: "Buen estado",
      category: "Accesorios",
      tags: ["Retro", "Compacta", "Práctica", "Estilo"],
      description: "Cartera retro con diseño compacto pero espacioso. Perfecta para llevar lo esencial con estilo. Múltiples ranuras para tarjetas.",
    },
    {
      id: 7,
      image: product1,
      name: "Pantalón Cargo Vintage",
      price: "340",
      condition: "Como nuevo",
      size: "32",
      category: "Hombres",
      tags: ["Cargo", "Vintage", "Utilitario", "Urbano"],
      description: "Pantalón cargo vintage con múltiples bolsillos. Estilo utilitario y cómodo para el uso diario. Confección resistente y duradera.",
    },
    {
      id: 8,
      image: product2,
      name: "Blusa Bordada",
      price: "280",
      condition: "Excelente",
      size: "M",
      category: "Mujeres",
      tags: ["Bordado", "Artesanal", "Elegante", "Única"],
      description: "Blusa con hermosos bordados artesanales. Cada pieza es única y especial. Combina tradición y estilo moderno.",
    },
    {
      id: 9,
      image: product3,
      name: "Cinturón de Piel",
      price: "220",
      condition: "Buen estado",
      category: "Accesorios",
      tags: ["Piel", "Clásico", "Versátil", "Accesorio"],
      description: "Cinturón de piel genuina con hebilla clásica. Accesorio versátil que complementa cualquier outfit. Artesanía de calidad.",
    },
    {
      id: 10,
      image: product1,
      name: "Sudadera Vintage",
      price: "390",
      condition: "Como nuevo",
      size: "6-8",
      category: "Niños",
      tags: ["Vintage", "Cómodo", "Infantil", "Casual"],
      description: "Sudadera vintage para niños en excelente estado. Suave y cómoda, perfecta para el uso diario. Diseño retro encantador.",
    },
    {
      id: 11,
      image: product2,
      name: "Falda Plisada Retro",
      price: "310",
      condition: "Excelente",
      size: "S",
      category: "Mujeres",
      tags: ["Plisada", "Retro", "Femenina", "Versátil"],
      description: "Falda plisada con estilo retro. Diseño femenino y elegante que nunca pasa de moda. Tela fluida y cómoda.",
    },
    {
      id: 12,
      image: product3,
      name: "Mochila Vintage",
      price: "490",
      condition: "Buen estado",
      category: "Accesorios",
      tags: ["Vintage", "Mochila", "Funcional", "Aventura"],
      description: "Mochila vintage con amplia capacidad. Perfecta para el día a día o aventuras urbanas. Diseño resistente y atemporal.",
    },
  ];

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Producto no encontrado</h1>
            <Button onClick={() => navigate("/productos")} className="mt-4">
              Volver a productos
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 -ml-3"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>

        {/* Product Detail */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Product Image */}
          <div className="relative overflow-hidden rounded-lg bg-card">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <Badge variant="outline" className="mb-3">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                {product.name}
              </h1>
            </div>

            <div className="mb-6">
              <p className="text-4xl font-bold text-verde">${product.price} MXN</p>
            </div>

            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">Estado:</span>
                <Badge variant="secondary">{product.condition}</Badge>
              </div>
              {product.size && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Talla:</span>
                  <Badge variant="secondary">{product.size}</Badge>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-medium text-muted-foreground">Etiquetas</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="mb-3 text-sm font-medium text-muted-foreground">Descripción</h3>
              <p className="text-base leading-relaxed text-foreground">
                {product.description}
              </p>
            </div>

            {/* Add to Cart Button */}
            <Button size="lg" className="w-full md:w-auto" variant="hero">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Agregar al Carrito
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
