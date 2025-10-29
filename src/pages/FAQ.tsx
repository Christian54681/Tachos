import { HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cómo puedo vender mi ropa en Tachos?",
      answer:
        "Vender en Tachos es muy sencillo. Primero, crea una cuenta en nuestra plataforma. Luego, toma fotos claras de tus prendas, describe el artículo incluyendo marca, talla, estado y materiales. Establece tu precio y publica. Nosotros te guiaremos en cada paso del proceso. Una vez que vendas, te enviaremos una etiqueta de envío prepagada para que puedas enviar tu artículo de forma fácil y segura.",
    },
    {
      question: "¿Cómo funciona el proceso de donación?",
      answer:
        "Si prefieres donar tu ropa en lugar de venderla, Tachos facilita el proceso. Selecciona las prendas que deseas donar, solicita una recolección a domicilio o envíalas a nuestro centro de distribución usando una etiqueta prepagada. Todas las donaciones se destinan a organizaciones locales que apoyan a comunidades en situación vulnerable. Recibirás un comprobante de donación para fines fiscales si lo necesitas.",
    },
    {
      question: "¿Cuál es el monto mínimo para envíos gratis?",
      answer:
        "¡Ofrecemos envíos gratis en todas las compras superiores a $250 MXN! Para pedidos menores a este monto, aplicamos una tarifa de envío estándar de $99 MXN. El envío gratis aplica a todo México y generalmente tarda entre 3-7 días hábiles dependiendo de tu ubicación.",
    },
    {
      question: "¿A dónde van las donaciones de ropa?",
      answer:
        "Todas las donaciones que recibimos en Tachos se distribuyen cuidadosamente entre organizaciones sin fines de lucro verificadas en México. Trabajamos con fundaciones que apoyan a personas en situación de calle, refugios para mujeres, casas hogar para niños y comunidades marginadas. Además, publicamos informes trimestrales en nuestra página de impacto social donde puedes ver exactamente cuántas prendas hemos donado y a qué organizaciones.",
    },
    {
      question: "¿Hacen envíos a todo México?",
      answer:
        "Sí, realizamos envíos a cualquier lugar de la República Mexicana. Trabajamos con las principales paqueterías del país para asegurar que tu pedido llegue de forma segura y rápida. Los tiempos de entrega pueden variar según tu ubicación: en zonas metropolitanas generalmente tardan 3-5 días hábiles, mientras que en zonas más remotas pueden tardar hasta 7-10 días hábiles. Siempre recibirás un número de rastreo para seguir tu pedido en tiempo real.",
    },
    {
      question: "¿Qué garantías ofrecen sobre el estado de las prendas?",
      answer:
        "Todas nuestras prendas pasan por un proceso de inspección riguroso antes de ser publicadas. Cada artículo incluye una descripción detallada de su estado, fotografías de alta calidad desde múltiples ángulos, y señalamos cualquier defecto o desgaste visible. Si recibes un artículo que no coincide con su descripción, tienes 7 días para solicitar una devolución completa. Tu satisfacción es nuestra prioridad.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos todas las tarjetas de crédito y débito principales (Visa, Mastercard, American Express), transferencias bancarias vía SPEI, pagos en OXXO, y pagos a través de plataformas digitales como PayPal y Mercado Pago. Todos nuestros pagos están protegidos con encriptación de nivel bancario para garantizar tu seguridad.",
    },
    {
      question: "¿Puedo cambiar o cancelar mi pedido después de comprarlo?",
      answer:
        "Si necesitas cancelar tu pedido, debes hacerlo dentro de las primeras 2 horas después de realizar la compra. Después de este tiempo, es probable que tu pedido ya esté siendo procesado para envío. Para solicitar una cancelación, ve a 'Mis Pedidos' y selecciona 'Cancelar pedido'. Si ya fue enviado, tendrás que esperar a recibirlo e iniciar un proceso de devolución normal.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="border-b bg-card py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
            <div className="flex justify-center mb-6">
              <HelpCircle className="h-16 w-16 text-verde" />
            </div>
            <h1 className="text-4xl font-bold text-foreground md:text-6xl">
              Preguntas Frecuentes
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Encuentra respuestas a las preguntas más comunes sobre Tachos
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border rounded-lg bg-card px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Contact Section */}
            <div className="mt-16 rounded-lg border bg-card p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ¿No encontraste lo que buscabas?
              </h3>
              <p className="text-muted-foreground mb-6">
                Nuestro equipo de soporte está listo para ayudarte con cualquier pregunta adicional
              </p>
              <a
                href="mailto:soporte@tachos.com"
                className="inline-block rounded-md bg-verde px-8 py-3 text-sm font-medium text-blanco transition-smooth hover:bg-verde/90"
              >
                Contactar Soporte
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
