import { Carousel } from 'react-bootstrap';

const PromoCarousel = () => {
  return (
    <Carousel className="mb-4">
      {[1, 2, 3].map((item) => (
        <Carousel.Item key={item}>
          <img
            className="d-block w-100"
            src={`/promo-${item}.jpg`}
            alt={`Promoción ${item}`}
            style={{ height: '300px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Promoción {item}</h3>
            <p>Descripción de la promoción {item}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PromoCarousel;