import NavBar from './Components/NavBar/NavBar';
import PaymentHero from './Components/PaymentHero/PaymentHero';
import PartnerGrid from './Components/PartnerGrid/PartnerGrid';
import PlatformSection from './Components/Platform/Platform';
import PhotosGrid from './Components/PhotosGrid/PhotosGrid';
import Integration from './Components/Integration/Integration';
import SwipeInfo from './Components/SwipeInfo/SwipeInfo';
import GlobalSection from './Components/GlobalSection/GlobalSection';
import VirtualEvents from '../../Components/VirtualEvents/VirtualEvents';

import './Styles/Swipe.styles.scss';

export default function SwipeApp() {
    return (<div className='swipe-main-container'>
        <NavBar />
        <main className='swipe-main-body'>
            <PaymentHero />
            <PartnerGrid />
            <PlatformSection />
            <PhotosGrid />
            <Integration />
            <SwipeInfo />
            <GlobalSection />
            <VirtualEvents />
        </main>
    </div>)
}
