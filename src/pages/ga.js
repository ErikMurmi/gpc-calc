import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter()

  return (
    <div className='playa'>
      <div className="waste-items-container">
        <h1>Es momento de empezar</h1>
      <button className='reiniciar' onClick={()=>{router.push('/game')}}>Vamos a jugar</button>
      </div>
    </div>
  );
};

