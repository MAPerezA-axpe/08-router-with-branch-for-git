import { Link } from '../Link.jsx'

export default function HomePage () {
    return (
      <>
        <h1>HOME</h1>
        <p>Esta es la página para crear un React Router desde cero</p>
        <Link to='/about'>Ir a Sobre nosotros</Link>
      </>
    )
  }