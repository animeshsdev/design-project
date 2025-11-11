//import PotteryPortfolio from './PotteryPortfolio/Portfolio';
import Blog from './Blog/Blog';

import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';

const MainApp: React.FC<unknown> = () => {
    return (
        <ErrorBoundary>
            <Blog />
        </ErrorBoundary>
    )
}

export default MainApp;