import { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/logo.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
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
                <Nav.Link href="#home" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#habilidades" className={activeLink === "habilidades" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('habilidades')}>Habilidades</Nav.Link>
                <Nav.Link href="#projetos" className={activeLink === "projetos" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projetos')}>Projetos</Nav.Link>
            </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='#'><img src={navIcon1} alt='' /></a>
                        <a href='#'><img src={navIcon2} alt='' /></a>
                        <a href='#'><img src={navIcon3} alt='' /></a>
                    </div>
                    <button className='buttonConnect' onClick={() => {console.log("working!")}}><span>Entre em contato!</span></button>
                </span>
                
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Header;