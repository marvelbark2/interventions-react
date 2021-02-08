import React from 'react';
import logo from '../../assets/img/logo.jpg';
import { DoorOpen } from 'react-bootstrap-icons';
import { Row, Col, Button, Card, Image } from 'react-bootstrap';

function Navbar({ title }) {
    return (
        <Card bg="light">
            <Card.Body>
                <Row>
                    <Col md={5}>
                        <Button variant="light" className="text-primary">{title}</Button>
                    </Col>
                    <Col md={{ span: 5, offset: 2 }}>
                        <Button variant="light" size="sm" className="mr-3">
                            <Image src={logo} alt="logo" width="40" />
                        </Button>
                        <span className="font-weight-bold mr-3">Bonjour John !</span>{' '}
                        <Button variant="primary" className="mr-3">{`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}</Button>
                        <Button variant="light"><DoorOpen /></Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Navbar
