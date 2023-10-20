import logo from '../../assets/img/logo.png';
import './Footer.scss';

export default function Footer() {
    return (
        <footer className='footer'>
            <img src={logo} alt="logo" />
            <p>© 2023 - All rights reserved</p>
        </footer>
    )
}

