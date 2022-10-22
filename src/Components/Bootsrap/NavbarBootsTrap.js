import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from "../../imagenes/react.png";

function ColorSchemesExample() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Proyectos con React Js</Navbar.Brand>
            <Nav className="me-auto">
            <Link to="/Calculadora">
                        <li className="navItemList">Calculadora</li>
                    </Link>
                    <Link to="/weatherApi">
                        <li className="navItemList">Weather Api</li>
                    </Link>
                    <Link to="/Sustentabilidad">
                        <li className="navItemList">Proyecto 3</li>
                    </Link>
                    <Link to="/Inversores">
                        <li className="navItemList">Proyecto 4</li>
                    </Link>
                    <Link to="/Rrhh">
                        <li className="navItemList">Proyecto 5</li>
                    </Link>
                
            </Nav>
            </Container>
        </Navbar>

    </>
);
}

export default ColorSchemesExample;