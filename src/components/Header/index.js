import './style.css';
import Logo from '../../assets/logo.jpg';
import ProfileImage from '../../assets/profile.jpg';

export default function Header() {
  return (
    <header>
      <img className='logo' src={Logo} alt="logo" />
      <div className='container-welcome'>
        <img src={ProfileImage} className='profile-img' alt='Profile' />
        <strong>Satisfação, me chamo Andrei</strong>
      </div>
    </header>
  )
}