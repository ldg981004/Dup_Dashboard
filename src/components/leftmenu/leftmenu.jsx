import React from "react";
import './leftmenu.css'



function leftmenu(){
    return(
            <div className="btn_group">
                <div>
                    <div className="space">
                        
                    <label className="menu_contents">MAIN</label>
                    
                    </div>
                </div>
                
                
                <div className="space">
                    <div>
                    <img className="first_img" alt="Cube" src="img/Cube.png"/>
                    <button className="menu_button" style={{cursor:'pointer'}} onClick={() => alert('Dashboard')}>Dashboard</button>
                    </div>
                </div>
                
                <div className="space">
                    <img className="first_img" alt="Cube" src="img/Cube.png"/>
                    <button className="menu_button" style={{cursor:'pointer'}} onClick={() => alert('CCTVList')}>CCTVList</button>
                </div>

                <div className="space">
                    <img className="first_img" alt="Cube" src="img/Cube.png"/>
                    <button className="menu_button" style={{cursor:'pointer'}} onClick={() => alert('CCTVDiscover')}>CCTVDiscover</button>

                </div>

                <div className="space">
                <label className="menu_contents">SYSTEM</label>
                </div>

                <div className="space">
                    <img className="first_img" alt="Cube" src="img/Cube.png"/>
                    <button className="menu_button" style={{cursor:'pointer'}} onClick={() => alert('Logs')}>Logs</button>

                </div>

                <div className="space">
                    <img className="first_img" alt="Cube" src="img/Cube.png"/>
                    <button className="menu_button" style={{cursor:'pointer'}} onClick={() => alert('Sign In')}>Sign In</button>

                </div>
                
                <div>
                    <img className="first_img" alt="Cube" src="img/Cube.png"/>
                    <button className="menu_button" style={{cursor:'pointer'}}  onClick={() => alert('Key Setting')}>Key Setting</button>
                </div>
            </div>
    );

    
}
export default leftmenu;