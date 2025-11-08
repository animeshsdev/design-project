
export default function Learn3() {
    return (
        // <div>
        //     <h1>Form controls</h1>
        //      {/* method="post" */}
        //      {/* if no action="" then it will refresh the page */}

        // <div>
        //     <h1>Form Controls</h1>
        //     <form action="">
        //         <label htmlFor="userName">User Name</label> &nbsp;
        //         <input required placeholder="enter user name" id="userName" name="userName" type="text" /> &nbsp;
        //         <input type="text"></input>
        //         <textarea name="memo" rows={10} cols={90} placeholder="Enter Memo..">
        //         </textarea> &nbsp;
        //         <input name="volRange" type="range" min={0} max={50} />&nbsp;
        //         <label htmlFor="agree">Agree</label>&nbsp;
        //         <input id="agree" name="agree" type="checkbox" />&nbsp;
        //         <label htmlFor="shirtSize">Choose Shirt Size:</label>
        //         <select name="shirtSize" id="shirtSize">
        //             <option value="s">Small</option>
        //             <option value="m">Medium</option>
        //             <option value="l">Large</option>
        //         </select>
        //         <label htmlFor="contactEmail">Email:</label>
        //         <input type="radio" value="email" name="contact" id="contactEmail"></input>
        //         <label htmlFor="contactPhone">Phone:</label>
        //         <input type="radio" value="phone" name="contact" id="contactPhone"></input>
        //         <button type="submit">Add</button>
        //     </form>
        // </div>

        <div>
            <h1>Your Course Landing Page</h1>
            <form action="">
                <div>
                    <label htmlFor="courseTitle">Course Title</label> &nbsp;
                    <input id="courseTitle" type="text" name="courseTitle"></input>
                </div>
                <div>
                    <div><label htmlFor="cd">Course Description</label></div>
                    <textarea id="cd" rows={10} cols={30} name="courseDesc"></textarea>
                </div>
                <div>
                    <label htmlFor="skillLvl">Skill Level</label> &nbsp;
                    <select id="skillLvl" name="skillLvl">
                        <option value="b">Beginner</option>
                        <option value="i">InterMediate</option>
                        <option value="a">Advanced</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="readyBox">Ready to publish the course?</label> &nbsp;
                    <input id="readyBox" type="checkbox" name="ready" value="userReady"></input>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>

            {/* //Simpe Table Struct */}
            <div>
                <table>
                    <thead>
                        <th>
                            <td>Item</td>
                            <td>Price</td>
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Hot Chocolate
                            </td>
                            <td>
                                $ 2.30
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Hot Chocolate2
                            </td>
                            <td>
                                $ 6.30
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Hot Chocolate3
                            </td>
                            <td>
                                $ 12.30
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

