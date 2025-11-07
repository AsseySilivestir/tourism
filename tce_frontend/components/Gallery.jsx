import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * Gallery section component displaying images from tours
 */
const Gallery = () => {
  // Gallery images data for easier management
  const galleryImages = [
    { id: 1, alt: "Lion in Serengeti", src: "https://picsum.photos/seed/wildlife-lion/400/250.jpg" },
    { id: 2, alt: "Elephant Family", src: "https://picsum.photos/seed/elephant-family/400/250.jpg" },
    { id: 3, alt: "Safari Sunset", src: "https://picsum.photos/seed/sunset-safari/400/250.jpg" },
    { id: 4, alt: "Maasai Dance", src: "https://picsum.photos/seed/maasai-dance/400/250.jpg" },
    { id: 5, alt: "Giraffe Safari", src: "https://picsum.photos/seed/giraffe-safari/400/250.jpg" },
    { id: 6, alt: "Kilimanjaro Summit", src: "https://picsum.photos/seed/kilimanjaro-summit/400/250.jpg" },
    { id: 7, alt: "Zanzibar Beach", src: "https://picsum.photos/seed/zanzibar-beach/400/250.jpg" },
    { id: 8, alt: "Happy Tourists", src: "https://picsum.photos/seed/happy-tourists/400/250.jpg" },
    { id: 9, alt: "Cultural Village", src: "https://picsum.photos/seed/cultural-village/400/250.jpg" }
  ];

  return (
    <section id="gallery" className="section-padding">
      <Container>
        <div className="text-center mb-5">
          <h2>Gallery</h2>
          <p className="lead">Glimpses of unforgettable Tanzanian adventures</p>
        </div>
        <Row>
          {galleryImages.map(image => (
            <Col lg={4} md={6} key={image.id} className="mb-4">
              <div className="gallery-item overflow-hidden rounded shadow-sm">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="img-fluid gallery-img" 
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;