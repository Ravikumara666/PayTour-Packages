// src/components/AboutUs.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/AboutUs.css'; // Ensure this CSS file is properly imported
import Header from '../components/Header';


export default function AboutUs() {
    return (
        <>
            <Header/>
            <div className="about-container mt-5">
                <h2>About Us</h2>

                <section>
                    <h3>Who We Are</h3>
                    <p>
                        Welcome to GoaCalling, your go-to solution for planning the perfect vacation. 
                        We are a dedicated team of travel enthusiasts and experts committed to making your travel dreams a reality. 
                        With years of experience in the travel industry, we understand what it takes to create a memorable and hassle-free travel experience.
                    </p>
                </section>

                <section>
                    <h3>Our Mission</h3>
                    <p>
                        Our mission is to provide exceptional travel packages that cater to all kinds of travelers. 
                        Whether you are looking for a relaxing getaway, an adventurous journey, or a cultural immersion, we have the perfect package for you. 
                        We strive to offer the best value for your money, ensuring you get the most out of your travel experiences.
                    </p>
                </section>

                <section>
                    <h3>What We Offer</h3>
                    <ul>
                        <li><strong>Diverse Travel Packages:</strong> Choose from our wide range of travel packages, including standard, deluxe, and premium options. Each package is designed to offer unique experiences and cater to different budgets and preferences.</li>
                        <li><strong>Easy Booking Process:</strong> Our user-friendly booking system makes it easy to plan and book your trip. Simply fill in your details, select your package, and let us handle the rest.</li>
                        <li><strong>Customized Itineraries:</strong> We understand that every traveler is unique. That’s why we offer customizable itineraries to ensure your trip is tailored to your specific needs and interests.</li>
                        <li><strong>Transparent Pricing:</strong> No hidden fees or surprises. Our pricing is transparent, and we provide a detailed breakdown of costs upfront. Use our price calculator to estimate your total travel cost before booking.</li>
                    </ul>
                </section>

                <section>
                    <h3>Why Choose Us</h3>
                    <ul>
                        <li><strong>Expertise and Experience:</strong> Our team consists of seasoned travel professionals who are passionate about exploring the world. We use our expertise to curate the best travel experiences for you.</li>
                        <li><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority. We go the extra mile to ensure that your travel experience is smooth and enjoyable from start to finish.</li>
                        <li><strong>Support and Assistance:</strong> We offer 24/7 customer support to assist you with any questions or concerns you may have before, during, and after your trip.</li>
                    </ul>
                </section>

                <section>
                    <h3>Our Promise</h3>
                    <p>
                        At GoaCalling, we believe in creating unforgettable travel experiences. 
                        From the moment you book with us to the time you return home, we are dedicated to making every aspect of your trip exceptional. 
                        Trust us to be your travel partner and embark on a journey of a lifetime.
                    </p>
                </section>

                <section>
                    <h3>Get In Touch</h3>
                    <p>
                        Have questions or need assistance? Feel free to contact us at . 
                        Follow us on social media to stay updated on our latest offers and travel inspiration.
                    </p>
                    <p>Thank you for choosing GoaCalling. We look forward to helping you explore the world!</p>
                </section>
            </div>
        </>
    );
}
