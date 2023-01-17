import './gthird.css';
import Table from './table/Table';

function third(){
    return(

        <div>
            <div className='septhird'>
                <div>
                    <label className='index3'>CCTV 정보</label>
                    <div className='tg'>
                        <div>
                            <div className='imgboard'>
                                <img className="cctv" alt="Camera" src="img/Camera.png"/>
                            </div>
                            <div className='lb_contents'>
                                <label className='title'>CCTV NO.4[9799/Media]</label>
                            </div>
                            <div className='lb_contents'>
                                <div>
                                <label className='contents'>º 등록시간:2022-10-17 05:22:24</label>
                                </div>
                                <div>
                                <label className='contents'>º 카메라IP:192.138.0.73</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div> 
                    <label className='index3'>로그 정보</label>
                    <div className='tg'>
                        <div className='table'>
                            <Table/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default third;