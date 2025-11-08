import './Portfolio.styles.scss';

/**
    Simple JSX Design Project
 */
const PageHeader = () => <>
    <header className='pp-page-header'>
        <h1> Animesh Srivastava | Ceramics</h1>
        <nav className="pp-page-nav">
            <ul>
                <li><a className="active" href="work">Work</a></li>
                <li><a href="about">About</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
        </nav>
    </header>
</>

const PageContent = () => <>
    <main className='pp-main-content'>
        <div className='card'>
            <img alt="dummy-img-1" src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
            <h2>Mocha martini 1</h2>
        </div>
        <div className='card'>
            <img alt="dummy-img-2" src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
            <h2>Mocha martini 2</h2>
        </div>
        <div className='card'>

            <img alt="dummy-img-3" src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
            <h2>Mocha martini 3</h2>
        </div>
        <div className='card'>
            <img alt="dummy-img-3" src="https://images.unsplash.com/photo-1576020799627-aeac74d58064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2615&q=80" />
            <h2>Mocha martini 4</h2>
        </div>
        <div className='card'>
            <img alt="dummy-img-4" src="https://images.unsplash.com/photo-1525974160448-038dacadcc71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80" />
            <h2>Mocha martini 5</h2>
        </div>
        <div className='card'>
            <img alt="dummy-img-5" src="https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
            <h2>Mocha martini 6</h2>
        </div>
        <div className='card'>
            <img alt="dummy-img-6" src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
            <h2>Mocha martini 7</h2>
        </div>
        <div className='card'>
            <img alt="dummy-img-7" src="https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
            <h2>Mocha martini 8</h2>
        </div>
    </main>
</>

const PageFooter = () => <>
    <footer className='pp-main-footer'>
        <p className='footer-main'>Designing, making, and selling goods of timeless design and uncompromising
            integrity—made thoughtfully, honestly, and with pride—to be enjoyed with similar intention.</p>
        <p className='footer-sub'>Let's work together.</p>
        <p className='footer-email'>animesh.s.dev@gmail.com</p>
        <p className='footer-num'>(682) 552 5735</p>
    </footer>
</>
export default function PotteryPortfolio() {
    return (<div className="pp-main-container">
        <PageHeader />
        <PageContent />
        <PageFooter />
    </div>)
}