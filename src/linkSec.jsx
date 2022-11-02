import React from "react";
import './index.css';
import Slack from './images/slack.png'
import GitHib from './images/github.png'

function Links(){
    return (
        <div className="links">
            <div className="link">Twitter Link</div>
            <div className="link">Zuri Team</div>
            <div className="link">Python Books</div>
            <div className="link">Background Check for Coders</div>
            <div className="link">Design Books</div>
            <div style={{padding: '1em'}}>
                <img src={Slack} alt="Slack"  style={{padding: '0.2em'}} />
                <img src={GitHib} alt="GitHub"  style={{padding: '0.2em'}} />
            </div>
        </div>
    )}
export default Links