import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { getRandomItems } from '../data/watastedItems';

const Home = () => {

  const [wasteItems, setWasteItems] = useState(getRandomItems());

  const [selectedWasteItem, setSelectedWasteItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [score, setScore] = useState(0);
  const [fallos, setFallos] = useState(0);

  const router = useRouter()

  const handleWasteItemClick = wasteItem => {
    setSelectedWasteItem(wasteItem);
  };

  const handleCategoryClick = category => {
    setSelectedCategory(category);
    if (category === selectedWasteItem.category) {
      setScore(score + 1);
      alert('¡Correcto! Tu puntuación es: ' + (score + 1))
      if(score +1 ==10){
        alert('Felicidades has completado el juego')
        router.reload()
      }
      setWasteItems(getRandomItems)
    } else {
      alert('Incorrecto')
      setFallos(fallos + 1);
    }
    setSelectedCategory(null);
    setSelectedWasteItem(null)
  };

  return (
    <div className='playa'>
      <audio src="background.mp3" autoPlay="autoplay" loop="loop"></audio>
      <h1 className='title'>Clasifica los residuos y gana</h1>
      <h4 className='score'>Tus Puntos: {score}</h4>
      <h4 className='fallos'>Fallos: {fallos}</h4>
      {fallos < 3 ?
        <div>
          <div className="waste-items-container">
            {wasteItems ? 
            wasteItems.map(wasteItem => (
              <div
                key={wasteItem.id}
                id={wasteItem.id}
                className="waste-item"
                onClick={() => handleWasteItemClick(wasteItem)}
              >
                <img src={wasteItem.image} alt={wasteItem.type} width="65%" height="250px" />
              </div>
            )):null}
          </div>
          {selectedWasteItem ? (
            <div className="modal-overlay">
              <div className="modal">
                <h2>Has seleccionado:</h2>
                <img src={selectedWasteItem.image} alt={selectedWasteItem.type} width="100%" height="300px" />
                <p>Tipo: {selectedWasteItem.type}</p>
                <h2>Selecciona la categoría:</h2>
                <div className='categories-list'>
                  <button className='category-item plastico' onClick={() => handleCategoryClick('plastic')}>
                    Plástico
                  </button>
                  <button className='category-item papel' onClick={() => handleCategoryClick('paper')}>
                    Papel
                  </button>
                  <button className='category-item vidrio' onClick={() => handleCategoryClick('glass')}>
                    Vidrio
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div> :
        <div>
          <div className="waste-items-container">
          </div>
          <div className="modal-overlay" style={{ "heigth": "100%" }}>
              <div className="modal" style={{ "width": "30%", "height": "40%" }}>
                <h3>Has fallado {fallos} veces :C </h3>
                <button className='reiniciar'  onClick={() => { router.reload() }}>Reiniciar</button>
              </div>
            </div>
        </div>
      }
    </div>

  );
};

export default Home;
