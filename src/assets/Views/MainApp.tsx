//import PotteryPortfolio from './PotteryPortfolio/Portfolio';
// import Blog from './Blog/Blog';
//import SimpleResume from './SimpleResume/SimpleResume';
import Practise from './Practise/Practise';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';

const MainApp: React.FC<unknown> = () => {
    return (
        <ErrorBoundary>
            <Practise />
        </ErrorBoundary>
    )
}

export default MainApp;