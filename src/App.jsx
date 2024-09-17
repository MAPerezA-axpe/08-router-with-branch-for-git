import { useState } from 'react'
import './App.css'

function HomePage () {
  return (
    <>
      <h1>HOME</h1>
      <p>Esta es la página para crear un React Router desde cero</p>
      <a href='/about'>Ir a Sobre nosotros</a>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>ABOUT</h1>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJd5EPOWibW59EuALDpuzpnCRLhHfDp0udw&s' alt='Foto de perfil de Miguel Ángel' />
        <p>¡Hola! Soy Miguel Ángel y esto es un clon de react router</p>
      </div>
      <a href='/'>Ir a la página principal</a>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <>
      <main>
        {currentPath === '/' && <HomePage />}
        {currentPath === '/about' && <AboutPage />}
      </main>
    </>
  )
}

export default App
