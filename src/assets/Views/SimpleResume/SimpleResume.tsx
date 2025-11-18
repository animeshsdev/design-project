import './SimpleResume.styles.scss';

const Banner = () => {
    return (
        <section className='banner-container'>
            <header className='bc-header'>
                <nav className='bc-nav'>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">My Projects</a></li>
                    </ul>
                </nav>
                <p className='bc-para'>Animesh Srivastava</p>
                <a className='bc-link' href="#">contact me</a>
            </header>
            <div className='banner-content'>
                <h1 className='tag-line'>I have a passion for <em>engineering</em>, <em>coding</em>, <em>space</em>, and <em>music</em>.
                </h1>
                <div className='bc-2-col'>
                    <p className='title-bc'>My Mission</p>
                    <p>This is my mission. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate nihil mollitia quas ducimus recusandae dolore itaque eveniet sequi facere nam, cupiditate consequatur veniam fuga, iure voluptates, harum modi neque reprehenderit.</p>
                </div>
                <div className='bc-2-col'>
                    <p className='title-bc'>My Skills</p>
                    <ul className='bc2col-skills'>
                        <li>Public Speaking</li>
                        <li>Strategic Planning</li>
                        <li>User Interviews</li>
                        <li>React Dev</li>
                        <li>Front End Dev</li>
                        <li>Content Creator</li>
                        <li>Insta Page Manager</li>
                        <li>Backend Dev</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

const Blog = () => {
    return (
        <section className='blog-container'>
            <div className='blog-content'>
                <p className='section-1'>Tech Blog</p>
                <div className='section-2'>
                    <div className='part1'>
                        <p className='b-header'>This is your Brain On Helium</p>
                        <p className='b-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit fugiat natus quibusdam voluptatibus ducimus sequi provident consectetur fuga illo. Cum nesciunt sit quod aliquam quisquam iusto at illum! Saepe, nesciunt?</p>
                        <p className='b-date'>May 19 2025</p>
                    </div>
                    <div className='part2'>
                        <p className='b-header'>This is your Brain On Helium - 2</p>
                        <p className='b-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit fugiat natus quibusdam voluptatibus ducimus sequi provident consectetur fuga illo. Cum nesciunt sit quod aliquam quisquam iusto at illum! Saepe, nesciunt?</p>
                        <p className='b-date'>May 20 2025</p>
                    </div>
                    <div className='part3'>
                        <p className='b-header'>This is your Brain On Helium - 3</p>
                        <p className='b-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit fugiat natus quibusdam voluptatibus ducimus sequi provident consectetur fuga illo. Cum nesciunt sit quod aliquam quisquam iusto at illum! Saepe, nesciunt?</p>
                        <p className='b-date'>May 21 2025</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Events = () => {
    return (<>
        <section className='events-container'>
            <div className='events-content'>
                <p className='section-1'>Speaking Events</p>
                <div className='section-2'>
                    <div className='part1'>
                        <p className='b-header'>NY Economics Forums</p>
                        <p className='b-text'>NYC</p>
                        <p className='b-date'>May 19 2025</p>
                    </div>
                    <div className='part2'>
                        <p className='b-header'>Emerging Tech Meet Up</p>
                        <p className='b-text'>SFO</p>
                        <p className='b-date'>May 21 2025</p>
                    </div>
                    <div className='part3'>
                        <p className='b-header'>Creative Code Meetup</p>
                        <p className='b-text'>Tampa, FL</p>
                        <p className='b-date'>May 11 2025</p>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

const Footer = () => {
    return (<footer className='footer-section'>
        <div className='footer-content'>
            <img alt='insta' src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' />
            <img alt='twitter' src='https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?semt=ais_hybrid&w=740&q=80' />
            <p>Made With ❤️</p>
        </div>
    </footer>)
}

const SimpleResume = () => {
    return (<div className='simple-resume-container'>
            <Banner />
            <Blog />
            <Events />
            <Footer />
    </div>);
}

export default SimpleResume;