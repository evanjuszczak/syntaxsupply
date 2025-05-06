import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactDialog from './ContactDialog';

// Custom TikTok icon since it's not available in lucide-react
const TikTokIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="mt-auto py-10 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <button onClick={scrollToTop} className="text-xl font-semibold hover:text-syntax-blue transition-colors">
              Syntax Supply
            </button>
          </div>
          
          <div className="flex flex-wrap gap-8">
            <Link to="/product/python-mousepad" className="text-gray-600 hover:text-syntax-blue transition-colors">Python</Link>
            <Link to="/product/java-mousepad" className="text-gray-600 hover:text-syntax-blue transition-colors">Java</Link>
            <Link to="/product/excel-mousepad" className="text-gray-600 hover:text-syntax-blue transition-colors">Excel</Link>
            <Link to="/product/shortcuts-mousepad" className="text-gray-600 hover:text-syntax-blue transition-colors">Shortcuts</Link>
            <Link to="/product/threads-growth-guide" className="text-gray-600 hover:text-syntax-blue transition-colors">Threads</Link>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <div className="flex space-x-4">
                <a href="https://youtube.com/syntaxsupplycom" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-500 hover:text-red-500 transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
                <a href="https://instagram.com/syntaxsupply" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-pink-500 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://tiktok.com/@syntaxsupply" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-500 hover:text-black transition-colors">
                  <TikTokIcon className="h-6 w-6" />
                </a>
              </div>
              <div className="ml-6">
                <ContactDialog>
                  <Button variant="ghost" className="flex items-center gap-2 text-gray-600 hover:text-syntax-blue">
                    <MessageCircle className="h-5 w-5" />
                    <span>Contact Us</span>
                  </Button>
                </ContactDialog>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Syntax Supply. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
