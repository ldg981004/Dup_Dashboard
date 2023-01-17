/* eslint-disable */

import React from 'react';
import './rightbar.css'

function Righttop(){
    return(
        <div>
            <div className='top'>
                <div className='lb_left'>
                    <div>
                    <label className='lb_top'>SEO / Dashboard</label>
                    </div>
                    <div className='div_bottom'>
                    <label className='lb_bottom'>Dashboard</label>
                    </div>
                </div>

                <div className='lb_right'>
                    <input className='inputbox' placeholder='Type here...'></input>
                    <label className='signin'>Sign In</label>
                </div>
                
            </div>
        </div>
        

);
}

export default Righttop;