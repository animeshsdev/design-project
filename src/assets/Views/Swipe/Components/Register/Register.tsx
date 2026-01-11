import './Register.styles.scss';
import TwoColumnLayout from '../Layout/2Column/2Column';
import { PrimaryBtn, } from '../Buttons/Buttons';
import Card from '../Card/Card';

const CustomerRegister = () => {
    return (<div className='register'>
        <h3 className='subtitle'>What are you waiting for?</h3>
        <p>Explore <a>Swipe</a> now, or create an account and start accepting payments today
            ! If you need a custom package for your business, let us chat today.</p>
        <PrimaryBtn btnText='Start now' />
    </div>)
}

const Details = () => {
    return (<div className='details'>
        <div className='card-container'>
            <Card
                imgPath='src/img/Swipe/shield-icon.png'
                title='Always know what you pay'
                content={`We offer front end and back end libraries in some of the most widely used technologies, old and new`}
                btnText='Pricing details'
            />
            <Card
                imgPath='src/img/Swipe/bars-icon.png'
                title='Start Integrations'
                content={`Use integrations for systems like shopify, WooCommerce, NetSuite, and more.`}
                btnText='Api reference'
            />
        </div>
    </div>)
}

const Register = () => {
    return (<div className='register-main'>
        <div className='register-container section-container'>
            <TwoColumnLayout
                left={<CustomerRegister />}
                right={<Details />}
            />
        </div>
    </div>)
}

export default Register;