import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Package, Store, Gift, Mail, MapPin, LogOut } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

// Datos de ejemplo (puedes conectar a API después)
const favoriteProducts = [
  { id: 1, image: "/src/assets/product-1.jpg", name: "Chaqueta Vintage", price: "45.99", condition: "Como nuevo", size: "M" },
  { id: 2, image: "/src/assets/product-2.jpg", name: "Vestido Floral", price: "32.00", condition: "Excelente", size: "S" },
];

const cartProducts = [
  { id: 3, image: "/src/assets/product-3.jpg", name: "Camisa Retro", price: "28.50", condition: "Muy bueno", size: "L" },
];

const purchaseProducts = [
  { id: 4, image: "/src/assets/product-1.jpg", name: "Pantalón Clásico", price: "38.00", condition: "Como nuevo", size: "32" },
  { id: 5, image: "/src/assets/product-2.jpg", name: "Blusa Elegante", price: "29.99", condition: "Excelente", size: "M" },
];

const salesProducts = [
  { id: 6, image: "/src/assets/product-3.jpg", name: "Zapatos Deportivos", price: "42.00", condition: "Muy bueno", size: "42" },
];

const donationProducts = [
  { id: 7, image: "/src/assets/product-1.jpg", name: "Suéter Abrigado", price: "25.00", condition: "Bueno", size: "L" },
  { id: 8, image: "/src/assets/product-2.jpg", name: "Abrigo de Invierno", price: "55.00", condition: "Como nuevo", size: "M" },
];

const Profile = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const activeTab = searchParams.get("tab") || "favorites";

  // Si no hay usuario, redirigir al login
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-12">
          {/* Header Section con datos del usuario */}
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Hola, {user.username}
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                {user.email}
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {user.city}, {user.state}
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <Tabs
            value={activeTab}
            onValueChange={(value) => navigate(`/perfil?tab=${value}`)}
            className="w-full"
          >
            <TabsList className="w-full justify-start overflow-x-auto flex-nowrap h-auto p-1 bg-muted rounded-lg mb-8">
              <TabsTrigger value="favorites" className="gap-2">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Favoritos</span>
              </TabsTrigger>
              <TabsTrigger value="cart" className="gap-2">
                <ShoppingCart className="h-4 w-4" />
                <span className="hidden sm:inline">Carrito</span>
              </TabsTrigger>
              <TabsTrigger value="purchases" className="gap-2">
                <Package className="h-4 w-4" />
                <span className="hidden sm:inline">Mis Compras</span>
              </TabsTrigger>
              <TabsTrigger value="sales" className="gap-2">
                <Store className="h-4 w-4" />
                <span className="hidden sm:inline">Mis Ventas</span>
              </TabsTrigger>
              <TabsTrigger value="donations" className="gap-2">
                <Gift className="h-4 w-4" />
                <span className="hidden sm:inline">Mis Donaciones</span>
              </TabsTrigger>
            </TabsList>

            {/* === PESTAÑAS === */}
            <TabsContent value="favorites" className="mt-6">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-foreground mb-1">Tus Favoritos</h2>
                <p className="text-sm text-muted-foreground">Artículos que te encantan</p>
              </div>
              {favoriteProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {favoriteProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <EmptyState icon={Heart} title="No tienes favoritos aún" />
              )}
            </TabsContent>

            <TabsContent value="cart" className="mt-6">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-foreground mb-1">Tu Carrito</h2>
                <p className="text-sm text-muted-foreground">Artículos listos para comprar</p>
              </div>
              {cartProducts.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
                    {cartProducts.map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <Button size="lg" variant="hero" onClick={() => navigate("/checkout")}>
                      Proceder al pago
                    </Button>
                  </div>
                </>
              ) : (
                <EmptyState icon={ShoppingCart} title="Tu carrito está vacío" />
              )}
            </TabsContent>

            <TabsContent value="purchases" className="mt-6">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-foreground mb-1">Mis Compras</h2>
                <p className="text-sm text-muted-foreground">Historial de tus compras</p>
              </div>
              {purchaseProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {purchaseProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <EmptyState icon={Package} title="No has realizado compras aún" />
              )}
            </TabsContent>

            <TabsContent value="sales" className="mt-6">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-foreground mb-1">Mis Ventas</h2>
                <p className="text-sm text-muted-foreground">Artículos que has vendido</p>
              </div>
              {salesProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {salesProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <EmptyState icon={Store} title="No has vendido artículos aún" />
              )}
            </TabsContent>

            <TabsContent value="donations" className="mt-6">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-foreground mb-1">Mis Donaciones</h2>
                <p className="text-sm text-muted-foreground">Artículos que has donado</p>
              </div>
              {donationProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {donationProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <EmptyState icon={Gift} title="No has donado artículos aún" />
              )}
            </TabsContent>
          </Tabs>

          {/* Botón de cerrar sesión (móvil) */}
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Cerrar sesión
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Componente reutilizable para estados vacíos
const EmptyState = ({ icon: Icon, title }: { icon: any; title: string }) => (
  <div className="text-center py-12 bg-muted/50 rounded-lg">
    <Icon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
    <p className="text-muted-foreground">{title}</p>
  </div>
);

export default Profile;