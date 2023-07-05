import { Link } from "react-router-dom";

export default function Inicio(){
 
    return (
        <div>
            <h1>Pagina de inicio</h1>
            <Link to="sobre-nosotros"><h3>Acerca de nosotros</h3></Link>
            <Link to="contacto">Contactenos</Link>
        </div>
       
    );

}