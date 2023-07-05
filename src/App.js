import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Inicio from './inicio';
import SobreNosotros from './sobreNosotros';
import Contacto from './contacto';

function App() {
  return (
        <div>
            <Routes>
              <Route path='/' element={<Inicio/>}/>
              <Route path='sobre-nosotros' element={<SobreNosotros/>}/>
              <Route path='contacto' element={<Contacto />}/>
            </Routes>
        </div>
  );
}

export default App;
