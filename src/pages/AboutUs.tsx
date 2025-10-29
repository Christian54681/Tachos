import { Users, Target, Eye, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="border-b bg-card py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
            <h1 className="text-4xl font-bold text-foreground md:text-6xl">
              Sobre Nosotros
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Ropa con historia, estilo con consciencia. Conoce la historia detrás de Tachos.
            </p>
          </div>
        </section>

        {/* Historia */}
        <section className="border-b py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-8 w-8 text-verde" />
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Nuestra Historia
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Tachos nació en 2020 con una visión clara: transformar la manera en que México 
                consume moda. Fundada en la Ciudad de México, nuestra plataforma surgió de la 
                necesidad de crear un espacio donde la moda vintage y sustentable pudiera florecer.
              </p>
              <p className="text-lg leading-relaxed">
                Comenzamos como un pequeño marketplace con apenas 50 prendas, pero rápidamente 
                nos dimos cuenta de que existía una comunidad hambrienta de alternativas 
                sustentables. Hoy, somos la plataforma líder de moda vintage en México, con 
                miles de prendas únicas y una comunidad comprometida con el consumo consciente.
              </p>
              <p className="text-lg leading-relaxed">
                Cada prenda en Tachos tiene su propia historia que contar, y nosotros nos 
                encargamos de darle una segunda vida, reduciendo el impacto ambiental de la 
                industria de la moda mientras promovemos un estilo único y auténtico.
              </p>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="border-b bg-card py-16 md:py-20">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Misión */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-8 w-8 text-verde" />
                  <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                    Nuestra Misión
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Revolucionar la industria de la moda en México promoviendo el consumo 
                  consciente y sustentable. Conectamos a vendedores y compradores en una 
                  plataforma donde cada prenda vintage encuentra un nuevo hogar, reduciendo 
                  el desperdicio textil y fomentando un estilo único y auténtico.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Creemos que la moda puede ser hermosa, accesible y responsable al mismo tiempo.
                </p>
              </div>

              {/* Visión */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="h-8 w-8 text-verde" />
                  <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                    Nuestra Visión
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Ser la plataforma de moda sustentable más grande de Latinoamérica para 2030, 
                  liderando el cambio hacia un consumo más consciente y responsable. Aspiramos 
                  a crear un movimiento donde la moda vintage y de segunda mano sea la primera 
                  opción para millones de personas.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Imaginamos un futuro donde cada prenda sea valorada y aprovechada al máximo, 
                  contribuyendo a un planeta más sano y un estilo más auténtico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex items-center gap-3 mb-12 justify-center">
              <Users className="h-8 w-8 text-verde" />
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Nuestro Equipo
              </h2>
            </div>
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Conoce a las personas apasionadas que hacen posible Tachos. Un equipo comprometido 
              con la sustentabilidad y la innovación.
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-lg bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop"
                  alt="Equipo Tachos"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
