//import PotteryPortfolio from './PotteryPortfolio/Portfolio';
// import Blog from './Blog/Blog';
//import SimpleResume from './SimpleResume/SimpleResume';
// import ComponentRenderer from '../Components/ComponentsRenderer';
//import Practise from './Practise/Practise';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';
// import CostEstimator from './CostEstimator/CostEstimator';
import PotteryPortfolio from './StudioPortfolio/Portfolio';

const MainApp: React.FC<unknown> = () => {
    return (
        <ErrorBoundary>
            <PotteryPortfolio />
        </ErrorBoundary>
    )
}

export default MainApp;