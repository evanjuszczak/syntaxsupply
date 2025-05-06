
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container max-w-lg mx-auto text-center py-12">
        <div className="bg-green-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Purchase!</h1>
        
        <p className="text-gray-700 mb-8">
          Your order has been successfully processed. You will receive a confirmation email shortly with your order details.
        </p>
        
        <Button 
          onClick={() => navigate('/')}
          size="lg" 
          className="px-8"
        >
          Continue Shopping
        </Button>
      </div>
    </Layout>
  );
};

export default Success;
