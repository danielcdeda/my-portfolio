import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import BannerImg from '../../assets/img/menino-note-final2.png'
import { useEffect, useState } from "react"
import './banner.css'


function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false); 
    const toRotate = ["Desenvolvedor Web", "UI/UX Designer"]
    const [text, setText] = useState('');
    const [typingTime, setTypingime] = useState(300 - Math.random * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval (() => {
            tick();
        }, typingTime)

        return () => { clearInterval(ticker)};
    } , [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1 );

        setText(updatedText);

        if (isDeleting) {
            setTypingime(prevTypingTime => prevTypingTime/2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setTypingime(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setTypingime(500);
        }

    }

    return (
        <section className="banner" id="home">
            <Container className="align-items-center">
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <h1 className="heading">{'Olá, eu sou Daniel! '}<span>{text}</span></h1>
                        <p>Meu trabalho é desenvolver sites que proporcionam uma ótima experiência para os usuários c: </p>
                        <button onClick={() => console.log('connect')}>Fale comigo! <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col cs={12} md={6} xl={5}>
                        <img src={BannerImg} alt="Banner-img" className="banner-img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}











export default Banner