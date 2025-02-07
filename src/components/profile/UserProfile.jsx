import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [isSellerProfile, setIsSellerProfile] = useState(false);
  
  const userData = {
    name: "Juan Pérez",
    rut: "12.345.678-9",
    email: "juan.perez@email.com",
    phone: "+56 9 1234 5678",
    address: "Av. Principal 123, Santiago",
    profileImage: "/default-avatar.png"
  };

  return (
    <Container className="py-5">
      {/* Switch de Perfil */}
      <div className="position-absolute top-0 end-0 m-4">
        <Form.Check 
          type="switch"
          id="profile-switch"
          label={isSellerProfile ? "Perfil Vendedor" : "Perfil Comprador"}
          checked={isSellerProfile}
          onChange={() => setIsSellerProfile(!isSellerProfile)}
          className="profile-switch"
        />
      </div>

      {/* Información del Perfil */}
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <div className="position-relative mb-4">
            <Image 
              src={userData.profileImage} 
              roundedCircle 
              className="profile-image"
              width={150}
              height={150}
            />
          </div>
          
          <h2 className="mb-3">{userData.name}</h2>
          <p className="text-muted mb-4">RUT: {userData.rut}</p>

          <div className="user-info p-4 mb-4">
            <Row>
              <Col md={4}>
                <h6>Email</h6>
                <p>{userData.email}</p>
              </Col>
              <Col md={4}>
                <h6>Teléfono</h6>
                <p>{userData.phone}</p>
              </Col>
              <Col md={4}>
                <h6>Dirección</h6>
                <p>{userData.address}</p>
              </Col>
            </Row>
          </div>

          {/* Botones de Acción */}
          <div className="d-grid gap-2 d-md-flex justify-content-center">
            <Button variant="outline-primary" className="px-4">
              Editar Perfil
            </Button>
            <Button variant="primary" className="px-4">
              {isSellerProfile ? "Tus Productos" : "Ver Compras"}
            </Button>
            <Button variant="outline-danger" className="px-4">
              Eliminar Perfil
            </Button>
            <Button variant="secondary" className="px-4">
              Cerrar Sesión
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;