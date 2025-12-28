//import PotteryPortfolio from './PotteryPortfolio/Portfolio';
// import Blog from './Blog/Blog';
//import SimpleResume from './SimpleResume/SimpleResume';
// import ComponentRenderer from '../Components/ComponentsRenderer';
//import Practise from './Practise/Practise';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';
// import CostEstimator from './CostEstimator/CostEstimator';
//import PotteryPortfolio from './StudioPortfolio/Portfolio';
import SwipeApp from './Swipe/Swipe';

const MainApp: React.FC<unknown> = () => {
    return (
        <ErrorBoundary>
            <SwipeApp />
        </ErrorBoundary>
    )
}

export default MainApp;