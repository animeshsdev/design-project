//import Blog from './Blog/Blog';
// import FlexDummy from './Practise/Practise'; 
//import { GridLayout } from './Practise/Practise';
// import LearnRenderer from './Learn/Learn';
import PotteryPortfolio from './PotteryPortfolio/Portfolio';

import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';

const MainApp: React.FC<unknown> = () => {
    return (
        <ErrorBoundary>
            {/* [Note]: Component to test and work on as needed */}

            {/* <Blog />   */}
            {/* <FlexDummy /> */}
            {/* <GridLayout /> */}
            {/* <LearnRenderer /> */}
            <PotteryPortfolio />
        </ErrorBoundary>
    )
}

export default MainApp;