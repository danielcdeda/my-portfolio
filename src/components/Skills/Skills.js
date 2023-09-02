import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../../assets/img/meter1.png'
import meter2 from '../../assets/img/meter2.png'
import meter3 from '../../assets/img/meter3.png'
import './skills.css'
import gradient from '../../assets/img/Gradient.png'


function Skills () {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


      return (
      <section className="skill" id="habilidades">
        <Container>
            <Row>
                <Col>
                    <div className="skill-box">
                        <h2 className="stacks-title">Habilidades</h2>
                        <p>Algumas das ferramentas que aprendi a utilizar durante minha jornada como desenvolvedor web.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider custom-carousel-transition"> 
                            <div className="item">
                                <img src={meter3} alt="Image" className="imageMeter" /> 
                                <h5 className="Stacks">React</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" className="imageMeter" /> 
                                <h5 className="Stacks">Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" className="imageMeter" /> 
                                <h5 className="Stacks">NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image"  className="imageMeter" /> 
                                <h5 className="Stacks">CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" className="imageMeter"/> 
                                <h5 className="Stacks">HTML5</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        
      </section>
      )
}


export default Skills;