import React from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: string;
}

interface CartPreviewProps {
  cart: Product[];
}

const CartPreview: React.FC<CartPreviewProps> = ({ cart }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Cart Preview</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-md"
            >
              <span>{item.name}</span>
              <span className="text-gray-800 font-semibold">{item.price}</span>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <Link
          to="/cart"
          className="mt-4 inline-block bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-200"
        >
          View Cart
        </Link>
      )}
    </div>
  );
};

export default CartPreview;
