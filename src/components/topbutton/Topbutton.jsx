import React from "react";
import './topbutton.css'


function topbutton(){
    return(

    <div>
        <div>
        <img className="img" alt="Cube" src="img/Cube.png"/>
        <button className="button" style={{cursor:'pointer'}} onClick={() => alert('CUBEHIDE')}>CUBEHIDE</button>
        </div>
    </div>
    
    );
}
export default topbutton;