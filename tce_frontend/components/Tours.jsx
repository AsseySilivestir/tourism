import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

/**
 * Tours section component displaying available tour packages
 */
const Tours = () => {
  // Tour data array for easier management and future updates
  const tourPackages = [
    {
      id: 1,
      title: "Serengeti Safari Adventure",
      description: "Experience the Great Migration and witness the Big Five in their natural habitat during this 5-day safari adventure.",
      price: "$1,299",
      image: "https://picsum.photos/seed/serengeti-safari/400/250.jpg"
    },
    {
      id: 2,
      title: "Mount Kilimanjaro Trek",
      description: "Conquer Africa's highest peak with our experienced guides. This 7-day trek takes you through diverse ecosystems to the summit.",
      price: "$1,899",
      image: "https://picsum.photos/seed/kilimanjaro-trek/400/250.jpg"
    },
    {
      id: 3,
      title: "Zanzibar Beach Holiday",
      description: "Relax on pristine beaches and explore the rich history of Stone Town on this 4-day island getaway.",
      price: "$799",
      image: "https://picsum.photos/seed/zanzibar-beach/400/250.jpg"
    },
    {
      id: 4,
      title: "Maasai Cultural Experience",
      description: "Immerse yourself in Maasai traditions during this 3-day cultural tour. Visit villages, learn traditional crafts, and enjoy authentic cuisine.",
      price: "$599",
      image: "https://picsum.photos/seed/maasai-cultural/400/250.jpg"
    },
    {
      id: 5,
      title: "Ngorongoro Crater Tour",
      description: "Explore the world's largest unbroken caldera on this 2-day safari. Home to dense wildlife populations and stunning landscapes.",
      price: "$899",
      image: "https://picsum.photos/seed/ngorongoro-crater/400/250.jpg"
    },
    {
      id: 6,
      title: "Tarangire National Park",
      description: "Discover the elephant paradise of Tanzania on this 3-day safari to Tarangire, known for its large elephant herds and baobab trees.",
      price: "$699",
      image: "https://picsum.photos/seed/tarangire-safari/400/250.jpg"
    }
  ];

  return (
    <section id="tours" className="section-padding">
      <Container>
        <div className="text-center mb-5">
          <h2>Our Tour Packages</h2>
          <p className="lead">Discover our carefully crafted safari and cultural experiences</p>
        </div>
        <Row>
          {tourPackages.map(tour => (
            <Col lg={4} md={6} key={tour.id} className="mb-4">
              <Card className="tour-card h-100 shadow-sm">
                <Card.Img variant="top" src={tour.image} className="tour-card-img" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h3">{tour.title}</Card.Title>
                  <Card.Text>{tour.description}</Card.Text>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="tour-price fs-4 fw-bold">{tour.price}</span>
                    <Link 
                      to="contact" 
                      spy={true} 
                      smooth={true} 
                      offset={-80} 
                      duration={500}
                      className="btn btn-primary"
                    >
                      Book Now
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Tours;