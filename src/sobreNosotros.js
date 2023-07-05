import { Link } from "react-router-dom";

const SobreNosotros=()=>{
 return (
    <div>
       <h1>Sobre nosotros</h1>
       <Link to="/contacto">Contactenos</Link>
       <Link to="/"><h3>Principal</h3></Link>
    </div>
 )

}

export default SobreNosotros;