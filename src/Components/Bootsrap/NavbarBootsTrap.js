import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from "../../imagenes/react.png";

function ColorSchemesExample() {

const proyectos = [
    {to: "/Calculadora", navItem: "Calculadora"},
    {to: "/ListaDeTareas", navItem: "Lista de tareas"},
    {to:"/RandomQuote", navItem: "Random Quote"},
    {to: "/weatherApi", navItem: "Weather Api"}
]
    const proyectosHtml = (val) => {
        return(
                <Link to={val.to}>
                    <li className="navItemList">{val.navItem}</li>
                </Link>
        )
    }

return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Proyectos con React Js</Navbar.Brand>
            <Nav className="me-auto">
                {proyectos.map(prod => proyectosHtml(prod))}
            </Nav>
            </Container>
        </Navbar>
    </>
);
}

export default ColorSchemesExample;