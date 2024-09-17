import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
  window.history.pushState({}, '', href)
  //Creamos un evento personalizado para avisar de que hemos cambiado la URL
  const navigationEvent = new Event('pushstate')
  window.dispatchEvent(navigationEvent)
}

function HomePage () {
  return (
    <>
      <h1>HOME</h1>
      <p>Esta es la página para crear un React Router desde cero</p>
      <button onClick={() => navigate('/about')}>Ir a Sobre nosotros</button>
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
      <button onClick={() => navigate('/')}>Ir a la página principal</button>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
    }
  }, []) //El useEffect solo debe ejecutarse la primera vez

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
