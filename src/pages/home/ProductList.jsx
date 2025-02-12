import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';

const ProductList = () => {
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Producto ${i + 1}`,
    price: `$${Math.floor(Math.random() * 200) + 50}.99`,
    image: `/product${i + 1}.jpg`
  }));

  return (
    <Container className="mb-5">
      <h2 className="mb-4">Todos los Productos</h2>
      <Row>
        {products.map((product) => (
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
      
      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </Container>
  );
};

export default ProductList;