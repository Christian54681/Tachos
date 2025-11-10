import { Search, Heart, ShoppingCart, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const { user, logout } = useAuth();

  const categories = ["Todo", "Mujeres", "Hombres", "Niños", "Accesorios"];

  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    const params = new URLSearchParams(searchParams);
    if (value.trim()) {
      params.set("search", value.trim());
    } else {
      params.delete("search");
    }
    navigate(`/productos?${params.toString()}`);
  };

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", category.toLowerCase());
    navigate(`/productos?${params.toString()}`);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-soft">
      <div className="container mx-auto max-w-7xl">
        {/* Main Header */}
        <div className="flex h-20 items-center justify-between gap-4 px-4 md:px-6">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-tight text-negro md:text-3xl">
              TACHOS
            </h1>
          </a>

          {/* Search Bar - Hidden on mobile */}
          <div className="relative hidden flex-1 max-w-xl md:block">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Busca ropa, accesorios, marcas..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="h-11 pl-10 pr-4 w-full bg-muted border-0 focus-visible:ring-verde"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Favoritos y Carrito */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:inline-flex"
              onClick={() => navigate("/perfil?tab=favorites")}
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/perfil?tab=cart")}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>

            {/* === USUARIO LOGUEADO === */}
            {user ? (
              <>
                {/* Desktop */}
                <div className="hidden md:flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate("/perfil")}
                    className="flex items-center gap-1.5 font-medium hover:bg-accent"
                  >
                    <User className="h-4 w-4" />
                    Hola, {user.username}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="flex items-center gap-1"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="hidden lg:inline">Salir</span>
                  </Button>
                </div>

                {/* Mobile */}
                <div className="md:hidden flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate("/perfil")}
                    className="text-xs font-medium"
                  >
                    {user.username}
                  </Button>
                  <Button variant="outline" size="icon" onClick={handleLogout}>
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              </>
            ) : (
              <>
                {/* Desktop */}
                <Button
                  variant="outline"
                  size="default"
                  className="hidden md:inline-flex"
                  onClick={() => navigate("/login")}
                >
                  Iniciar Sesión
                </Button>
                <Button
                  variant="hero"
                  size="default"
                  className="hidden md:inline-flex"
                  onClick={() => navigate("/registro")}
                >
                  Registrarse
                </Button>

                {/* Mobile */}
                <Button
                  variant="outline"
                  size="sm"
                  className="md:hidden"
                  onClick={() => navigate("/login")}
                >
                  Iniciar Sesión
                </Button>
                <Button
                  variant="hero"
                  size="sm"
                  className="md:hidden"
                  onClick={() => navigate("/registro")}
                >
                  Registrarse
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden border-t md:block">
          <ul className="flex items-center justify-center gap-8 py-3">
            {categories.map((category) => {
              const isActive =
                searchParams.get("category")?.toLowerCase() === category.toLowerCase() ||
                (!searchParams.get("category") && category === "Todo");
              return (
                <li key={category}>
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className={`text-sm font-medium transition-smooth ${
                      isActive
                        ? "text-verde border-b-2 border-verde pb-0.5"
                        : "text-foreground hover:text-verde"
                    }`}
                  >
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Search */}
        <div className="px-4 pb-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="h-10 pl-10 pr-4 w-full bg-muted border-0"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;