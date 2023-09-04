import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import './projects.css'
import imagemProj1 from "../../assets/img/project-img1.png"


function Projects() {
    const projetos = [{
        title:'Keeper App',
        content:'Site feito para armazenar relens',
    },    
    {
        title: '',
        content:'',
    },
    {
        title: '',
        content:'',
    },
    {
        title: '',
        content:'',
    },
] 
    

    return (
    <section className="projetos" id='projetos'>
        <Container>
            <Row>
                <Col>
                    <div className="projetos-box">
                        <h2 className="titulo-projetos">Projetos</h2>
                        <p className="texto-projetos">Projetos realizados com as tecnologias que utilizo para desenvolver os meus sites.</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey="first">
                        <Nav justify variant="tabs" defaultActiveKey="/home" className="tabs">
                            <Nav.Item>
                                <Nav.Link eventKey="first" className="personalizar-tab">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" className="personalizar-tab">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" className="personalizar-tab">Tab 3</Nav.Link>
                            </Nav.Item>
                            </Nav>
                        </Tab.Container>
                        <Tab.Content>
                            <Tab.Pane eventKey='first' className="tab-pane active">
                                <div className="container-projeto">
                                    <img src={imagemProj1} />
                                    <h3>
                                        ASDASDasdASD
                                    </h3>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                                <div className="container-projeto">
                                    <img src={imagemProj1} />
                                    <h3>
                                        
                                    </h3>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                                <div className="container-projeto">
                                    <img src={imagemProj1} />
                                    <h3>
                                        
                                    </h3>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)
}

export default Projects;