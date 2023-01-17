import './gsecond.css';
import {CircularProgressbar} from 'react-circular-progressbar';
import './circle.css';


function second(){
    
    return(
        
        <div>
            <div>
                <label className='index2'>보드상태</label>
            </div>
            <div className='sepsecond'>
                <div className='sg1'>
                    <div>
                        <div className='name'>
                            <label>CPU</label>
                        </div>
        
                        <div className='circlebar'>
                            <CircularProgressbar
                            value={70}
                            text='70%'
                            circleRatio = {1}
                            />        
                        </div>

                        <div className='subname'>
                            <label>사용량</label>
                        </div>

                        <div className='rectangle'> 
                        </div>
                    </div>
                </div>

                <div className='sg1'>
                <div>
                    <div className='name'>
                        <label>Memory</label>
                    </div>
    
                    <div className='circlebar'>
                        <CircularProgressbar
                        value={2.2}
                        text='2.2%'
                        circleRatio = {1}
                        />        
                    </div>

                    <div className='subname'>
                        <label>사용량</label>
                    </div>

                    <div className='rectangle'> 
                        </div>

                    </div>
                </div>

                <div className='sg1'>
                <div>
                    <div className='name'>
                        <label>HDD</label>
                    </div>
    
                    <div className='circlebar'>
                        <CircularProgressbar
                        value={45}
                        text='45%'
                        circleRatio = {1}
                        />        
                    </div>

                    <div className='subname'>
                        <label>사용량</label>
                    </div>

                    <div className='rectangle'> 
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    );
}

export default second;