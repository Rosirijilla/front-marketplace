import { Row, Col } from 'react-bootstrap';

const UserInfo = ({ email, phone, address }) => (
  <div className="user-info p-4 mb-4">
    <Row>
      <Col md={4}>
        <h6>Email</h6>
        <p>{email}</p>
      </Col>
      <Col md={4}>
        <h6>Teléfono</h6>
        <p>{phone}</p>
      </Col>
      <Col md={4}>
        <h6>Dirección</h6>
        <p>{address}</p>
      </Col>
    </Row>
  </div>
);

export default UserInfo;