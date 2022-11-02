import React from "react";
import './index.css';
import Slack from './images/slack.png'
import GitHib from './images/github.png'

function Links(){
    return (
        <div className="links">
            <div className="link">
                <a type="button" href="https://twitter.com/Enda_rae">Twitter Link</a>
            </div>
            <div className="link" id="btn_zuri">
                <a type="button" href="https://training.zuri.team">Zuri Team</a>
            </div>
            <div className="link">
                <a type="button" href="https://books.zuri.team" id="books">Zuri Books</a>
            </div>
            <div className="link" id="book_python">
                <a type="button" href={PythonLink()}>Python Books</a>
            </div>
            <div className="link" id="pitch">
                <a type="button" href="https://background.zuri.team">Background Check for Coders</a>
            </div>
            <div className="link">
                <a type="button" href="https://books.zuri.team/design-rules" id="book_design">Design Books</a>
            </div>
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