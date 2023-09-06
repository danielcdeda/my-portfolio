import { useState } from "react";
import {Container, Row, Col} from 'react-bootstrap'

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

    const handleSubmit = () => {

    }

    return (
        <section id="contato" classfirstName="connect">
            <Container>
                <Row classfirstName="align-items-center">
                    <Col md={6}>
                        <img src={''} alt="Entre em contato!"/>
                    </Col>
                    <Col md={6}>
                        <h2>Entre em contato</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} classfirstName="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="Primeiro Nome" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} classfirstName="px-1">
                                    <input type="text" value={formDetails.lastfirstName} placeholder="Sobrenome" onChange={(e) => onFormUpdate('lastfirstName', e.target.value)} />
                                </Col>
                                <Col sm={6} classfirstName="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} classfirstName="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Telefone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder="Mensagem" onChange={(e) => onFormUpdate('message', e.target.value)}/>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                            {
                                status.message && 
                                <Col>
                                    <p classfirstName={status.success === false ? "danger" : "success"}>{status.message}</p>
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