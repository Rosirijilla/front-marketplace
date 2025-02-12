import { Row, Col } from 'react-bootstrap';
import ProfileImage from '../pages/profile/profileImage';
import ProfileSwitch from '../pages/profile/profileSwitch';
import UserInfo from '../pages/profile/UserInfo';
import ProfileActions from '../pages/profile/ProfileActions';
import '../styles/Profile.css';

const Profile = ({ 
  userData = {}, // Valor por defecto para evitar undefined
  isSellerProfile = false, 
  onProfileTypeChange = () => {},
  onEdit = () => {},
  onActionClick = () => {},
  onDelete = () => {},
  onLogout = () => {}
}) => {
  // Verificación inicial de datos
  if (!userData) {
    console.error('userData no está definido');
    return <div>Error al cargar el perfil</div>;
  }

  try {
    // Desestructuración con valores por defecto
    const {
      profileImage = '/default-avatar.png',
      name = 'Usuario',
      rut = 'Sin RUT',
      email = '',
      phone = '',
      address = ''
    } = userData;

    return (
      <div className="position-relative">
        <ProfileSwitch 
          isSellerProfile={isSellerProfile} 
          onChange={onProfileTypeChange}
        />

        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <ProfileImage 
              src={profileImage} 
              alt={name} 
            />
            
            <h2 className="mb-3">{name}</h2>
            <p className="text-muted mb-4">RUT: {rut}</p>

            <UserInfo 
              email={email}
              phone={phone}
              address={address}
            />

            <ProfileActions 
              isSellerProfile={isSellerProfile}
              onEdit={onEdit}
              onActionClick={onActionClick}
              onDelete={onDelete}
              onLogout={onLogout}
            />
          </Col>
        </Row>
      </div>
    );
  } catch (error) {
    console.error('Error en el componente Profile:', error);
    return <div>Ha ocurrido un error al cargar el perfil</div>;
  }
};

export default Profile;