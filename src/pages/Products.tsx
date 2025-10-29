import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useSearchParams } from "react-router-dom";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const Products = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "todos";
  const searchQuery = searchParams.get("search") || "";

  const getCategoryTitle = () => {
    const titles: Record<string, string> = {
      todos: "Todos los Productos",
      todo: "Todos los Productos",
      mujeres: "Productos para Mujeres",
      hombres: "Productos para Hombres",
      ninos: "Productos para Niños",
      niños: "Productos para Niños",
      accesorios: "Accesorios",
    };
    return titles[selectedCategory] || "Todos los Productos";
  };

  const products = [
    {
      id: 1,
      image: product1,
      name: "Chamarra Denim Vintage",
      price: "450",
      condition: "Como nuevo",
      size: "M",
      category: "mujeres",
    },
    {
      id: 2,
      image: product2,
      name: "Vestido Floral Retro",
      price: "320",
      condition: "Excelente",
      size: "S",
      category: "mujeres",
    },
    {
      id: 3,
      image: product3,
      name: "Bolsa de Piel Clásica",
      price: "580",
      condition: "Buen estado",
      category: "accesorios",
    },
    {
      id: 4,
      image: product1,
      name: "Camisa Vintage 90s",
      price: "380",
      condition: "Como nuevo",
      size: "L",
      category: "hombres",
    },
    {
      id: 5,
      image: product2,
      name: "Vestido Floral Vintage",
      price: "290",
      condition: "Excelente",
      size: "M",
      category: "mujeres",
    },
    {
      id: 6,
      image: product3,
      name: "Cartera Retro",
      price: "420",
      condition: "Buen estado",
      category: "accesorios",
    },
    {
      id: 7,
      image: product1,
      name: "Pantalón Cargo Vintage",
      price: "340",
      condition: "Como nuevo",
      size: "32",
      category: "hombres",
    },
    {
      id: 8,
      image: product2,
      name: "Blusa Bordada",
      price: "280",
      condition: "Excelente",
      size: "M",
      category: "mujeres",
    },
    {
      id: 9,
      image: product3,
      name: "Cinturón de Piel",
      price: "220",
      condition: "Buen estado",
      category: "accesorios",
    },
    {
      id: 10,
      image: product1,
      name: "Sudadera Vintage",
      price: "390",
      condition: "Como nuevo",
      size: "6-8",
      category: "ninos",
    },
    {
      id: 11,
      image: product2,
      name: "Falda Plisada Retro",
      price: "310",
      condition: "Excelente",
      size: "S",
      category: "mujeres",
    },
    {
      id: 12,
      image: product3,
      name: "Mochila Vintage",
      price: "490",
      condition: "Buen estado",
      category: "accesorios",
    },
  ];

  const filteredProducts = products
    .filter(p => selectedCategory === "todos" || selectedCategory === "todo" || p.category === selectedCategory.toLowerCase())
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase().trim()));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="border-b bg-card py-8 md:py-12">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <h1 className="text-3xl font-bold text-foreground md:text-5xl">
              {getCategoryTitle()}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Descubre nuestra colección completa de ropa vintage y sustentable
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-lg text-muted-foreground">
                  No hay productos en esta categoría
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
