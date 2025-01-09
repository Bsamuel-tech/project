import React from 'react';
import { BookOpen, MessageCircle, ShoppingCart } from '../icons';

export default function NavIcons() {
  return (
    <div className="flex items-center space-x-4">
      <BookOpen className="h-5 w-5 text-indigo-600 cursor-pointer hover:text-indigo-700 transition-colors duration-200" />
      <MessageCircle className="h-5 w-5 text-indigo-600 cursor-pointer hover:text-indigo-700 transition-colors duration-200" />
      <ShoppingCart className="h-5 w-5 text-indigo-600 cursor-pointer hover:text-indigo-700 transition-colors duration-200" />
    </div>
  );
}