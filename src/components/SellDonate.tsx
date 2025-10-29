import { Button } from "@/components/ui/button";
import { Store, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SellDonate = () => {
  const navigate = useNavigate();
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Sell Card */}
          <div className="relative overflow-hidden rounded-xl bg-verde p-8 md:p-10 shadow-medium">
            <div className="relative z-10">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blanco/20">
                <Store className="h-7 w-7 text-blanco" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-blanco md:text-3xl">
                Vende en Tachos
              </h3>
              <p className="mb-6 text-blanco/90 text-base md:text-lg">
                Convierte tu clóset en efectivo. Vende ropa que ya no usas de forma fácil y segura.
              </p>
              <Button variant="hero-outline" size="lg">
                Comenzar a vender
              </Button>
            </div>
            {/* Decorative circle */}
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-blanco/10" />
            <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-blanco/5" />
          </div>

          {/* Donate Card */}
          <div className="relative overflow-hidden rounded-xl bg-dorado p-8 md:p-10 shadow-medium">
            <div className="relative z-10">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-negro/20">
                <Heart className="h-7 w-7 text-negro" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-negro md:text-3xl">
                Dona fácilmente
              </h3>
              <p className="mb-6 text-negro/80 text-base md:text-lg">
                Dale una segunda vida a tu ropa. Ayuda a quien más lo necesita mientras cuidas el planeta.
              </p>
              <Button
                variant="default"
                size="lg"
                className="bg-negro text-blanco hover:bg-negro/90"
                onClick={() => navigate('/donar')}
              >
                Donar ahora
              </Button>
            </div>
            {/* Decorative circle */}
            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-negro/10" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-negro/5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellDonate;
