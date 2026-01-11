import './Footer.styles.scss';
import FooterList from './FooterList';
import { Products, UseCases, Resources } from './constants';

const Footer = () => {
    return (<footer className='app-footer'>
        <div className='col-container section-container'>
            <div className='col'>
                <img alt="dark-svg" src="src/img/Swipe/logo-dark.svg" />
                <div className='icon-link'>
                    <img alt="location-icon" src="src/img/Swipe/location-icon.png" />
                    <a href="#">United States</a>
                </div>
                <div className='icon-link'>
                    <img alt="location-icon" src="src/img/Swipe/comment-icon.png" />
                    <a href="#">English (United States)</a>
                </div>
            </div>
            <div className='col'>
                <FooterList name='Products' list={Products} />
            </div>
            <div className='col'>
                <FooterList name='Use Cases' list={UseCases} />
            </div>
            <div className='col'>
                <FooterList name='Resources' list={Resources} />
            </div>
        </div>
    </footer>)
}

export default Footer;