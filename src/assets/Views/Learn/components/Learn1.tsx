const Learn1 = () => <>
    <div>
        <h2>Unordered List</h2>
        <ul>
            <li>this</li>
            <li>that</li>
        </ul>
        <h2>Ordered List</h2>
        <ol>
            <li>that</li>
            <li>
                <ul>
                    <li>hi</li>
                    <li>hi2</li>
                    <li>hi3</li>
                </ul>
            </li>
        </ol>
        <a href="https://www.apple.com">Go To Apple Site- why?</a>
        <ul>
            <li><a href="https://www.apple.com">Apple</a></li>
            <li><a href="https://www.github.com">github</a></li>
            <li><a href="https://www.wikipedia.com">wikipedia</a></li>
            <li> <a href="#infoPage">Go To Info</a></li>
        </ul>

        <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
        <p>Donec ullamcorper nulla non metus auctor fringilla.</p>

        <h2 id="infoPage">Info Section below:</h2>
        <p>Etiam porta sem malesuada magna mollis euismod.</p>
        <img alt="image-here" src="src/img/nyc.jpg" width={200} height={300} />
    </div>
</>

export default Learn1;