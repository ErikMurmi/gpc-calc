const papel = [
    { id: 1, type: 'paper', category: 'paper', image: 'imgs/paper.png' },
    { id: 2, type: 'paper', category: 'paper', image: 'imgs/papel2.png' },
    { id: 3, type: 'paper', category: 'paper', image: 'imgs/papel3.png' },
    { id: 4, type: 'paper', category: 'paper', image: 'imgs/papel4.png' }
]

const plastico = [
    { id: 5, type: 'plastic', category: 'plastic', image: 'imgs/plastic.png' },
    { id: 6, type: 'plastic', category: 'plastic', image: 'imgs/plastic2.png' },
    { id: 7, type: 'plastic', category: 'plastic', image: 'imgs/plastic3.png' },
    { id: 8, type: 'plastic', category: 'plastic', image: 'imgs/plastic4.png' },
]

const vidrio = [
    { id: 9, type: 'glass', category: 'glass', image: "imgs/glass.png" },
    { id: 10, type: 'glass', category: 'glass', image: "imgs/vidrio2.png" },
    { id: 11, type: 'glass', category: 'glass', image: "imgs/vidrio3.png" },
    { id: 12, type: 'glass', category: 'glass', image: "imgs/vidrio4.png" }
]

export function getRandomItems(){
    const papel_item  = papel[Math.floor(Math.random()*papel.length)];
    const plastic_item  = plastico[Math.floor(Math.random()*plastico.length)];
    const vidrio_item  = vidrio[Math.floor(Math.random()*vidrio.length)];
    let wastedItems = [papel_item,plastic_item,vidrio_item];
    wastedItems = shuffleArray(wastedItems);
    return wastedItems
}


function shuffleArray(inputArray){
    return inputArray.sort(()=> Math.random() - 0.5);
}