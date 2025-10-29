import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      image: product1,
      name: "Chamarra Denim Vintage",
      price: "450",
      condition: "Como nuevo",
      size: "M",
    },
    {
      id: 2,
      image: product2,
      name: "Vestido Floral Retro",
      price: "320",
      condition: "Excelente",
      size: "S",
    },
    {
      id: 3,
      image: product3,
      name: "Bolsa de Piel Clásica",
      price: "580",
      condition: "Buen estado",
    },
    {
      id: 4,
      image: product1,
      name: "Chamarra Denim Vintage",
      price: "450",
      condition: "Como nuevo",
      size: "L",
    },
    {
      id: 5,
      image: product2,
      name: "Vestido Floral Vintage",
      price: "290",
      condition: "Excelente",
      size: "M",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Novedades
            </h2>
            <p className="mt-2 text-muted-foreground">
              Piezas únicas recién llegadas
            </p>
          </div>
          <a
            href="/productos"
            className="hidden text-sm font-medium text-verde transition-smooth hover:text-verde/80 md:block"
          >
            Ver todo →
          </a>
        </div>

        {/* Products Grid - Horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-4 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-4 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-6">
            {products.map((product) => (
              <div key={product.id} className="w-64 flex-shrink-0 md:w-auto">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile "Ver todo" */}
        <div className="mt-6 text-center md:hidden">
          <a
            href="/productos"
            className="text-sm font-medium text-verde transition-smooth hover:text-verde/80"
          >
            Ver todo →
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
