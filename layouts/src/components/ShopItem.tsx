import React from "react";

interface ShopItemProps {
  product: { name: string; price: string; color: string; img: string };
}

const ShopItem: React.FC<ShopItemProps> = ({ product }) => {
  return (
    <div className="shop-item">
      <img src={product.img} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.color}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ShopItem;
