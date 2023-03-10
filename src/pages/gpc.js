import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
let kg = 0;
let personas = 1;


const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(e.target)
  const formData = new FormData(e.target)
  let newKg = parseInt(formData.get('kg'))
  kg+= newKg
  console.log({kg:formData.get('kg')})
  calcularGPC()
}

const guardarPersonas = (e) =>{
  e.preventDefault();
  console.log(e.target)
  const formData = new FormData(e.target)
  personas = formData.get('personas')
  
}

const calcularGPC = () =>{
  const gpc = kg / personas;
  console.log('El gpc es :')
  console.log({gpc:gpc})
}


export default function Gpc() {
  return (
    <div className='playa'>
      <Head>
        <title>GPC CALC</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Bienvenido Usuarios</h1>
        <p>Tu gpc es de: 20 </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor='kg' style={{"color":"white"}}>Ingresa un nuevo desecho</label>
          <input name="kg" placeholder='kg' type="number" />
          <button type='submit'> Agregar</button>
        </form>

        <form onSubmit={guardarPersonas}>
          <h2>Vamos a calcular del GPC de tu vivienda</h2>
          <label htmlFor='personas' style={{"color":"white"}}>Cuantas personas viven contigo?</label>
          <input name="personas" placeholder='personas' type="number" />
          <button type='submit'> Guardar</button>
        </form>
        
      </main>
    </div>
  )
}
