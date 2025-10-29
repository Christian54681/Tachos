import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        {/* Main Footer */}
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-negro">TACHOS</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ropa con historia, estilo con consciencia. La plataforma mexicana de moda vintage y sustentable.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-smooth hover:bg-verde hover:text-blanco"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Comprar */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
              Categorías
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/productos?category=todo" className="text-muted-foreground transition-smooth hover:text-verde">
                  Todo
                </a>
              </li>
              <li>
                <a href="/mujeres" className="text-muted-foreground transition-smooth hover:text-verde">
                  Mujeres
                </a>
              </li>
              <li>
                <a href="/hombres" className="text-muted-foreground transition-smooth hover:text-verde">
                  Hombres
                </a>
              </li>
              <li>
                <a href="/ninos" className="text-muted-foreground transition-smooth hover:text-verde">
                  Niños
                </a>
              </li>
              <li>
                <a href="/accesorios" className="text-muted-foreground transition-smooth hover:text-verde">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>

          {/* Ayuda */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
              Ayuda
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/faq" className="text-muted-foreground transition-smooth hover:text-verde">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Nosotros */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
              Tachos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/nosotros" className="text-muted-foreground transition-smooth hover:text-verde">
                  Quiénes somos
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-muted-foreground transition-smooth hover:text-verde">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 border-t py-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Tachos. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacidad" className="text-muted-foreground transition-smooth hover:text-verde">
              Privacidad
            </a>
            <a href="/terminos" className="text-muted-foreground transition-smooth hover:text-verde">
              Términos
            </a>
            <a href="/cookies" className="text-muted-foreground transition-smooth hover:text-verde">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
