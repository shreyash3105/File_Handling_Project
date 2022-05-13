import React from 'react';
import axios from 'axios'
import { useHistory, useLocation } from 'react-router-dom';
import './list.css'
import UserNavbar from './nav';
import url from '../Url'

const DeleteImage = () => {

    const history=useHistory()
    const location=useLocation()
    const item=location.state.l

    const deleteImage = () => {
        axios.delete(url + '/list/'+item.unique_id).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                alert('successfully deleted')
                history.push('/list')    
            }
            else {
                alert('error occured while deleting image')
            }
        })
    }

    return (
        <div>
            <UserNavbar />
            <center>
                <h3>Do you really want to delete this file?</h3>
                <div><img className='img2' src={ url + '/' + item.image} alt="" /></div>
                <button className="bt btn btn-danger" onClick={deleteImage}>Delete</button>
                <button className="bt btn btn-secondary" onClick={() => { history.push('/list') }}>Cancel</button>
            </center>
        </div>
    );
};

export default DeleteImage;