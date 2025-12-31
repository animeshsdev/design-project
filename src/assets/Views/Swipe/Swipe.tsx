import NavBar from './Components/NavBar/NavBar';
import PaymentHero from './Components/PaymentHero/PaymentHero';
import PartnerGrid from './Components/PartnerGrid/PartnerGrid';
import PlatformSection from './Components/Platform/Platform';
import './Styles/Swipe.styles.scss';

export default function SwipeApp() {
    return (<div className='swipe-main-container'>
        <NavBar />
        <main className='swipe-main-body'>
            <PaymentHero />
            <PartnerGrid />
            <PlatformSection />
        </main>
    </div>)
}
