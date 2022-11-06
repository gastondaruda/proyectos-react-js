import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ColorSchemesExample from "./Components/Bootsrap/NavbarBootsTrap";
import MainSection from './Components/MainSection';
import Calculadora from './Components/Calculadora/Calculadora';
import ListaDeTareas from './Components/Lista de tareas/List';
import RandomQuote from './Components/RandomQuote/RandomQuote';
import WeatherApi from './Components/WeatherApi/Weather';
import './App.css';


function App() {
  return (
        <>
        <BrowserRouter>
          <ColorSchemesExample />
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/Calculadora" element={<Calculadora /> }/>
            <Route path="/ListaDeTareas" element={<ListaDeTareas /> }/>
            <Route path="/RandomQuote" element={<RandomQuote /> }/>
            <Route path="/weatherApi" element={<WeatherApi /> }/>
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
        </>
  );
}

export default App;
