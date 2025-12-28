// import { PrimaryBtn, SecondaryBtn } from './Components/Buttons/Buttons';
import './Styles/Swipe.styles.scss';

const AppNav = () => {
    return <nav className='swipe-navbar'>
        <img alt="swipe-logo" src="src/img/Swipe/logo-white.svg" />
        <ul className='nav-links-list'>
            <li><a href="#">Products</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Pricing</a></li>
        </ul>
    </nav>
}

export default function SwipeApp() {
    return (<div className='swipe-main-container'>
        <AppNav />
    </div>)
}