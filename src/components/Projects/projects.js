import { Container, Row, Col, Nav, Tab, Tabs } from "react-bootstrap";
import './projects.css'
import imagemProj1 from "../../assets/img/Imagem_Projeto1 (2).png"
import imagemProj2 from "../../assets/img/Imagem-Projeto2.png"
import imagemProj3 from "../../assets/img/Imagem-Projeto3.png"
import imagemProj4 from "../../assets/img/Imagem-Projeto4.png"
import imagemProj5 from "../../assets/img/Imagem-Projeto5.png"
import imagemProj6 from "../../assets/img/Imagem-Projeto6.png"
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
        title: 'Submit Form',
        content:'Projeto prático para utilização de funções básicas do React como UseState em formulários.',
        tecnologia: 'Tecnologias utilizadas: React, CSS, HTML.'
    },
    {
        title: 'Jump, Peter!',
        content:'Jogo para navegador com animações simples.',
        tecnologia: 'Tecnologias utilizadas: JavaScript, CSS, HTML.'
    },
    {
        title: 'Jogo da memória',
        content:'Jogo para navegador com o mesmo funcionamento de um jogo da memória',
        tecnologia: 'Tecnologias utilizadas: JavaScript, CSS, HTML.'
    },
    {
        title: 'Drum Kit',
        content:'Simulação de um kit de bateria',
        tecnologia: 'Tecnologias utilizadas: Javascript, CSS, HTML.'
    },
] 
    

    return (
    <section className="projetos" id='projetos'>
        <Container>
            <Row>
                <Col>
                    <div className="projetos-box">
                        <h2 className="titulo-projetos">Projetos</h2>
                        <p className="texto-projetos">Alguns dos projetos realizados com as tecnologias que utilizo para desenvolver os meus sites.</p>
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
                                <Tab.Pane eventKey='first'>
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
                                <div className="container-projeto2">
                                    <div className="imagem2">
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
                                </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                <div className="container-projeto1">
                                    <div className="imagem">
                                        <img src={imagemProj3} className="imagensProj" />
                                    </div>
                                    <div className="texto">
                                        <h3 className="itemh3" >{projetos[2].title}</h3>
                                        <div className="gradient" />
                                        <p>{projetos[2].content}</p>
                                        <p>{projetos[2].tecnologia}</p>
                                        <div className="iconCode">
                                        <a target="_blank" href="https://codesandbox.io/s/changing-complex-state-practice-forked-k3yt3q"><img  src={iconCode}/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-projeto2">
                                    <div className="imagem2">
                                        <img src={imagemProj4} className="imagensProj" />
                                    </div>
                                    <div className="texto texto2">
                                        <h3 className="itemh3" >{projetos[3].title}</h3>
                                        <div className="gradient" />
                                        <p> {projetos[3].content}</p>
                                        
                                        <p>{projetos[3].tecnologia}</p>
                                        <div className="iconCode">
                                        <a target="_blank" href="https://github.com/danielcdeda/Mario-Game"><img  src={iconCode} /></a>
                                        </div>
                                    </div>
                                </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                <div className="container-projeto1">
                                    <div className="imagem">
                                        <img src={imagemProj5} className="imagensProj" />
                                    </div>
                                    <div className="texto">
                                        <h3 className="itemh3" >{projetos[4].title}</h3>
                                        <div className="gradient" />
                                        <p>{projetos[4].content}</p>
                                        <p>{projetos[4].tecnologia}</p>
                                        <div className="iconCode">
                                        <a target="_blank" href="https://codesandbox.io/s/using-pre-built-react-components-forked-hc9l5w"><img  src={iconCode}/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-projeto2">
                                    <div className="imagem2">
                                        <img src={imagemProj6} className="imagensProj" />
                                    </div>
                                    <div className="texto texto2">
                                        <h3 className="itemh3" >{projetos[5].title}</h3>
                                        <div className="gradient" />
                                        <p> {projetos[5].content}</p>
                                        
                                        <p>{projetos[5].tecnologia}</p>
                                        <div className="iconCode">
                                        <a target="_blank" href="https://codesandbox.io/s/es6-spread-operator-practice-forked-zs99yl"><img  src={iconCode} /></a>
                                        </div>
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