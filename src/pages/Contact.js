import React from "react";

const Contact = () => {
    return <div className="container">
        <div className="row text-center">
            <header>
                <h1>Please find my contact information and resume below</h1>
            </header>
        </div>
        <div className="row">
            <ul>
                <li> <a href="https://github.com/robertluttig" target="_blank"> Link to GitHub profile</a> </li>
                <li><a href=" https://www.linkedin.com/in/robert-luttig-88b2b170" target="_blank"> Link to LinkedIn profile</a></li>
                <li><a href="https://drive.google.com/file/d/1Y2v-MlfzsbJubaVIL01Im7FmSlFm_yJp/view?usp=sharing" target="_blank"> Resume PDF</a></li>
                <li>Email: robert.luttig@gmail.com</li>
            </ul>
        </div>
    </div>;
};

export default Contact;