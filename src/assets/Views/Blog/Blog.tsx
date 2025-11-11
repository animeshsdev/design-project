import './Blog.styles.scss';
const Header = () => {
    return (<div className='blog-header-container'>
        <h1> Animesh's Blog Post</h1>
        <p>Typography is one of the most important elements of front end design and development! In this exercise, we'll play around with some of the common CSS properties to manage and style our fonts by making a nice blog post-like web page.</p>
        <hr />
    </div>)
}

const Body = () => {
    return (<div className='blog-body-container'>
        <h2>All About Typography</h2>
        <p className='para-1'>Headlines, like this one, are great ways to quickly capture the
            reader's attention, to give them a sumary, intro, or other important
            information in a web page. You can use
            <code>text-transform: uppercase;</code> to make a whole body of text
            uppercase using CSS if you really need to grab attention!</p>
        <p className='para-2'>Okay, now that we're done screaming in the headline in all caps (which you should do sparingly) - it's time to chat more about other components of typography. You'll notice that we chose a nice serif font for our headings, and a nice <code>sans-serif</code> font for our body text. This is intentional! Serif font faces are generally considered pretty inaccessible as a body text style, since at smaller sizes it's much more difficult to visually differentiate the characters from one another. At large font sizes, such as those seen in most headings, serif fonts are considered fine, since the larger style makes it easier to see where serif characters start and where they end.</p>
        <p className='para-3'>But wait! What if you want more than just normal text on your page? Another common thing you might see in web pages are quotes. To make quotes, we can use the <code>blockquote</code> element and style it accordingly, so it stands out a bit as a non-body text quote.</p>

        <blockquote className='quote'>"This is a quote - you probably knew that at a glance since we gave it some nice styling. Pretty nice, huh? A great lesson in User Experience Design, where we take special care to implement our web page in a way that makes it pleasant and intuitive for our users/readers. Differentiating our different typography components visually makes information much more organized and easier to digest for our users."
            <cite>– A wise person</cite>
        </blockquote>
        <hr />
        <h3>a new section</h3>
        <p className='para-4'>And just like that, we've got a new section of content separated by a <code>hr</code> element (a 'horizontal rule' or a divider) and a new heading. Isn't putting content together fun?</p>
        <p className='para-5'>Notice as well that when we entered in the H3 content, it was all lowercase, but now it's in a nice Title Case, where the first letter of each word is capitalized. We did that with CSS! Using <code>text-transform: capitalize;</code> we can implement title cased content.</p>
        <h4>Heading 4</h4>
        <p className='para-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae est dapibus, viverra metus ac, fermentum libero. Integer lobortis enim ac arcu malesuada ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h5>Heading 5</h5>
        <p className='para-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquid aspernatur nesciunt alias nam excepturi labore at numquam impedit ex minus hic tenetur sed ipsa, amet perspiciatis velit commodi pariatur.</p>
        <h6>Heading 6</h6>
        <p className='para-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus optio consequuntur ullam nostrum quas autem repudiandae suscipit culpa consectetur. Quia animi, sed necessitatibus numquam vero voluptatem officia dignissimos libero fuga.</p>
        <h3>Common Font Sizing Approaches</h3>
        <h4><code>px</code> (pixels)</h4>
        <p className='para-9'>Pixels are the simplest way to hard code your font size. By default the browser sets the root font size to 16px, but you can change the font size in the body element or any other HTML element by setting font-size to any number of px.</p>
        <p className='para-10'></p>
        <h4><code>em</code></h4>
        <p className='para-11'>units size font relative to the parent element. For example, if the body element is 16px, and a nested div element's font size is set to 1.5em, the browser will multiply 16px x 1.5, resulting in 24px font in the <code>div</code>.</p>
        <h4><code>rem</code> (root em)</h4>
        <p className='para-12'>Root em units are similar to <code>em</code>, but they are relative to the root font size instead of the parent element of whatever is being styled. For example, if the root font size (the font size of the body element) is set to 16px, and we have a p element nested many layers down with a font-size set to 2rem, that paragraph will have 32px font. If the body font size ever changes, this paragraph will also change accordingly.</p>
        <h3>Which one do I use?</h3>
        <p className='para-13'>Great question! Generally, people try to stick to using em or rem over px, since they make responsive typography that scales up and down across different device widths much easier. Using <code>px</code> for your font sizes is not as dynamic, and you may find that writing media queries to update all the various element font sizes in pixels at different screen widths is not the most scalable approach to typography.</p>
        <p className='para-14'>Between <code>em</code> and <code>rem</code>, <code>rem</code> has a nice advantage of all elements being relative to one single root font value, where nested elements with parent/child font size dependencies can still be hard to manage with em units. When writing responsive styles, rem allows you to simply update the root font size at different screen sizes and all elements using rem units will adjust themselves accordingly creating a super easy-to-manage typography size system.</p>
        <p className='para-15'>In small projects you may not have an issues hard coding pixelage, but it's always important to understand the drawbacks of writing styles that may not be responsive or dynamic.</p>
    </div>)
}

const Footer = () => {
    return (<footer className='blog-footer-container'>
        <nav className='footer-nav'>
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">More Info</a></li>
            </ul>
        </nav>
    </footer>)
}

const Blog = () => {
    return (<div className='blog-main-container'>
        <Header />
        <p className='date-time-title'>12.31.2050 | <span className='date-time-sub-title'>ALL ABOUT CSS BLOG</span></p>
        <Body />
        <Footer />
    </div>)
}

export default Blog;