import { useNavigate } from "react-router-dom";
import womenImg from "@/assets/category-women.jpg";
import menImg from "@/assets/category-men.jpg";
import kidsImg from "@/assets/category-kids.jpg";
import accessoriesImg from "@/assets/category-accessories.jpg";

const Categories = () => {
  const navigate = useNavigate();
  const categories = [
    {
      name: "Mujeres",
      image: womenImg,
      category: "mujeres",
    },
    {
      name: "Hombres",
      image: menImg,
      category: "hombres",
    },
    {
      name: "Niños",
      image: kidsImg,
      category: "ninos",
    },
    {
      name: "Accesorios",
      image: accessoriesImg,
      category: "accesorios",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Compra por Categoría
          </h2>
          <p className="mt-2 text-muted-foreground">
            Encuentra lo que buscas
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => navigate(`/productos?category=${category.category}`)}
              className="group relative overflow-hidden rounded-lg shadow-soft transition-smooth hover:shadow-medium cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-negro/70 via-negro/20 to-transparent" />
              
              {/* Category Name */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-xl font-bold text-blanco md:text-2xl">
                  {category.name}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
