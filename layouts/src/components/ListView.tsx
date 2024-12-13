import React from "react";
import ShopItem from "./ShopItem"; // Компонент для элемента списка

interface ListViewProps {
  items: Array<{ name: string; price: string; color: string; img: string }>;
}

const ListView: React.FC<ListViewProps> = ({ items }) => {
  return (
    <div className="list-view">
      {items.map((product, index) => (
        <ShopItem key={index} product={product} />
      ))}
    </div>
  );
};

export default ListView;
