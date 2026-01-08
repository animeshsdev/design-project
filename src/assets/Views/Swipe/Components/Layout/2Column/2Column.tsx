import './2Column.styles.scss';

interface TwoColumnLayoutProps {
    left: React.ReactElement | string;
    right: React.ReactElement | string;
}

const TwoColumnLayout = ({ left, right }: TwoColumnLayoutProps) => {
    return (
        <div className='section-container'>
            <div className='two-column'>
                <div className='col-left'>
                    {left}
                </div>
                <div className='col-right'>
                    {right}
                </div>
            </div>
        </div>
    )
}

export default TwoColumnLayout;