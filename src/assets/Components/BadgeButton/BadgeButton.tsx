import './BadgeButton.styles.scss';

// can directly use a elemnt add padding and badge as well
const BadgeButton = () => {
    return (
        // Method - 1

        // <div className='badge-button-bg'>
        //     <span className='badge-count'>3</span>
        //     <a className='link-btn' href="#">Messages</a>
        // </div>)

        // Method - 2
        <>
            <a className='btn-link'>Messages <span className='btn-badge'>
                3</span></a>
        </>
    )

}

export default BadgeButton;