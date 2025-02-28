import React from "react";

const products = [
  {
    id: 1,
    name: "Casual Shirt",
    price: "4000 Rs",
    image: "/images/image4.jpg",

  },
  {
    id: 2,
    name: "Formal Suit",
    price: "5000 Rs",
    image: "/images/image1.jpg",
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: "4000 Rs",
    image: "/images/image2.jpg",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: "3000 Rs",
    image: "/images/image3.jpg",
  },
];

function Products() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Our Varaities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img src={product.image} alt={product.name} className="w-full h-150 object-cover" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-500">{product.price}</p>
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

export default Products;