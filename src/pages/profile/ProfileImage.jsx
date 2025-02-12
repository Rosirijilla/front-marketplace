import { Image } from 'react-bootstrap';

const ProfileImage = ({ src, alt }) => (
  <div className="position-relative mb-4">
    <Image 
      src={src} 
      alt={alt}
      roundedCircle 
      className="profile-image"
      width={150}
      height={150}
    />
  </div>
);

export default ProfileImage;