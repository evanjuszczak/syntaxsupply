
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { products } from "@/data/products";

const Navbar = () => {
  // Function to format product names for the navigation
  const formatProductName = (name: string) => {
    if (name.includes('Shortcuts')) return 'Shortcuts';
    if (name.includes('Threads')) return 'Threads Growth';
    return name.replace(' Mousepad', '').replace('A Guide to Grow FAST on ', '');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-4">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/7c15db8d-f882-4e60-969e-45d4f8311a76.png" 
            alt="Syntax Supply Logo" 
            className="h-12" 
          />
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            {products.map(product => (
              <NavigationMenuItem key={product.id}>
                <Link 
                  to={`/product/${product.slug}`} 
                  className="text-gray-800 hover:text-black font-medium px-4 py-2"
                >
                  {formatProductName(product.name)}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;
