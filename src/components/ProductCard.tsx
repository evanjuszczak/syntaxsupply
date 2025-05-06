import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  slug: string;
  isGuide?: boolean;
}

const ProductCard = ({ id, name, price, image, slug, isGuide }: ProductCardProps) => {
  return (
    <Link to={`/product/${slug}`} className="block transform transition-all duration-300 hover:translate-y-[-5px]">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-opacity-50">
        <div className={`${isGuide ? 'aspect-square' : 'aspect-[4/3]'} overflow-hidden bg-slate-50 flex items-center justify-center`}>
          <img 
            src={image} 
            alt={name}
            className={`${isGuide ? 'object-contain h-5/6 w-5/6' : 'object-cover w-full h-full'} transition-transform duration-500 hover:scale-110`}
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <p className="text-gray-800 font-medium">{price}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
