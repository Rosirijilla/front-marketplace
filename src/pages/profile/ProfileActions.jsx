import { Button } from 'react-bootstrap';

const ProfileActions = ({ isSellerProfile, onEdit, onActionClick, onDelete, onLogout }) => (
  <div className="d-grid gap-2 d-md-flex justify-content-center">
    <Button variant="outline-primary" className="px-4" onClick={onEdit}>
      Editar Perfil
    </Button>
    <Button variant="primary" className="px-4" onClick={onActionClick}>
      {isSellerProfile ? "Tus Productos" : "Ver Compras"}
    </Button>
    <Button variant="outline-danger" className="px-4" onClick={onDelete}>
      Eliminar Perfil
    </Button>
    <Button variant="secondary" className="px-4" onClick={onLogout}>
      Cerrar Sesión
    </Button>
  </div>
);

export default ProfileActions;