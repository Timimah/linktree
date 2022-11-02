import React from "react";
import zuri from './images/zuri.png';
import I4G from './images/I4G.png'

function Footer() {
    return(
        <div>
            <hr />
            <div className="footer">
                <img src={zuri} alt="Zuri Internship" />
            </div>
            <div style={{fontWeight: 100}}>Hngi9 Frontend Task</div>
            <div>
                <img src={I4G} alt="Ingressive for Good logo" />
            </div>
        </div>
    )
}
export default Footer