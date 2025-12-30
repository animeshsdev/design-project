import NavBar from './Components/NavBar/NavBar';
import PaymentHero from './Components/PaymentHero/PaymentHero';

import './Styles/Swipe.styles.scss';

export default function SwipeApp() {
    return (<div className='swipe-main-container'>
        <NavBar />
        <main className='swipe-main-body'>
            <PaymentHero />
        </main>
    </div>)
}
