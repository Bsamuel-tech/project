import React, { useState, useEffect } from "react";
import ConfirmationMessage from "../../components/ConfirmationMessage";
import CartPreview from "../../components/CartPreview";

// Import images explicitly
import dnaImage from "../../images/dna-extraction-kit.jpeg";
import geneticsImage from "../../images/genetics-textbook.jpeg";
import pcrImage from "../../images/pcr-machine.jpeg";
import geneSequencerImage from "../../images/gene-sequencer.jpeg";
import electrophoresisImage from "../../images/electrophoresis-gel-kit.jpeg";
import microscopeImage from "../../images/microscope.jpeg";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "DNA Extraction Kit",
    description: "A comprehensive kit for extracting DNA from various samples.",
    price: "$150",
    image: dnaImage, // Imported image
  },
  {
    id: 2,
    name: "Genetics Textbook",
    description: "An in-depth textbook covering all aspects of genetics.",
    price: "$90",
    image: geneticsImage, // Imported image
  },
  {
    id: 3,
    name: "PCR Machine",
    description: "A high-quality PCR machine for genetic analysis.",
    price: "$2000",
    image: pcrImage, // Imported image
  },
  {
    id: 4,
    name: "Gene Sequencer",
    description: "An advanced tool for sequencing genetic material.",
    price: "$3500",
    image: geneSequencerImage, // Imported image
  },
  {
    id: 5,
    name: "Electrophoresis Gel Kit",
    description: "A complete kit for running electrophoresis experiments.",
    price: "$300",
    image: electrophoresisImage, // Imported image
  },
  {
    id: 6,
    name: "Microscope",
    description: "A state-of-the-art microscope for laboratory use.",
    price: "$1200",
    image: microscopeImage, // Imported image
  },
];

const Products: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [confirmation, setConfirmation] = useState<string>("");

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setConfirmation(`${product.name} added to cart!`);
    setTimeout(() => setConfirmation(""), 3000); // Hide confirmation after 3 seconds
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Products</h1>

      {confirmation && <ConfirmationMessage message={confirmation} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}  // Use imported image
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <p className="text-gray-800 font-semibold mb-4">{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <CartPreview cart={cart} />
    </div>
  );
};

export default Products;
