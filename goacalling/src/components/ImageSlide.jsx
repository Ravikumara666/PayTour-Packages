import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you import Bootstrap CSS

export default function ImageSlide() {
  const images = [
    {
      url: "https://www.thomascook.in/images/home-page-banners/2024/may/spiritual-Wb-banner-rev-1920-545.jpg",
      title: "India's highest waterfall - Jog Falls, Karnataka",
      description: "First slide label",
    },
    {
      url: "https://www.thomascook.in/images/home-page-banners/2023/nov/Australia-banner-1920-545-Rev.jpg",
      title: "Australia",
      description: "Second slide label - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      url: "https://www.thomascook.in/images/home-page-banners/2024/may/honeymoon-Wb-banner-Rev-1920x545.jpg",
      title: "Honeymoon",
      description: "Third slide label - Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
  ];

  const imageStyle = {
    height: '545px',
    objectFit: 'cover',
  };

  return (
    <div>
      <Carousel data-bs-theme="dark">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.url}
              alt={image.title}
              style={imageStyle}
            />
            <Carousel.Caption>
          <h3>{image.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}