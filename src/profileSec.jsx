import React from 'react';
import './index.css';
import Annette from './images/anne.png'
import Rdrt from './images/rdrt.png'

function ProfileSec() {
    return(
        <div className='profile_img'>
            <div className='img'>
                <img src={Annette} alt="girl" />
            </div>
        <div className='profile_name'> Annette Black </div>
        <div className='icon'>
            <img src={Rdrt} alt="" style={{paddingLeft: '0.5em', paddingTop: '0.4em'}}/>
            <p className='tooltip'>Share link</p>
        </div>
        </div>
    )
}
export default ProfileSec