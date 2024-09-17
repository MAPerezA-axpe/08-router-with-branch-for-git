import { Link } from '../Link.jsx'

//Para la internacionalización y uso de otro idioma
const i18n = {
    es: {
        title: 'Sobre nosotros',
        description: '¡Hola! Soy Miguel Ángel y esto es un clon de react router',
        homeLink: 'Ir a la página principal'
    },
    en: {
        title: 'About us',
        description: 'Hello! I\'m Miguel Ángel and this is a react router clone',
        homeLink: 'Go to the main page'
    }
}

//Custom Hook que puede y debe hacerse separado
const useI18n = (lang) => {
    return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
    const i18n = useI18n(routeParams.lang ?? 'es')
    return (
      <>
        <h1>{i18n.title}</h1>
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJd5EPOWibW59EuALDpuzpnCRLhHfDp0udw&s' alt='Foto de perfil de Miguel Ángel' />
          <p>{i18n.description}</p>
        </div>
        <Link to='/'>{i18n.homeLink}</Link>
      </>
    )
}