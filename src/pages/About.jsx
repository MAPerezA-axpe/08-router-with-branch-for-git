import { Link } from '../Link.jsx'

export default function AboutPage () {
    return (
      <>
        <h1>ABOUT</h1>
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJd5EPOWibW59EuALDpuzpnCRLhHfDp0udw&s' alt='Foto de perfil de Miguel Ángel' />
          <p>¡Hola! Soy Miguel Ángel y esto es un clon de react router</p>
        </div>
        <Link to='/'>Ir a la página principal</Link>
      </>
    )
}