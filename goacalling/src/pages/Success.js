import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PaymentSuccess.css'; // Create this CSS file for any custom styles

export default function Success() {
    return (
        <div className="payment-success-container d-flex align-items-center justify-content-center vh-100 bg-light">
            <div className="card text-center shadow-lg p-5 bg-white rounded">
                <div className="card-body">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        fill="green"
                        className="bi bi-check-circle mb-4"
                        viewBox="0 0 16 16"
                    >
                        <path d="M15.854 4.854a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L8 12.293l7.146-7.147a.5.5 0 0 1 .708 0z"/>
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z"/>
                    </svg>
                    <h1 className="card-title text-success mb-4">Payment Successful!</h1>
                    <p className="card-text mb-4">
                        Thank you for your purchase. Your payment was processed successfully.
                    </p>
                    <Link to="/" className="btn btn-primary">Go to Home</Link>
                </div>
            </div>
        </div>
    );
}
