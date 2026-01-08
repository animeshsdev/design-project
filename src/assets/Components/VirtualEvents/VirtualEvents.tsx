import "./VirtualEvents.styles.scss";
import TwoColumnLayout from "../../Views/Swipe/Components/Layout/2Column/2Column";
import { PrimaryBtn } from "../../Views/Swipe/Components/Buttons/Buttons";

const VirtualEventsInfo = () => {
    return (<div className="virtual-info">
        <p className="subtitle">Virtual Events</p>
        <h3>Check out Sessions now!</h3>
        <p>Swipe Session is our annual conference where we meet with great minds and showcase our
            next gen products. Click below to see a session.
        </p>
        <PrimaryBtn btnText="Start now" />
    </div>)
}

const VirtualEventsCard = () => {
    return (<div className="virtual-info-card">
        <div className="vic-top">
            <img alt="swipe-img" src="src/img/Swipe/swipe-sessions.png" className="swipe-img" />
            <div className="avatars">
                <img alt="avatar-1" src="src/img/Swipe/avatar1.png" className="avatar1-img" />
                <img alt="avatar-2" src="src/img/Swipe/avatar2.png" className="avatar2-img" />
            </div>
        </div>
        <div className="events-bottom-card vic-bottom">
            <p className="subtitle">Keynote</p>
            <p>Everything you need to know, please sign up to know more!
            </p>
        </div>
    </div>)
}

const VirtualEvents = () => {
    return (
        <div className='virtual-events-main'>
            <div className='virtual-events-container section-container'>
                <TwoColumnLayout
                    left={<VirtualEventsInfo />}
                    right={<VirtualEventsCard />}
                />
            </div>
        </div>
    )
}

export default VirtualEvents;