import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Youtube } from 'lucide-react';

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

interface ContactDialogProps {
  children: React.ReactNode;
}

const ContactDialog = ({ children }: ContactDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Contact Us</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-6">
          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <Mail className="h-6 w-6 text-syntax-blue" />
            <div>
              <h3 className="font-medium">Email</h3>
              <a 
                href="mailto:syntaxsupply@outlook.com" 
                className="text-syntax-blue hover:underline"
              >
                syntaxsupply@outlook.com
              </a>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Connect on Social Media</h3>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://youtube.com/syntaxsupplycom" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube" 
                className="flex flex-col items-center gap-1 text-gray-600 hover:text-red-500 transition-colors"
              >
                <Youtube className="h-7 w-7" />
                <span className="text-sm">YouTube</span>
              </a>
              <a 
                href="https://instagram.com/syntaxsupply" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="flex flex-col items-center gap-1 text-gray-600 hover:text-pink-500 transition-colors"
              >
                <Instagram className="h-7 w-7" />
                <span className="text-sm">Instagram</span>
              </a>
              <a 
                href="https://tiktok.com/@syntaxsupply" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="TikTok" 
                className="flex flex-col items-center gap-1 text-gray-600 hover:text-black transition-colors"
              >
                <TikTokIcon className="h-7 w-7" />
                <span className="text-sm">TikTok</span>
              </a>
            </div>
          </div>
          
          <p className="text-center text-gray-500 text-sm">
            We typically respond within 24 hours.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog; 