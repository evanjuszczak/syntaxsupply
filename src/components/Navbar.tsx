import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { products } from "@/data/products";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to format product names for the navigation
  const formatProductName = (name: string) => {
    if (name.includes('Shortcuts')) return 'Shortcuts';
    if (name.includes('Threads')) return 'Threads Growth';
    return name.replace(' Mousepad', '').replace('A Guide to Grow FAST on ', '');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
        
        {/* Desktop Navigation - Keep Unchanged */}
        <div className="hidden md:block">
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

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container py-3">
            <ul className="flex flex-col space-y-2">
              {products.map(product => (
                <li key={product.id}>
                  <Link 
                    to={`/product/${product.slug}`} 
                    className="block text-gray-800 hover:text-black font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {formatProductName(product.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
