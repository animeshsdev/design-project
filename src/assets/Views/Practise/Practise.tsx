import './Practise.scss';
import ErrorBoundary from '../../Components/ErrorBoundary/ErrorBoundary';
// These are just a bunch of Practise Functions :->


export const FlexDummy: React.FC<unknown> = (): React.ReactElement => {
    return (
        <ErrorBoundary>
            <div className="flex-test-container">
                <div className="el el--1">HTML</div>
                <div className="el el--2">and</div>
                <div className="el el--3">CSS</div>
                <div className="el el--4">are</div>
                <div className="el el--5">amazing</div>
                <div className="el el--6">languages</div>
                <div className="el el--7">to</div>
                <div className="el el--8">learn</div>
            </div>
        </ErrorBoundary>
    )
}

export const GridLayout: React.FC<unknown> = (): React.ReactElement => {
    return (
        <ErrorBoundary>
            <div className="grid-test-container">
                <div className="el el--1">1.HTML</div>
                <div className="el el--2">2.and</div>
                <div className="el el--3">3.CSS</div>
                <div className="el el--4">4.are</div>
                <div className="el el--5">5.amazing</div>
                <div className="el el--6">6.languages</div>
                <div className="el el--7">7.to</div>
                <div className="el el--8">8.learn</div>
            </div>
        </ErrorBoundary>
    )
}
