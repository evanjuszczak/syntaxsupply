import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
// test comment
const Index = () => {
  // Split products into mousepads and guides
  const mousepads = products.filter(product => !product.isGuide);
  const guides = products.filter(product => product.isGuide);
  
  return (
    <Layout>
      <Hero />
      <div className="container py-12" id="products">
        {/* Regular Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mousepads.map((product, index) => (
            <div 
              className="animate-fade-in hover-scale" 
              style={{ animationDelay: `${index * 0.1}s` }}
              key={product.id}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.images[0]}
                slug={product.slug}
                isGuide={product.isGuide}
              />
            </div>
          ))}
        </div>
        
        {/* Featured Guide */}
        {guides.length > 0 && (
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {guides.map(guide => (
              <Link to={`/product/${guide.slug}`} key={guide.id} className="block transform transition-all duration-300 hover:translate-y-[-5px]">
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-opacity-50">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="overflow-hidden flex items-center justify-center bg-slate-50">
                      <img 
                        src={guide.images[0]} 
                        alt={guide.name}
                        className="object-contain w-full h-auto max-h-48 transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="md:col-span-2 p-6 flex flex-col justify-center">
                      <span className="text-sm font-medium text-syntax-blue mb-2">FEATURED</span>
                      <h3 className="font-semibold text-2xl mb-2">{guide.name}</h3>
                      <p className="text-gray-600 mb-4">{guide.description}</p>
                      <p className="text-gray-800 font-medium text-xl">{guide.price}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Reviews />
    </Layout>
  );
};

export default Index;
