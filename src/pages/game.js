import React, { useState, useEffect } from 'react';

const Game = () => {
  const [wasteItems, setWasteItems] = useState([
    { id: 1, type: 'plastic', category: 'plastic', image: 'imgs/plastic.png' },
    { id: 2, type: 'paper', category: 'paper', image: 'imgs/paper.png' },
    { id: 3, type: 'glass', category: 'glass', image: "imgs/glass.png" },
  ]);

  const [selectedWasteItem, setSelectedWasteItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [score, setScore] = useState(0);


  useEffect(() => {
    wasteItems.forEach(wasteItem => {
      let wasteItemElement = document.getElementById(wasteItem.id);
      let randomX = Math.floor(Math.random() * window.innerWidth);
      let randomY = Math.floor(Math.random() * window.innerHeight);
      wasteItemElement.style.left = `${randomX}px`;
      wasteItemElement.style.top = `${randomY}px`;
    });
  }, [wasteItems]);

  const handleWasteItemClick = wasteItem => {
    setSelectedWasteItem(wasteItem);
  };

  const handleCategoryClick = category => {
    setSelectedCategory(category);
    if (category === selectedWasteItem.category) {
      setScore(score + 1);
    }
  };

  return (
    <div>
      <h1>Juego de clasificación de residuos</h1>
      <div className="waste-items-container">
        {wasteItems.map(wasteItem => (
          <div
            key={wasteItem.id}
            id={wasteItem.id}
            className="waste-item"
            onClick={() => handleWasteItemClick(wasteItem)}
          >
            <img src={wasteItem.image} alt={wasteItem.type} width="200px"/>
          </div>
        ))}
      </div>
      {selectedWasteItem ? (
        <div>
          <h2>Has seleccionado:</h2>
          <img src={selectedWasteItem.image} alt={selectedWasteItem.type} width="200px"  />
          <p>Tipo: {selectedWasteItem.type}</p>
          <h2>Selecciona la categoría:</h2>
          <div>
            <button onClick={() => handleCategoryClick('plastic')}>
              Plástico
            </button>
            <button onClick={() => handleCategoryClick('paper')}>
              Papel
            </button>
            <button onClick={() => handleCategoryClick('glass')}>
              Vidrio
            </button>
            ...
          </div>
          {selectedCategory ? (
            <p>
              {selectedCategory === selectedWasteItem.category
                ? '¡Correcto! Tu puntuación es: ' + score
                : 'Incorrecto'}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Game;
