import { PrimaryBtn2 } from '../../Components/Buttons/Buttons';
import './NavBar.styles.scss';

const NavBar = () => {
    const appLinks: string[] = ["Products", "Solutions", "Developers", "Resources", "Pricing"];

    return <nav className='swipe-navbar'>
        <img alt="swipe-logo" src="src/img/Swipe/logo-white.svg" />
        <ul className='nav-links-list'>
            {
                appLinks.map((linkName: string) => {
                    return <li><a href="#">{linkName}</a></li>
                })
            }
        </ul>
        <PrimaryBtn2 btnText='Sign In' />
    </nav>
}

export default NavBar;