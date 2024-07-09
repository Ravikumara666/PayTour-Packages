import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Alert } from 'react-bootstrap';
//import './Cancel.css'; // Import the CSS file for styles

const Cancel = () => {
    const navigate = useNavigate();

    const handleRetry = () => {
        navigate('/');
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Alert variant="danger" className="text-center">
                        <h2>Payment Cancelled</h2>
                        <p>Your payment was cancelled. Please try again.</p>
                    </Alert>
                    <div className="text-center">
                        <Button 
                            variant="primary" 
                            onClick={handleRetry}
                            className="btn-lg mt-3 pulse-button"
                        >
                            Retry Payment
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Cancel;