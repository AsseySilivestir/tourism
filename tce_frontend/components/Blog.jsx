import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

/**
 * Blog section component displaying travel tips and stories
 */
const Blog = () => {
  // Blog posts data array for easier management
  const blogPosts = [
    {
      id: 1,
      title: "Best Time to Visit Tanzania for Safari",
      excerpt: "Planning your Tanzanian safari? Learn about the different seasons and when to visit for the best wildlife viewing opportunities.",
      date: "June 15, 2023",
      author: "Admin",
      image: "https://picsum.photos/seed/blog-best-time/400/200.jpg"
    },
    {
      id: 2,
      title: "Essential Packing List for Your Tanzania Safari",
      excerpt: "Wondering what to pack for your Tanzanian adventure? Check out our comprehensive packing guide to ensure you're prepared for everything.",
      date: "May 28, 2023",
      author: "Admin",
      image: "https://picsum.photos/seed/blog-packing/400/200.jpg"
    },
    {
      id: 3,
      title: "Authentic Cultural Experiences in Tanzania",
      excerpt: "Discover the rich cultural heritage of Tanzania through these immersive experiences that connect you with local communities and traditions.",
      date: "May 10, 2023",
      author: "Admin",
      image: "https://picsum.photos/seed/blog-cultural/400/200.jpg"
    }
  ];

  return (
    <section id="blog" className="section-padding">
      <Container>
        <div className="text-center mb-5">
          <h2>Travel Blog</h2>
          <p className="lead">Travel tips and stories from Tanzania</p>
        </div>
        <Row>
          {blogPosts.map(post => (
            <Col lg={4} md={6} key={post.id} className="mb-4">
              <Card className="blog-card h-100 shadow-sm">
                <Card.Img variant="top" src={post.image} className="blog-card-img" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h3">{post.title}</Card.Title>
                  <div className="blog-meta text-muted mb-3">
                    Posted on {post.date} by {post.author}
                  </div>
                  <Card.Text>{post.excerpt}</Card.Text>
                  <div className="mt-auto">
                    <Button variant="outline-primary" href="#" className="read-more-btn">
                      Read More
                    </Button>
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

export default Blog;