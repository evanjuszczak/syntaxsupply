import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProductCarousel from '@/components/ProductCarousel';
import { getProductBySlug } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart, Ruler, FileText, Share2, Check } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = getProductBySlug(slug || '');
  const { toast } = useToast();
  const [isSharing, setIsSharing] = useState(false);

  if (!product) {
    return (
      <Layout>
        <div className="container text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
          </Button>
        </div>
      </Layout>
    );
  }

  const handleBuyNow = () => {
    window.location.href = product.stripeLink;
  };

  const handleShare = async () => {
    setIsSharing(true);
    const productUrl = `${window.location.origin}/product/${slug}`;
    
    try {
      // Try to use the Web Share API if available
      if (navigator.share) {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: productUrl,
        });
        toast({
          title: "Shared successfully!",
          description: "The product link has been shared.",
        });
      } else {
        // Fallback to clipboard copy
        await navigator.clipboard.writeText(productUrl);
        toast({
          title: "Link copied!",
          description: "The product link has been copied to your clipboard.",
        });
      }
    } catch (error) {
      console.error("Error sharing:", error);
      toast({
        title: "Couldn't share",
        description: "There was an error sharing this product.",
        variant: "destructive",
      });
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <Layout>
      <div className="container animate-fade-in">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6 hover:scale"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-scale-in">
            <ProductCarousel 
              images={product.images} 
              productName={product.name} 
              isGuide={product.isGuide}
            />
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              {product.price}
            </p>
            
            <div className="flex items-center text-gray-600 mb-6">
              {product.isGuide ? (
                <>
                  <FileText className="h-5 w-5 mr-2" />
                  <span>Digital EPDF</span>
                </>
              ) : (
                <>
                  <Ruler className="h-5 w-5 mr-2" />
                  <span>Dimensions: 31.5 in × 11.8 in</span>
                </>
              )}
            </div>
            
            <div className="border-t border-b py-6 my-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {product.description}
              </p>
              
              <ul className="text-gray-700 mb-6 space-y-2">
                {product.isGuide ? (
                  <>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      Comprehensive digital guide in PDF format
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      Actionable strategies for growing your Threads audience
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      Instant download — Start implementing tactics immediately
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      High-quality durable mousepad with non-slip base
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      Comprehensive programming reference at your fingertips
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      Large size: 31.5 in × 11.8 in — Perfect for daily use while coding
                    </li>
                  </>
                )}
              </ul>
            </div>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={handleBuyNow}
                size="lg" 
                className="w-full py-6 text-lg bg-syntax-blue hover:bg-syntax-blue/90 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.01]"
              >
                <ShoppingCart className="mr-2 h-5 w-5" /> Buy Now
              </Button>
              
              <Button 
                onClick={handleShare}
                size="lg" 
                variant="outline"
                disabled={isSharing}
                className="w-full sm:w-auto py-6 text-lg transition-all duration-300 hover:shadow-md"
              >
                {isSharing ? (
                  <Check className="mr-2 h-5 w-5" />
                ) : (
                  <Share2 className="mr-2 h-5 w-5" />
                )}
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
