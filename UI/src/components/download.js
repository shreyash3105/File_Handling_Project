import React,{useState} from 'react';
import axios from 'axios';
import fileDownload from 'js-file-download';
import { useHistory, useLocation } from 'react-router-dom';
import '../pages/LogIn/login.css';
import url from '../Url';

const Download = () => {

    const history = useHistory();
    const location = useLocation();
    const [unId,setUnId] = useState('');
    const item = location.state.l;
    const handleClick = (url, filename) => {
        if(unId === item.unique_id){
            axios.get(url, {
                responseType: 'blob',
              })
              .then((res) => {
                fileDownload(res.data, filename+'.jpg')
                history.push('list')
            })
        }else{
            alert('failed to download, please Enter correct id')
            history.push('list')
        }
        
    }
      return (
        <center>
            <div className='disp3'>
                  <label></label>
                  <input
                      onChange={(event) => {
                        setUnId(event.target.value)
                      }}
                      placeholder="enter unique id"
                      className="form-control"
                      type="text"
                  />
              </div>
            <button className='btn btn-success' onClick={() => { handleClick(url + '/' + item.image , 'sample')}}>
            Download</button>
        </center>
      );
}

export default Download;