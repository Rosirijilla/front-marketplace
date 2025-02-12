import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Cart = () => {
  // Estado inicial para los productos del carrito
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Producto 1",
      price: 29.99,
      quantity: 1,
      image: "https://via.placeholder.com/100"
    },
    // Puedes agregar más productos aquí
  ]);

  // Función para actualizar cantidad
  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id && item.quantity + change > 0
          ? { ...item, quantity: item.quantity + change }
          : item
      )
    );
  };

  // Cálculos del carrito
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const discount = 0; // Puedes implementar lógica de descuentos aquí
  const total = subtotal + shipping - discount;

  return (
    <Container className="py-4">
      <h1 className="mb-4">Carrito 🛒</h1>
      
      <Row>
        {/* Lista de productos */}
        <Col md={8}>
          {cartItems.map(item => (
            <Card className="mb-3" key={item.id}>
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={3}>
                    <img src={item.image} alt={item.name} className="img-fluid" />
                  </Col>
                  <Col xs={9}>
                    <Row>
                      <Col md={6}>
                        <h5>{item.name}</h5>
                        <p className="text-muted">Precio: ${item.price}</p>
                      </Col>
                      <Col md={3}>
                        <div className="d-flex align-items-center">
                          <Button 
                            variant="outline-secondary" 
                            size="sm"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            -
                          </Button>
                          <span className="mx-2">{item.quantity}</span>
                          <Button 
                            variant="outline-secondary" 
                            size="sm"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            +
                          </Button>
                        </div>
                      </Col>
                      <Col md={3}>
                        <p className="fw-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>

        {/* Resumen del carrito */}
        <Col md={4}>
          <Card>
            <Card.Body>
              <h4 className="mb-3">Resumen del pedido</h4>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Envío:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="d-flex justify-content-between mb-2 text-success">
                  <span>Descuento:</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <hr />
              <div className="d-flex justify-content-between mb-3 fw-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button variant="primary" size="lg" className="w-100">
                Pagar
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
