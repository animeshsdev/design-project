import TwoColumnLayout from '../Layout/2Column/2Column';
import { PrimaryBtn, SecondaryBtn } from '../Buttons/Buttons';
import './PaymentHero.styles.scss';

const LeftSection = () => {
    return (<div className='section-container'>
        <h1>Payment infrastructure for the world</h1>
        <p className='left-sec-text'>Tons of Compliances all over the world uses Swipe's seamless platform to manage their businesss entire
            financial infrastructure online.
        </p>
        <div className='btn-container'>
            <PrimaryBtn btnText='Start now' />
            <SecondaryBtn btnText='Contact Sales' />
        </div>
    </div>)
}

const RightSection = () => {
    return (<div className=''>
        <img alt="mobile-img" src="src/img/Swipe/hero-phone.png" className='hero-phone-img' />
    </div>)
}

const PaymentHero = () => {
    return (<div className="payment-hero-container">
        <TwoColumnLayout
            left={<LeftSection />}
            right={<RightSection />}
        />
    </div>)
};

export default PaymentHero;