//Importar los componentes.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PromoCarousel from './components/PromoCarousel';
import PopularProducts from './components/PopularProducts';
import ProductList from './components/ProductList';
import UserProfile from './components/profile/UserProfile';
import Footer from './components/Footer';

function App() {
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
            <Route path="/profile" element={<UserProfile />} />
            
            {/* Puedes agregar más rutas aquí */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
