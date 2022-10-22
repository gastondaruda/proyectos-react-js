import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import MainSection from './Components/MainSection';
import './App.css';
import Calculadora from './Components/Calculadora/Calculadora';
import WeatherApi from './Components/WeatherApi/Weather';


function App() {
  return (
        <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/Calculadora" element={<Calculadora /> }/>
            <Route path="/weatherApi" element={<WeatherApi /> }/>
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
        </>
  );
}

export default App;
