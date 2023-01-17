
/* eslint-disable */

import './App.css';
import LTButton from './components/topbutton/Topbutton';
import RTBar from './components/rightbar/Rightbar';
import LBMenu from './components/leftmenu/leftmenu';
import Gridfirst from './components/gfirst/Gfirst';
import Girdsecond from './components/gsecond/Gsecond';
import Gridthird from './components/gthird/Gthird';

function App() {
  return (
    <div className="main-container">

      <div className='left'>

        <div className='left-top'>
          <div className='box'>
            <LTButton/>
          </div>
        </div>

        <div className='left-bottom'>
          <div className='box'>
            <LBMenu/>
          </div>
        </div>

      </div>

      <div className='right'>
        
        <div className='right-top'>
          <div>
            <RTBar/>
          </div>
        </div>

        <div className='right-bottom'>
          <div>
            <Gridfirst/>
          </div>

          <div>
            <Girdsecond/>
          </div>

          <div>
            <Gridthird/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
