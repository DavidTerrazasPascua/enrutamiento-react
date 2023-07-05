import { Link } from "react-router-dom";
export default function Contacto(){

    return (
        <div>
            <h1>Pagina de contacto</h1>
            <Link to="/sobre-nosotros">Acerca de nosotros</Link>
            <Link to="/"><h3>Principal</h3></Link>
        </div>
    );
}