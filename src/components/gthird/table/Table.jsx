
import './table.css'

function BasicExample() {
  return (
    <table className='tb_table'>
      <thead className='tb_head'>
        <tr className='tr'>
          <th >ID</th>
          <th>LOGLEVEL</th>
          <th>LOGDATETIME</th>
          <th>LOGGER</th>
          <th>MESSAGE</th>
        </tr>
      </thead>
      <tbody className='tb_body'>
        <tr>
          <td>15</td>
          <td>LOG</td>
          <td>2022-10-19 15:01:31</td>
          <td>MAIN_SERVER</td>
          <td>CCTV변경[ID:4] [routeCamport:9799-9799] [adminID:{'->'}test] [adminPw:1]</td>
        </tr>
        
        <tr>
          <td>14</td>
          <td>LOG</td>
          <td>2022-10-19 04:58:21</td>
          <td>MAIN_SERVER</td>
          <td>CCTV변경[ID:4] [routeCamport:9897-9898] [adminID:{'->'}admin] [adminPw:admin]</td>
        </tr>

        <tr>
          <td>13</td>
          <td>LOG</td>
          <td>2022-10-17 06:22:54</td>
          <td>MAIN_SERVER</td>
          <td>CCTV변경[ID:4] [routeCamport:9897-{'>'}9897]</td>
        </tr>

        <tr>
          <td>12</td>
          <td>LOG</td>
          <td>2022-10-17 06:21:47</td>
          <td>MAIN_SERVER</td>
          <td>CCTV변경[ID:3] [routeCamport:9899-{'>'}9898]</td>
        </tr>

        <tr>
          <td>11</td>
          <td>LOG</td>
          <td>2022-10-17 05:22:25</td>
          <td>MAIN_SERVER</td>
          <td>CCTV추가[ID:4]</td>
        </tr>

      </tbody>
    </table>
  );
}

export default BasicExample;