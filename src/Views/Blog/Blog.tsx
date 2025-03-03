import './Blog.scss';

const Blog: React.FC<unknown> = () => {
    return (
        <div className="blog-container">
            <header className='main-header'>
                <h1>📘 The Code Magazine</h1>
                <nav className='blog-nav'>
                    <a href="#">Blog</a>
                    <a href="#">Challenges</a>
                    <a href="#">Flexbox</a>
                    <a href="#">CSS Grid</a>
                </nav>
            </header>
            <div className='row'>
                <article className='article-content'>
                    <header className='ac-header'>
                        <h2>The Basic Language of the Web: HTML</h2>
                        <div className='ac-auth-details'>
                            <img
                                src="src/img/laura-jones.jpg"
                                alt="Headshot of Laura Jones"
                                height="50"
                                width="50"
                            />
                            <p className='image-txt'>Posted by <strong className='main-author'>Laura Jones</strong> on Monday, June 21st 2027</p>
                        </div>
                        <img
                            src="src/img/post-img.jpg"
                            alt="HTML code on a screen"
                            className='code-image'
                        />
                        {/* <button className='like-button'>Like Post ❤️
                </button> */}
                    </header>
                    <div className='ac-content'>
                        <p>
                            All modern websites and web applications are built using three
                            <em>fundamental</em>
                            technologies: HTML, CSS and JavaScript. These are the languages of the
                            web.
                        </p>
                        <p>
                            In this post, let's focus on HTML. We will learn what HTML is all about,
                            and why you too should learn it.
                        </p>
                        <h3>What is HTML?</h3>
                        <p>
                            HTML stands for <strong>H</strong>yper<strong>T</strong>ext
                            <strong>M</strong>arkup <strong>L</strong>anguage. It's a markup
                            language that web developers use to structure and describe the content
                            of a webpage (not a programming language).
                        </p>
                        <p>
                            HTML consists of elements that describe different types of content:
                            paragraphs, links, headings, images, video, etc. Web browsers understand
                            HTML and render HTML code as websites.
                        </p>
                        <p>In HTML, each element is made up of 3 parts:</p>
                        <ol className="ol-list">
                            <li>The opening tag</li>
                            <li>The closing tag</li>
                            <li>The actual element</li>
                        </ol>
                        <p>
                            You can learn more at &nbsp;
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                                target="_blank"
                            >MDN Web Docs</a
                            >.
                        </p>
                        <h3>Why should you learn HTML?</h3>
                        <p>
                            There are countless reasons for learning the fundamental language of the
                            web. Here are 5 of them:
                        </p>
                        <ul className="ul-list-data">
                            <li>To be able to use the fundamental web dev language</li>
                            <li>
                                To hand-craft beautiful websites instead of relying on tools like
                                Worpress or Wix
                            </li>
                            <li>To build web applications</li>
                            <li>To impress friends</li>
                            <li>To have fun 😃</li>
                        </ul>
                        <p>Hopefully you learned something new here. See you next time!</p>
                    </div>
                </article>
                <aside className='related-post'>
                    <h4>Related posts</h4>
                    <ul className='unordered-list'>
                        <li className='ul-li'>
                            <img
                                src="src/img/related-1.jpg"
                                alt="Person programming"
                                width="75"
                                height="75"
                            />
                            <div className='ul-li-text'>
                                <a href="#">How to Learn Web Development</a>
                                <p className='related-author'>By Jonas Schmedtmann</p>
                            </div>
                        </li>
                        <li className='ul-li'>
                            <img src="src/img/related-2.jpg" alt="Lightning" width="75" height="75" />
                            <div className='ul-li-text'>
                                <a href="#">The Unknown Powers of CSS</a>
                                <p className='related-author'>By Jim Dillon</p>
                            </div>
                        </li>
                        <li className='ul-li'>
                            <img
                                src="src/img/related-3.jpg"
                                alt="JavaScript code on a screen"
                                width="75"
                                height="75"
                            />
                            <div className='ul-li-text'>
                                <a href="#">Why JavaScript is Awesome</a>
                                <p className='related-author'>By Matilda</p>
                            </div>
                        </li>
                    </ul>
                    <button className='like-button'>❤️ &nbsp;Like</button>
                </aside>
            </div>

            <footer className='copyright'>Copyright &copy; 2027 by The Code Magazine.</footer>
        </div>)
}

export default Blog;