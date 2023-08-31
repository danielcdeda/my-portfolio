import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    const [activeLink, setActiveLink] = useState("")
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect( () => {
        const onScroll = () => {
            window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false)
        }
        
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={isScrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={''} alt='' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#habilidades" className={activeLink === "habilidades" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('habilidades')}>Habilidades</Nav.Link>
                <Nav.Link href="#projetos" className={activeLink === "projetos" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projetos')}>Projetos</Nav.Link>
            </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='#'><img src={''} alt=''></img></a>
                        <a href='#'><img src={''} alt=''></img></a>
                    </div>
                </span>
                <button onClick={() => {alert("working!")}}><span>Entre em contato!</span></button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Header;