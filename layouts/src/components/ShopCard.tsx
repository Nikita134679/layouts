import React from "react";

interface ShopCardProps {
  product: { name: string; price: string; color: string; img: string };
}

const ShopCard: React.FC<ShopCardProps> = ({ product }) => {
  return (
    <div className="shop-card">
      <img src={product.img} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.color}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ShopCard;
