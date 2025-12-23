import { useState } from 'react';
import './Portfolio.styles.scss';

const DesignPortfolio = () => {
    const [isHamOpen, setIsHamOpen] = useState<boolean>(false);

    return (
        <>
            {/* <div className='box'>
            </div> */}
            <div className='main-cont'>
                <header className='header'>
                    <div className='left'>Animesh Srivastava</div>
                    <nav className='right'>
                        <a href='#'>
                            Work
                        </a>
                        <a href='#'>
                            Contact
                        </a>
                        <a href='#'>
                            <img alt='dribble' src='src/img/DesignPortfolio/images/dribble_icon.png' />
                        </a>
                        <a href='#'>
                            <img alt='insta' src='src/img/DesignPortfolio/images/insta_icon.png' />
                        </a>
                        <a href='#'>
                            <img alt='v' src='src/img/DesignPortfolio/images/v_icon.png' />
                        </a>
                    </nav>
                    <nav className={`mobile-nav ${isHamOpen ? "open": ""}`}>
                        <a href='#'>
                            Work
                        </a>
                        <a href='#'>
                            Contact
                        </a>
                        <a href='#'>
                            <img alt='dribble' src='src/img/DesignPortfolio/images/dribble_icon.png' />
                        </a>
                        <a href='#'>
                            <img alt='insta' src='src/img/DesignPortfolio/images/insta_icon.png' />
                        </a>
                        <a href='#'>
                            <img alt='v' src='src/img/DesignPortfolio/images/v_icon.png' />
                        </a>
                    </nav>
                    <div
                        className={`hamburger ${isHamOpen ? 'open' : ''}`}
                        onClick={() => setIsHamOpen(!isHamOpen)}
                    >
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>
                    </div>

                </header>
                <div className='portfolio-container'>
                    <div className='grid-container'>
                        <div className='image-cont' id='eth'>
                            <img alt='eth' src='./src/img/DesignPortfolio/images/eth.avif' />
                            <p className='overlay'>View Project</p>
                        </div>

                        <div className='image-cont' id='alphabet'>
                            <img alt='eth' src='./src/img/DesignPortfolio/images/alphabet.avif' />
                            <p className='overlay'>View Project</p>
                        </div>

                        <div className='image-cont' id='traveler'>
                            <img alt='eth' src='./src/img/DesignPortfolio/images/traveler.avif' />
                            <p className='overlay'>View Project</p>
                        </div>

                        <div className='image-cont' id='cube'>
                            <img alt='eth' src='./src/img/DesignPortfolio/images/cube.avif' />
                            <p className='overlay'>View Project</p>
                        </div>
                        <div className='image-cont' id='eth'>
                            <img alt='eth' src='./src/img/DesignPortfolio/images/eth.avif' />
                            <p className='overlay'>View Project</p>
                        </div>

                        <div className='image-cont' id='astro'>
                            <img alt='eth' src='./src/img/DesignPortfolio/images/astro.avif' />
                            <p className='overlay'>View Project</p>
                        </div>

                        <div className='image-cont' id='cup'>
                            <img alt='eth' src='./src/img/DesignPortfolio/images/cup.avif' />
                            <p className='overlay'>View Project</p>
                        </div>

                        <div className='image-cont' id='insta'>
                            <img alt='eth' src='./src/img/DesignPortfolio/images/insta.avif' />
                            <p className='overlay'>View Project</p>
                        </div>

                        <div className='image-cont' id='foam'>
                            <img alt='eth' src='./src/img/DesignPortfolio/images/foam.avif' />
                            <p className='overlay'>View Project</p>
                        </div>

                        <div className='image-cont' id='dimensional'>
                            <img alt='eth' src='./src/img/DesignPortfolio/images/dimensional.avif' />
                            <p className='overlay'>View Project</p>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default DesignPortfolio;
