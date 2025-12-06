import './CostEstimator.styles.scss';

const NavSection = () => {
    return (<div className='nav-container'>
        <a href='#'>Free</a>
        <a className='active' href='#'>Team</a>
        <a href='#'>Professional</a>
        <a href='#'>Enterprise</a>
        <div className='nav-line'></div>
    </div>)
}

const TabSection = () => {
    return (<>
        <div className='tab-container'>
            <img alt='mobile' src='./src/img/icon1.png' />
            <div className='toggle-wrapper'>
                <span>Mobile</span>
                <span>Web</span>
            </div>
            <img alt='web' src='./src/img/icon2.png' />
        </div>
        <div className='session-card'>
            <p>Monthly Sessions</p>
            <p>$20000</p>
        </div>
        <p className='desc-ssc'>A session is continuos activity on your web app and application,
            choose how many you wish to record and discard the extras.
        </p>
    </>)
}

const PriceSection = () => {
    return (<div className='price-container'>
        <div className='slider'>
            <div className='bar'>
                <div className='progress'></div>
                <div className='pointer'></div>
            </div>
        </div>
        <div className='slider-scale'>
            <p>0</p>
            <p>1k</p>
            <p>10k</p>
            <p>25k</p>
            <p>50k</p>
            <p>250k</p>
            <p>1M</p>
            <p>250M</p>
            <p>500M</p>
        </div>
        <div className='price-cards'>
            <div className='pcard card-1'>
                <div className='top-section'>
                    <p>Monthly Billing</p>
                    <p className='pc-price'>$199</p>
                    <p>Monthly</p>
                </div>
                <hr />
                <p>Starting from 1 month data retention</p>
                <p>10 Team Members</p>
                <button>Try Free For 14 days</button>
            </div>
            <div className='pcard card-2'>
                <p className='save-p'>Save upto 16%</p>
                <div className='top-section'>
                    <p>Annual Billing</p>
                    <p className='pc-price'>$2,199</p>
                    <p>$179 Monthly</p>
                </div>
                <hr />
                <p>Starting from 1 month data retention</p>
                <p>10 Team Members</p>
                <button>Try Free For 14 days</button>
            </div>
        </div>
    </div>)
}

const CardContainer = () => {
    return (<div className='card-container'>
        <NavSection />
        <TabSection />
        <PriceSection />
    </div>)
}

const CostEstimator = () => {
    return (<div className='cost-estimator-container'>
        <h1>Estimate your cost</h1>
        <CardContainer />
    </div>);
}

export default CostEstimator;