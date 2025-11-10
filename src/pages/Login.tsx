import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    login(email, password);

    toast({
      title: "¡Bienvenido!",
      description: "Has iniciado sesión exitosamente",
    });
    
    navigate("/perfil");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-md px-4 py-12 md:px-6">
        <div className="rounded-lg bg-card p-6 shadow-soft md:p-8">
          <h1 className="mb-6 text-3xl font-bold text-foreground">Iniciar Sesión</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" name="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" name="password" type="password" required />
            </div>

            <Button type="submit" size="lg" variant="hero" className="w-full">
              Acceder
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;