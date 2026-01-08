import './SwipeInfo.styles.scss';
import Card from '../Card/Card';

const SwipeInfo = () => {
    return (
        <div className='swipe-main'>
                    <div className='swipeinfo-container section-container'>
            <p className='subtitle'>Why Swipe</p>
            <h2>A tech-first approach to finance</h2>
            <div className='card-container'>
                <Card
                    imgPath='src/img/Swipe/cloud-icon.png'
                    title='Efficient always'
                    content={`We offer front end and back end libraries in some of the most widely used technologies, old and new`}
                />
                <Card
                    imgPath='src/img/Swipe/cycle-icon.png'
                    title='Fast-improving'
                    content={`We offer front end and back end libraries in some of the most widely used technologies, old and new`}
                />
                <Card
                    imgPath='src/img/Swipe/shield-icon.png'
                    title='Tried and true'
                    content={`We offer front end and back end libraries in some of the most widely used technologies, old and new`}

                />
                <Card
                    imgPath='src/img/Swipe/bars-icon.png'
                    title='Crazy Optimized!'
                    content={`We offer front end and back end libraries in some of the most widely used technologies, old and new`}
                />
            </div>
        </div>
        </div>
    )
}

export default SwipeInfo;