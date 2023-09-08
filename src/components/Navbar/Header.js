import { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/logo-2.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';
import '../Navbar/index.css'


function Header() {
    const [activeLink, setActiveLink] = useState('home')
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
    <Router>
    <Navbar expand="lg" className={isScrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img className="image-logo" src={logo} alt='Logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home" className={`${activeLink === "home" ? "active navbar-link" : "navbar-link"} ml-auto`} onClick={() => onUpdateActiveLink("home")}> Home </Nav.Link>
                <Nav.Link href="#habilidades" className={`${activeLink === "habilidades" ? 'active navbar-link' : 'navbar-link'} ml-auto`} onClick={() => onUpdateActiveLink('habilidades')}>Habilidades</Nav.Link>
                <Nav.Link href="#projetos" className={`${activeLink === "projetos" ? 'active navbar-link' : 'navbar-link'} ml-auto`} onClick={() => onUpdateActiveLink('projetos')}>Projetos</Nav.Link>
            </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/daniel-d%C3%A9da/'><img className='ml-auto' src={navIcon1} alt='' /></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://github.com/danielcdeda' ><img className='github ml-auto' src={navIcon2} alt='' /></a>
                    </div>
                    <HashLink to='#connect'>
                    <button className='buttonConnect'><span>Entre em contato!</span></button>
                    </HashLink>
                </span>
                
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </Router>
  );
}

export default Header;