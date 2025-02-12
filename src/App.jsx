//Importar los componentes.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import SearchBar from './pages/home/SearchBar';
import PromoCarousel from './pages/home/PromoCarousel';
import PopularProducts from './pages/home/PopularProducts';
import ProductList from './pages/home/ProductList';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  // Datos de ejemplo para el perfil
  const mockUserData = {
    name: "Usuario de Ejemplo",
    rut: "12.345.678-9",
    email: "usuario@ejemplo.com",
    phone: "+56 9 1234 5678",
    address: "Av. Principal 123",
    profileImage: "/default-avatar.png"
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        {/*Prop para mostrar si estás logueado o no.*/}
        <Header isLoggedIn={true} />
        <main>
          <Routes>
            {/* Ruta principal (home) */}
            <Route path="/" element={
              <>
                <SearchBar />
                <Container>
                  <PromoCarousel />
                  <PopularProducts />
                  <ProductList />
                </Container>
              </>
            } />

            {/* Ruta del perfil */}
            <Route path="/profile" element={
              <Profile 
                userData={mockUserData}
                isSellerProfile={false}
                onProfileTypeChange={() => console.log('Cambio de tipo de perfil')}
                onEdit={() => console.log('Editar perfil')}
                onActionClick={() => console.log('Acción de perfil')}
                onDelete={() => console.log('Eliminar perfil')}
                onLogout={() => console.log('Cerrar sesión')}
              />
            } />
            
            {/* Nueva ruta para el carrito */}
            <Route path="/cart" element={<Cart />} />
            
            {/* Puedes agregar más rutas aquí */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
