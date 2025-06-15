import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from 'react-error-boundary';
import './ErrorBoundary.scss';

interface IErrorBoundary {
    children: React.ReactNode;
}

const FallBackUI: React.FC<FallbackProps> = (props): React.ReactElement => {
    console.log(props,"props")
    return (
        <div className='comp-error-boundary'>
            <h1>Something went wrong!!</h1>
            <h2>We are working on it!!</h2>
        </div>
    )
}

const ErrorBoundary: React.FC<IErrorBoundary> = ({ children }): React.ReactElement => {
    return (
        <ReactErrorBoundary
            FallbackComponent={FallBackUI}
        >
            {children}
        </ReactErrorBoundary>
    );
}

export default ErrorBoundary;