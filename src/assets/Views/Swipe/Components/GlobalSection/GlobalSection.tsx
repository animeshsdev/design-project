import './GlobalSection.styles.scss';
import TwoColumnLayout from '../Layout/2Column/2Column';
import Card from '../Card/Card';

const GlobalContent = () => {
    return (<>
        <p className='subtitle2'>
            Global Scale
        </p>
        <h2>A structure for global business</h2>
        <p>
            The <a href="#">payments industry</a> is rapidly evolving as consumers and
            businesses demand faster, simpler, and more reliable
            <a href="#"> digital transactions</a>. Traditional payment systems are
            fragmented, involving <a href="#">multiple intermediaries</a> that increase
            cost, latency, and <a href="#">failure rates</a>. As
            <a href="#">global commerce</a> grows, merchants face challenges integrating
        </p>
    </>)
}
const GlobalSection = () => {
    return (<div className='global-section-main'>
        <div className='section-container global-section-container'>
            <TwoColumnLayout
                left={<GlobalContent />}
                right={<>
                    <img alt="globe-img" src="src/img/Swipe/global-graphic.png" className="globe-img" />
                </>}
            />
            <div className='card-container'>
                <Card
                    title="250M+"
                    content={"Api requests at 15,000 requests a second"}
                    infoCard={true}
                />
                <Card
                    title="97%"
                    content={"active users are currently registered"}
                    infoCard={true}
                />
                <Card
                    title="135+"
                    content={"currencied have been registered"}
                    infoCard={true}
                />
                <Card
                    title="35+"
                    content={"Tie ups with countries using our swipe network"}
                    infoCard={true}
                />
            </div>
        </div>
    </div>)
}

export default GlobalSection;