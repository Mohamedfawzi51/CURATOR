import React from "react";
import type { Product } from "../types/product";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/product/id")}
      className="bg-surface-container-lowest p-6 rounded-xl group transition-all duration-500 hover:shadow-2xl hover:shadow-on-surface/5 cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-[3/4] rounded-lg mb-8">
        <img
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={product.image}
        />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <h4 className="font-headline text-lg font-bold truncate">
        {product.title}
      </h4>
      <p className="font-body text-sm text-on-surface-variant mb-6 truncate">
        {product.description}
      </p>
      <div className="flex justify-between items-center">
        <span className="font-body font-bold">${product.price}</span>
        <button className="bg-primary text-on-primary font-label text-[9px] uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-primary-container transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
