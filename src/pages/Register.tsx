import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { register } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      username: formData.get("username") as string,
      city: formData.get("city") as string,
      state: formData.get("state") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      acceptTerms: formData.get("terms") === "on",
    };

    if (!data.acceptTerms) {
      toast({
        title: "Error",
        description: "Debes aceptar los Términos y condiciones",
        variant: "destructive",
      });
      return;
    }

    // Registrar y loguear
    register(data);
    
    toast({
      title: "¡Cuenta creada!",
      description: `Bienvenido, ${data.username}!`,
    });
    
    navigate("/perfil"); // Redirige al perfil
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-2xl px-4 py-12 md:px-6">
        <div className="rounded-lg bg-card p-6 shadow-soft md:p-8">
          <h1 className="mb-6 text-3xl font-bold text-foreground">Crear cuenta</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Nombre de usuario</Label>
              <Input id="username" name="username" type="text" required />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="city">Ciudad</Label>
                <Input id="city" name="city" type="text" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">Estado</Label>
                <Input id="state" name="state" type="text" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" name="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" name="password" type="password" required />
            </div>

            <div className="flex items-start gap-2">
              <Checkbox id="terms" name="terms" required />
              <label htmlFor="terms" className="text-sm leading-tight text-foreground cursor-pointer">
                Acepto los Términos y condiciones
              </label>
            </div>

            <Button type="submit" size="lg" variant="hero" className="w-full">
              Crear cuenta
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;