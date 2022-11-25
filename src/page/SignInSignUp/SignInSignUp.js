import React, {useState} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import BasicModal from '../../components/Modal/BasicModal';
import SignUpForm from '../../components/Modal/BasicModal/SignUpForm';
import LogoWhite from '../../assets/logo-white.png';
import Logo from '../../assets/logo.png';

import './SignInSignUp.scss';

export default function SignInSignUp() {
    const [showModal, setShowModal] = useState(false)
    const [contentModal, setContentModal] = useState(null)

    const openModal = content => {
        setShowModal(true);
        setContentModal(content);
    }
    
  return (
    <>
    <Container className='signin-signup' fluid>
        <Row>
            <LeftComponent/>
            <RightComponent
                openModal = {openModal}
                setShowModal = {setShowModal}
            />
        </Row>
    </Container>
    <BasicModal show = {showModal} setShow = {setShowModal} >
        {contentModal}
    </BasicModal>
    </>
  );
}

function LeftComponent() {
    return(
        <Col className='signin-signup__left' xs={6}>
            <img src={Logo} alt = 'LogoTw'/>
            <div>
            <h2><ion-icon name="search-sharp"></ion-icon>Sigue lo que te interesa</h2>
            <h2><ion-icon name="people-outline"></ion-icon>Enterate de que esta hablando la gente</h2>
            <h2><ion-icon name="chatbubbles-outline"></ion-icon>Unete a la conversacion</h2>
            </div>
        </Col>
    );
}
function RightComponent(props) {
    const {openModal, setShowModal} = props
    return(
        <Col className='signin-signup__right' xs={6}>
        <div>
        <img src={LogoWhite} alt = 'LogoWhite'/>
            <h2>Mira lo que esta pasando en el mundo en este momento</h2>
            <h3>Unete a la nueva red social hoy mismo</h3>
            <Button variant='primary' onClick={() => openModal(<SignUpForm setShowModal = {setShowModal}/>)}>
                Registrate
            </Button>
            <Button variant='outline-primary' onClick={() => openModal(<h2>Formulario de Login</h2>)}>
                Iniciar Sesion
            </Button>
        </div>
    </Col>
    );
}
