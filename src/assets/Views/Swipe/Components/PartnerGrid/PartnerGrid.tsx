import './PartnerGrid.styles.scss';

const PartnerGrid = () => {
    return (
        <div className="partner-grid-container">
            <div className="partner-grid section-container">
                <img className="partner-grid__item" src="src/img/Swipe/instacart.png" alt="instacart" />
                <img className="partner-grid__item" src="src/img/Swipe/salesforce.png" alt="salesforce" />
                <img className="partner-grid__item" src="src/img/Swipe/amazon.png" alt="amazon" />
                <img className="partner-grid__item" src="src/img/Swipe/slack.png" alt="slack" />
                <img className="partner-grid__item" src="src/img/Swipe/shopify.png" alt="shopify" />
                <img className="partner-grid__item" src="src/img/Swipe/google.png" alt="google" />
                <img className="partner-grid__item" src="src/img/Swipe/lyft.png" alt="lyft" />
                <img className="partner-grid__item" src="src/img/Swipe/zoom.png" alt="zoom" />
            </div>
        </div>
    );
}

export default PartnerGrid;