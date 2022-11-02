import React from "react";
import './index.css';
import Slack from './images/slack.png'
import GitHib from './images/github.png'

function Links(){
    return (
        <div className="links">
            <div className="link">
                <a href="#">Twitter Link</a>
            </div>
            <div className="link">
                <a href="https://book.zuri.team" id="books">Zuri Books</a>
            </div>
            <div className="link" id="btn_zuri">
                <a href="https://training.zuri.team">Zuri Team</a>
            </div>
            <div className="link" id="book_python">
                <a href={PythonLink()}>Python Books</a>
            </div>
            <div className="link" id="pitch">
                <a href="https://background.zuri.team">Background Check for Coders</a>
            </div>
            <div className="link" id="book_design">Design Books</div>
            <div style={{padding: '1em'}}>
                <img src={Slack} alt="Slack"  style={{padding: '0.2em'}} />
                <img src={GitHib} alt="GitHub"  style={{padding: '0.2em'}} />
            </div>
        </div>
    )

function PythonLink() {
    return "https://books.zuri.team/python-for-beginners?ref_id=Enda-Rae";
}
}
export default Links