import { Link } from "../Link"

export default function Error404 () {
    return (
        <>
            <div>
            <h1>Esto NO está bien</h1>
                <img src='https://midu.dev/images/this-is-fine-404.gif' alt='Gif del perro de This is Fine quemándose vivo' />
            </div>
            <Link to='/'>Volver a la página principal</Link>
        </>
    )
}