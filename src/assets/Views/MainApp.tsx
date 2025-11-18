//import PotteryPortfolio from './PotteryPortfolio/Portfolio';
// import Blog from './Blog/Blog';
import SimpleResume from './SimpleResume/SimpleResume';

import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';

const MainApp: React.FC<unknown> = () => {
    return (
        <ErrorBoundary>
            <SimpleResume />
        </ErrorBoundary>
    )
}

export default MainApp;