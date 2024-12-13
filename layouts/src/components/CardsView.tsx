import React from "react";
import ShopCard from "./ShopCard"; // Компонент для карточки товара

interface CardsViewProps {
  cards: Array<{ name: string; price: string; color: string; img: string }>;
}

const CardsView: React.FC<CardsViewProps> = ({ cards }) => {
  return (
    <div className="cards-view">
      {cards.map((product, index) => (
        <ShopCard key={index} product={product} />
      ))}
    </div>
  );
};

export default CardsView;
