import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-grow p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a Mi Sitio Web</h1>
          <p>Este es un sitio web simple creado con React.</p>
        </main>
      </div>
    </>
  );
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a Mi Sitio Web</h1>
          <p>Este es un sitio web simple creado con React.</p>
        </main>
      </div>
    </>
  );
}

export default App
