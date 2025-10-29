import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

const Donate = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    productName: "",
    size: "",
    description: "",
    acceptTerms: false,
  });
  const [photos, setPhotos] = useState<File[]>([]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + photos.length > 4) {
      toast({
        title: "Error",
        description: "Solo puedes subir máximo 4 fotos",
        variant: "destructive",
      });
      return;
    }
    setPhotos([...photos, ...files].slice(0, 4));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      toast({
        title: "Error",
        description: "Debes aceptar los Términos y condiciones",
        variant: "destructive",
      });
      return;
    }

    if (photos.length === 0) {
      toast({
        title: "Error",
        description: "Debes subir al menos una foto",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Solicitud enviada!",
      description: "Tu solicitud de donación ha sido enviada exitosamente",
    });
    
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-2xl px-4 py-12 md:px-6">
        <div className="rounded-lg bg-card p-6 shadow-soft md:p-8">
          <h1 className="mb-6 text-3xl font-bold text-foreground">Donar producto</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-start gap-2">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, acceptTerms: checked as boolean })
                }
              />
              <label
                htmlFor="terms"
                className="text-sm leading-tight text-foreground cursor-pointer"
              >
                Acepto los Términos y condiciones
              </label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="productName">Nombre del producto</Label>
              <Input
                id="productName"
                type="text"
                value={formData.productName}
                onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="size">Tallas o medidas</Label>
              <Input
                id="size"
                type="text"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                placeholder="Ej: M, L, 32, etc."
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe el producto, su estado, características especiales..."
                className="min-h-[120px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Fotos del producto (máximo 4)</Label>
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="photos"
                  className="flex h-32 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-input bg-muted hover:bg-muted/50 transition-colors"
                >
                  <div className="text-center">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Haz clic para subir fotos
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {photos.length}/4 fotos
                    </p>
                  </div>
                  <input
                    id="photos"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhotoChange}
                    className="hidden"
                  />
                </label>
                
                {photos.length > 0 && (
                  <div className="grid grid-cols-4 gap-2">
                    {photos.map((photo, index) => (
                      <div
                        key={index}
                        className="relative aspect-square overflow-hidden rounded-md border bg-muted"
                      >
                        <img
                          src={URL.createObjectURL(photo)}
                          alt={`Foto ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <Button type="submit" size="lg" variant="hero" className="w-full">
              Enviar solicitud
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
