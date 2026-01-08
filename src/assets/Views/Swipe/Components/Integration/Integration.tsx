import './Integration.styles.scss';
import TwoColumnLayout from '../Layout/2Column/2Column';
import { PrimaryBtn3 } from '../Buttons/Buttons';
import Card from '../Card/Card';

const IntegrationInfo = () => {
    return (<div className='integration-info'>
        <p className='subtitle2'>Designed For Engineers</p>
        <h2>The worlds most intuitive API's</h2>
        <p>We abstract the hard stuff so your teams don't
            and they can focus on building the project
            instead of reinventing the wheel</p>
        <PrimaryBtn3 btnText='Start now' />
        <div className='card-container'>
            <Card
                imgPath='src/img/Swipe/tools-icon.png'
                title='Tools for all stacks'
                content={`We offer front end and back end libraries in some of the most widely used technologies, old and new`}
                btnText='See libraries'
            />
            <Card
                imgPath='src/img/Swipe/cube-icon.png'
                title='Custom Integrations'
                content={`Use integrations for systems like shopify, WooCommerce, NetSuite, and more.`}
                btnText='Explore Partners'
            />
        </div>
    </div>)
}

const IntegrationSource = () => {
    return (<div className='integration-source'>
        <img alt="api-code" src="src/img/Swipe/api-code.png" id={"api-code-img"} />
        <img alt="terminal-code" src="src/img/Swipe/terminal-code.png" id={"terminal-code-img"} />
    </div>)
}

const Integration = () => {
    return (<div className='info-main-section'>
        <div className='integration-container section-container'>
            <TwoColumnLayout
                left={<IntegrationInfo />}
                right={<IntegrationSource />}
            />
        </div>
    </div>)
}

export default Integration;