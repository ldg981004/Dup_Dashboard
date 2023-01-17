/* eslint-disable */
import './gfirst.css';

function first(){
    return(
        <div>
            <div>
            <div>
                <label className='index1'>보드정보</label>
            </div>
            </div>

            <div className='sepfirst'>
                <div className='gf'>
                    <div className='square'>
                        <div className='lb_key'>
                            <label className='key'>IP</label>
                        </div>
                        <div className='value'>
                            <label >192.168.0.101</label>
                        </div>
                    </div>
                    <div className='img_pos'>
                        <img className="smile" alt="Smile" src="img/Smile.png"/>
                    </div>
                </div>
            
                <div className='gf'>
                    <div className='square'>
                        <div className='lb_key'>
                            <label className='key'>DNS</label>
                        </div>
                        <div className='value'>
                            <label >168.126.63.1</label>
                        </div>
                    </div>
                </div>

                <div className='gf'>
                    <div className='square'>
                        <div className='lb_key'>
                            <label className='key'>GateWay</label>
                        </div>
                        <div className='value'>
                            <label >192.168.0.1</label>
                        </div>
                    </div>
                </div>

                <div className='gf'>
                    <div className='square'>
                        <div className='lb_key'>
                            <label className='key'>SubnetMask</label>
                        </div>
                        <div className='value'>
                            <label >255.255.255.0</label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default first;
