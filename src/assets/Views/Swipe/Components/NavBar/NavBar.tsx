import { PrimaryBtn2 } from '../../Components/Buttons/Buttons';
import './NavBar.styles.scss';

const NavBar = () => {
    const appLinks: string[] = ["Products", "Solutions", "Developers", "Resources", "Pricing"];

    return <nav className='swipe-navbar section-container'>
        <img alt="swipe-logo" src="src/img/Swipe/logo-white.svg" />
        <ul className='nav-links-list'>
            {
                appLinks.map((linkName: string, idx) => {
                    return <li key={`${linkName}-${idx}`}><a href="#">{linkName}</a></li>
                })
            }
        </ul>
        <PrimaryBtn2 btnText='Sign In' />
        <div className='nav-ham'>
            <div className='nav-ham-bar'>
            </div>
            <div className='nav-ham-bar'>
            </div>
            <div className='nav-ham-bar'>
            </div>
        </div>
    </nav>
}

export default NavBar;