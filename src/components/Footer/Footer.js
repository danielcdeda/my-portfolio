import { Container, Row, Col } from "react-bootstrap";
import Logo from '../../assets/img/logo-2.png'
import "./footer.css"
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={Logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/daniel-d%C3%A9da/'><img src={navIcon1} alt='' /></a>
                            <a target="_blank" rel="noopener noreferrer" href='https://github.com/danielcdeda' ><img className='github' src={navIcon2} alt='' /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}


export default Footer;