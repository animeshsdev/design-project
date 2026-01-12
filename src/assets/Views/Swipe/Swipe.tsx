import { useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import PaymentHero from './Components/PaymentHero/PaymentHero';
import PartnerGrid from './Components/PartnerGrid/PartnerGrid';
import PlatformSection from './Components/Platform/Platform';
import PhotosGrid from './Components/PhotosGrid/PhotosGrid';
import Integration from './Components/Integration/Integration';
import SwipeInfo from './Components/SwipeInfo/SwipeInfo';
import GlobalSection from './Components/GlobalSection/GlobalSection';
import VirtualEvents from '../../Components/VirtualEvents/VirtualEvents';
import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';
import './Styles/Swipe.styles.scss';


export default function SwipeApp() {
    useEffect(() => {
        let mounted = true;
        import('../../../gradient.js')
            .then((m) => {
                if (!mounted) return;
                if (m.initGradient) m.initGradient('#gradient-canvas');
                else if (m.default) m.default('#gradient-canvas');
            })
            .catch((e) => console.error('Failed to load gradient', e));
        return () => {
            mounted = false;
        };
    }, []);
    return (<div className='swipe-main-container'>
        <NavBar />
        <main className='swipe-main-body'>
            <canvas id='gradient-canvas'></canvas>
            <PaymentHero />
            <PartnerGrid />
            <PlatformSection />
            <PhotosGrid />
            <Integration />
            <SwipeInfo />
            <GlobalSection />
            <VirtualEvents />
            <Register />
        </main>
        <Footer />
    </div>)
}

