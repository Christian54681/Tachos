import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-vintage.jpg";

const Hero = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-negro/70 via-negro/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto max-w-7xl h-full px-4 md:px-6">
        <div className="flex h-full max-w-2xl flex-col justify-center">
          <h2 className="mb-4 text-4xl font-bold leading-tight text-blanco md:text-5xl lg:text-6xl">
            Ropa con historia,<br />
            <span className="text-dorado">estilo con consciencia.</span>
          </h2>
          <p className="mb-8 text-lg text-blanco/90 md:text-xl max-w-xl">
            Descubre piezas únicas de segunda mano. Compra, vende o dona con propósito.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button variant="hero" size="lg">
              Comprar ahora
            </Button>
            <Button variant="hero-outline" size="lg">
              Vende o dona
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
