import { Container, Row, Col, Nav, Tab, Tabs } from "react-bootstrap";
import './projects.css'
import imagemProj1 from "../../assets/img/Imagem_Projeto1 (2).png"
import imagemProj2 from "../../assets/img/Imagem-Projeto2.png"
import iconCode from "../../assets/img/icon-code.png"


function Projects() {
    const projetos = [{
        title:'Keeper App',
        content:' Aplicativo utilizado para salvar notas, ideias ou qualquer coisa que lhe for útil.',
        tecnologia: 'Tecnologias utilizadas: React, CSS, HTML.',
    },    
    {
        title: 'To do List',
        content:'Aplicativo para registrar seus afazeres diários.',
        tecnologia: 'Tecnologias utilizadas: React, CSS, HTML.'
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
                        <Tab.Content>
                            <div className="container-projetos">
                                <Tab.Pane eventKey='first' className="tab-pane active">
                                <div className="container-projeto1">
                                    <div className="imagem">
                                        <img src={imagemProj1} className="imagensProj" />
                                    </div>
                                    <div className="texto">
                                        <h3 className="itemh3" >{projetos[0].title}</h3>
                                        <div className="gradient" />
                                        <p>{projetos[0].content}</p>
                                        <p>{projetos[0].tecnologia}</p>
                                        <div className="iconCode">
                                        <a target="_blank" href="https://codesandbox.io/s/using-pre-built-react-components-forked-hc9l5w"><img  src={iconCode}/></a>
                                        </div>
                                    </div>
                                </div>
                                    <div className="imagem imagem2">
                                        <img src={imagemProj2} className="imagensProj" />
                                    </div>
                                    <div className="texto texto2">
                                        <h3 className="itemh3" >{projetos[1].title}</h3>
                                        <div className="gradient" />
                                        <p> {projetos[1].content}</p>
                                        
                                        <p>{projetos[1].tecnologia}</p>
                                        <div className="iconCode">
                                        <a target="_blank" href="https://codesandbox.io/s/es6-spread-operator-practice-forked-zs99yl"><img  src={iconCode} /></a>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </div>
                                <Tab.Pane eventKey='second'>
                                <div className="container-projeto2">
                                    <div className="imagem">
                                        <img src={imagemProj1} className="imagensProj" />
                                    </div>
                                    <div className="texto">
                                        <h3 className="itemh3" >{projetos[0].title}</h3>
                                        <div className="gradient" />
                                        <p>{projetos[0].content}</p>
                                        <p>{projetos[0].tecnologia}</p>
                                        <div className="iconCode">
                                        <a target="_blank" href="https://codesandbox.io/s/using-pre-built-react-components-forked-hc9l5w"><img  src={iconCode}/></a>
                                        </div>
                                    </div>
                                </div>
                                    <div className="imagem imagem2">
                                        <img src={imagemProj2} className="imagensProj" />
                                    </div>
                                    <div className="texto texto2">
                                        <h3 className="itemh3" >{projetos[1].title}</h3>
                                        <div className="gradient" />
                                        <p> {projetos[1].content}</p>
                                        
                                        <p>{projetos[1].tecnologia}</p>
                                        <div className="iconCode">
                                        <a target="_blank" href="https://codesandbox.io/s/es6-spread-operator-practice-forked-zs99yl"><img  src={iconCode} /></a>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                <div className="container-projeto1">
                                    <div className="imagem">
                                        <img src={imagemProj1} className="imagensProj" />
                                    </div>
                                    <div className="texto">
                                        <h3 className="itemh3" >{projetos[0].title}</h3>
                                        <div className="gradient" />
                                        <p>{projetos[0].content}</p>
                                        <p>{projetos[0].tecnologia}</p>
                                        <div className="iconCode">
                                        <a target="_blank" href="https://codesandbox.io/s/using-pre-built-react-components-forked-hc9l5w"><img  src={iconCode}/></a>
                                        </div>
                                    </div>
                                </div>
                                    <div className="imagem imagem2">
                                        <img src={imagemProj2} className="imagensProj" />
                                    </div>
                                    <div className="texto texto2">
                                        <h3 className="itemh3" >{projetos[1].title}</h3>
                                        <div className="gradient" />
                                        <p> {projetos[1].content}</p>
                                        
                                        <p>{projetos[1].tecnologia}</p>
                                        <div className="iconCode">
                                        <a target="_blank" href="https://codesandbox.io/s/es6-spread-operator-practice-forked-zs99yl"><img  src={iconCode} /></a>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            
                        </Tab.Content>
                    </Tab.Container>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)
}

export default Projects;