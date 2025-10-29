import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: string;
  condition: string;
  size?: string;
}

const ProductCard = ({ id, image, name, price, condition, size }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/producto/${id}`)}
      className="group relative overflow-hidden rounded-lg bg-card shadow-soft transition-smooth hover:shadow-medium cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-smooth group-hover:scale-105"
        />
        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-9 w-9 bg-blanco/90 backdrop-blur-sm hover:bg-blanco"
          onClick={(e) => {
            e.stopPropagation();
            navigate('/perfil?tab=favorites');
          }}
        >
          <Heart className="h-5 w-5" />
        </Button>
        {/* Condition Badge */}
        <div className="absolute left-2 top-2">
          <Badge variant="secondary" className="bg-blanco/90 backdrop-blur-sm text-negro">
            {condition}
          </Badge>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="mb-1 font-medium text-card-foreground line-clamp-1">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-verde">${price}</p>
          {size && (
            <p className="text-sm text-muted-foreground">Talla {size}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
