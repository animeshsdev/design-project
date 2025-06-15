//import Blog from './Blog/Blog';
// import FlexDummy from './Practise/Practise'; 
import { GridLayout } from './Practise/Practise';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';

const MainApp: React.FC<unknown> = () => {
    return (
        <ErrorBoundary>
            {/* [Note]: Component to test and work on as needed */}

            {/* <Blog />   */}
            {/* <FlexDummy /> */}
            <GridLayout />
        </ErrorBoundary>
    )
}

export default MainApp;