import { Container, Row, Col, Card } from 'react-bootstrap';

const PopularProducts = () => {
  const popularProducts = [
    {
      id: 1,
      title: "Producto 1",
      price: "$99.99",
      image: "/product1.jpg"
    },
    {
      id: 2,
      title: "Producto 2",
      price: "$149.99",
      image: "/product2.jpg"
    },
    {
      id: 3,
      title: "Producto 3",
      price: "$199.99",
      image: "/product3.jpg"
    },
    {
      id: 4,
      title: "Producto 4",
      price: "$79.99",
      image: "/product4.jpg"
    }
  ];

  return (
    <Container className="mb-5">
      <h2 className="mb-4">Productos Populares</h2>
      <Row>
        {popularProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={3}>
            <Card className="mb-4 h-100">
              <Card.Img 
                variant="top" 
                src={product.image} 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularProducts;