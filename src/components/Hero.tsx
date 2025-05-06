
import React from 'react';

const Hero = () => {
  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 mb-8">
      <div className="container text-center">
        <div className="flex justify-center mb-6 animate-fade-in">
          <img 
            src="/lovable-uploads/7c15db8d-f882-4e60-969e-45d4f8311a76.png" 
            alt="Syntax Supply Logo" 
            className="h-16"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Syntax <span className="text-syntax-blue">Supply</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Enhance your coding experience with our premium programming reference mousepads.
          Quick access to syntax and shortcuts at your fingertips.
        </p>
        <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <button 
            onClick={scrollToProducts}
            className="inline-block bg-syntax-blue text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-syntax-blue/90 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
