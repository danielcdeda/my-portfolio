import './contact.css'
import { useState } from "react";
import {Container, Row, Col} from 'react-bootstrap'
import imagemContato from "../../assets/img/Contato-img2.png"


function Contact () {
    const formInitialDetails = {
        firstName: '',
        lastfirstName: '',
        email: '',
        phone: '',
        message:'',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Enviar');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value ) => {
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Enviando...');
        let response = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Enviado!");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ sucess: true, message: "Mensagem enviada com sucesso!"})
        } else {
            setStatus({ sucess: false, message: 'Algo deu errado, tente novamente mais tarde.'})
        }
    }

    return (
        <section id="connect" className="contact">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <img src={imagemContato} alt="Entre em contato!"/>
                    </Col>
                    <Col size={12} md={6}>
                        <h2>Entre em contato!</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="Primeiro Nome" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastfirstName} placeholder="Sobrenome" onChange={(e) => onFormUpdate('lastfirstName', e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col  size={12} sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Telefone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col size={12}>
                                    <textarea row="6" value={formDetails.message} placeholder="Mensagem" onChange={(e) => onFormUpdate('message', e.target.value)}/>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                            {
                                status.message && 
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;