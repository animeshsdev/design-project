
import './PhotosGrid.styles.scss';

const PhotosGrid = () => {
    return (
        <div className='photos-grid-main'>
            <div className='photos-grid-container section-container'>
                <img alt="credit-card" src="src/img/Swipe/credit-card.png" id="credit-card" />
                <img alt="slack" src="src/img/Swipe/slack-invoice.png" id="slack" />
                <img alt="phone" src="src/img/Swipe/phone.png" id="phone" />
                <img alt="dash" src="src/img/Swipe/dash.png" id="chart" />
            </div>
        </div>
    )
}

export default PhotosGrid;