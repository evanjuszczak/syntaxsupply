
import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "David Chen",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    comment: "The guide to grow fast on threads is great. I've been able to grow my account to over 1000 followers in just 2 weeks.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Sarah Miller",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    comment: "The Excel mousepad is perfect for my daily spreadsheet work. High quality and very useful reference.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Michael Johnson",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 4,
    comment: "Love my Java mousepad! The material is durable and the syntax guide is comprehensive.",
    date: "3 weeks ago"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-medium">{review.name}</h4>
                  <div className="flex items-center">
                    <StarRating rating={review.rating} />
                    <span className="text-xs text-gray-500 ml-2">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
