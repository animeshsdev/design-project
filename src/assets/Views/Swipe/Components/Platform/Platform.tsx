import TwoColumnLayout from '../Layout/2Column/2Column';
import { PrimaryBtn } from '../Buttons/Buttons';
import './Platform.styles.scss';

const PlatformSection = () => {
    return (
        <div className="platform-section-container section-container">
            <p className='subtitle'>Unified Platform</p>
            <h3>All the payment products you'll ever need</h3>
            <TwoColumnLayout
                left={
                    <>
                        <p>
                            The <a href="#">payments industry</a> is rapidly evolving as consumers and
                            businesses demand faster, simpler, and more reliable
                            <a href="#"> digital transactions</a>. Traditional payment systems are
                            fragmented, involving <a href="#">multiple intermediaries</a> that increase
                            cost, latency, and <a href="#">failure rates</a>. As
                            <a href="#">global commerce</a> grows, merchants face challenges integrating
                            <a href="#">multiple providers</a>, managing fraud, and staying compliant
                            with <a href="#">complex regulations</a>, often turning payments into an
                            operational burden instead of a <a href="#">growth driver</a>.
                            <br /><br />
                            Our product changes this by unifying
                            <a href="#"> payment processing</a> into a single, intelligent platform. It
                            abstracts infrastructure complexity, dynamically optimizes transaction
                            routing, and embeds <a href="#">security</a> and
                            <a href="#"> compliance</a> by design. With developer-friendly APIs and
                            <a href="#"> real-time insights</a>, businesses can scale globally, improve
                            payment success rates, and deliver seamless customer experiences,
                            transforming payments into a strategic advantage rather than a limitation.
                        </p>

                        <PrimaryBtn btnText="Start now" />
                    </>
                }
                right={
                    <p>
                        Security and compliance are embedded into the core of our product. Built-in
                        <a href="#"> fraud detection</a>, real-time monitoring, and automated
                        <a href="#"> compliance workflows</a> help businesses stay protected as
                        threats and regulations evolve. At the same time,
                        <a href="#"> developer-friendly APIs</a> and dashboards enable teams to launch
                        faster, iterate quickly, and gain deep visibility into
                        <a href="#"> payment performance</a> without heavy operational overhead.
                    </p>
                }
            />

        </div>
    )
}

export default PlatformSection;