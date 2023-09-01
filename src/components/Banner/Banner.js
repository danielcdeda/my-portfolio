import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import BannerImg from '../../assets/img/menino-note-final.png'
import { useState } from "react"


function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false); 


    const toRotate = ["Desenvolvedor Front-end", "UI/UX Designer"]

    return (
        <section className="banner" id="home">
            <Container className="align-items-center">
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bem vindo ao meu site</span>
                        <h1>{'Olá, eu sou um desenvolvedor Front-End!'}<span>UI/UX Design</span></h1>
                        <p></p>
                        <button onClick={() => console.log('connect')}>Fale comigo! <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col cs={12} md={6} xl={5}>
                        <img src={BannerImg} alt="Banner-img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}











export default Banner