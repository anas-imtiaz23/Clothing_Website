import React from "react";

const products = [
  {
    id: 1,
    name: "Casual Shirt",
    originalPrice: "4000 Rs",
    discountedPrice: "3000 Rs",
    image: "/images/image5.jpeg",
  },
  {
    id: 2,
    name: "Formal Suit",
    originalPrice: "5000 Rs",
    discountedPrice: "4000 Rs",
    image: "/images/image6.jpeg",
  },
  {
    id: 3,
    name: "Denim Jacket",
    originalPrice: "6000 Rs",
    discountedPrice: "5000 Rs",
    image: "/images/image7.jpeg",
  },
  {
    id: 4,
    name: "Summer Dress",
    originalPrice: "5000 Rs",
    discountedPrice: "4000 Rs",
    image: "/images/image8.jpeg",
  },
  {
    id: 5,
    name: "Summer Dress",
    originalPrice: "4000 Rs",
    discountedPrice: "3000 Rs",
    image: "/images/image9.jpeg",
  },
  {
    id: 6,
    name: "Summer Dress",
    originalPrice: "3000 Rs",
    discountedPrice: "2000 Rs",
    image: "/images/image10.jpeg",
  },
  {
    id: 7,
    name: "Summer Dress",
    originalPrice: "4000 Rs",
    discountedPrice: "3000 Rs",
    image: "/images/image11.jpeg",
  },
  {
    id: 8,
    name: "Summer Dress",
    originalPrice: "3000 Rs",
    discountedPrice: "2000 Rs",
    image: "/images/image12.jpeg",
  },
  {
    id: 8,
    name: "Summer Dress",
    originalPrice: "3000 Rs",
    discountedPrice: "2000 Rs",
    image: "/images/image13.jpeg",
  },
  {
    id: 8,
    name: "Summer Dress",
    originalPrice: "3000 Rs",
    discountedPrice: "2000 Rs",
    image: "/images/image14.jpeg",
  },
  {
    id: 8,
    name: "Summer Dress",
    originalPrice: "3000 Rs",
    discountedPrice: "2000 Rs",
    image: "/images/image15.jpeg",
  },
  {
    id: 8,
    name: "Summer Dress",
    originalPrice: "3000 Rs",
    discountedPrice: "2000 Rs",
    image: "/images/image16.jpeg",
  },
];

function Products2() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Our Varieties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 relative"
          >
            {/* Image Container with Discounted Price Label */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-150 object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm font-bold rounded">
                {product.discountedPrice}
              </span>
            </div>

            {/* Product Details */}
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-500 line-through">{product.originalPrice}</p>
              <p className="text-red-600 font-bold">{product.discountedPrice}</p>
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products2;
