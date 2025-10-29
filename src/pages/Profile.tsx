import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Package, Store, Gift } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";

// Datos de ejemplo para cada sección
const favoriteProducts = [
  {
    id: 1,
    image: "/src/assets/product-1.jpg",
    name: "Chaqueta Vintage",
    price: "45.99",
    condition: "Como nuevo",
    size: "M",
  },
  {
    id: 2,
    image: "/src/assets/product-2.jpg",
    name: "Vestido Floral",
    price: "32.00",
    condition: "Excelente",
    size: "S",
  },
];

const cartProducts = [
  {
    id: 3,
    image: "/src/assets/product-3.jpg",
    name: "Camisa Retro",
    price: "28.50",
    condition: "Muy bueno",
    size: "L",
  },
];

const purchaseProducts = [
  {
    id: 4,
    image: "/src/assets/product-1.jpg",
    name: "Pantalón Clásico",
    price: "38.00",
    condition: "Como nuevo",
    size: "32",
  },
  {
    id: 5,
    image: "/src/assets/product-2.jpg",
    name: "Blusa Elegante",
    price: "29.99",
    condition: "Excelente",
    size: "M",
  },
];

const salesProducts = [
  {
    id: 6,
    image: "/src/assets/product-3.jpg",
    name: "Zapatos Deportivos",
    price: "42.00",
    condition: "Muy bueno",
    size: "42",
  },
];

const donationProducts = [
  {
    id: 7,
    image: "/src/assets/product-1.jpg",
    name: "Suéter Abrigado",
    price: "25.00",
    condition: "Bueno",
    size: "L",
  },
  {
    id: 8,
    image: "/src/assets/product-2.jpg",
    name: "Abrigo de Invierno",
    price: "55.00",
    condition: "Como nuevo",
    size: "M",
  },
];

const Profile = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const activeTab = searchParams.get("tab") || "favorites";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-12">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Mi Perfil
            </h1>
            <p className="text-muted-foreground">
              Gestiona tus favoritos, compras y ventas
            </p>
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

            <TabsContent value="favorites" className="mt-6">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-foreground mb-1">
                  Tus Favoritos
                </h2>
                <p className="text-sm text-muted-foreground">
                  Artículos que te encantan
                </p>
              </div>
              {favoriteProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {favoriteProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/50 rounded-lg">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    No tienes favoritos aún
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="cart" className="mt-6">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-foreground mb-1">
                  Tu Carrito
                </h2>
                <p className="text-sm text-muted-foreground">
                  Artículos listos para comprar
                </p>
              </div>
              {cartProducts.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
                    {cartProducts.map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <Button 
                      size="lg" 
                      variant="hero"
                      onClick={() => navigate('/checkout')}
                    >
                      Proceder al pago
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12 bg-muted/50 rounded-lg">
                  <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    Tu carrito está vacío
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="purchases" className="mt-6">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-foreground mb-1">
                  Mis Compras
                </h2>
                <p className="text-sm text-muted-foreground">
                  Historial de tus compras
                </p>
              </div>
              {purchaseProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {purchaseProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/50 rounded-lg">
                  <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    No has realizado compras aún
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="sales" className="mt-6">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-foreground mb-1">
                  Mis Ventas
                </h2>
                <p className="text-sm text-muted-foreground">
                  Artículos que has vendido
                </p>
              </div>
              {salesProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {salesProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/50 rounded-lg">
                  <Store className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    No has vendido artículos aún
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="donations" className="mt-6">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-foreground mb-1">
                  Mis Donaciones
                </h2>
                <p className="text-sm text-muted-foreground">
                  Artículos que has donado
                </p>
              </div>
              {donationProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {donationProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/50 rounded-lg">
                  <Gift className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    No has donado artículos aún
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
