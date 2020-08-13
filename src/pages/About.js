import React from "react";

const About = () => {
    return <div>
        <div className="container">
            <div className="row text-center">
                <header>
                    <h1>Hello, my name is Robert and I'm a coding bootcamp student at UCSD gaining expierence to become a full stack web developer. </h1>
                </header>
            </div>
            <div className="row">
                <img className="img-fluid rounded mx-auto d-block" src="https://media-exp1.licdn.com/dms/image/C4E03AQH7vcSLXLHqjQ/profile-displayphoto-shrink_200_200/0?e=1597276800&v=beta&t=agIkH0CwS0vNltE5oF-U5j-5o7Yy4UU5rU3ztCl5K7Q" alt="Robert Luttig" />
            </div>
            <div className="skills">
                <p className="text-center">Please check out my Portfolio to view my projects. <br />I have divers skills  ranging from desin, to HTML + CSS + javascript and working with API's</p>
            </div>
        </div>
    </div>

        ;
};

export default About;