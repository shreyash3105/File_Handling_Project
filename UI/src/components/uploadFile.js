import React, {useContext} from 'react';
import axios from 'axios'
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import '../pages/LogIn/login.css'
import './uploadFile.css'
import UserContext from '../Context';
import UserNavbar from './nav';
import url from '../Url'
const UploadFile = ({userData}) => {
    const [Image, setImage] = useState(undefined)
    const {value,setValue}=useContext(UserContext)
    const history = useHistory()

    const saveImage = () => {
        
            const data = new FormData()
            data.append('image',Image)
            console.log(value.user_id);
            axios.post( url + '/saveImage/'+ value.user_id, data).then((response) => {
                const result = response.data
                if (result.status === 'success') {
                    alert('image added successfully')
                    history.push('/list')
                } else {
                    console.log(result.error);
                    alert('failed to upload image')
                }
            })
    }

    return (
        <div>
            <UserNavbar />
            <div className=''>
                <div className='back7'>
                    <div className="disp">
                        <h2 className='name'>Upload File</h2>
                        <div >
                            <label className='color'>File</label>
                            <input
                                onChange={(event) => {
                                    setImage(event.target.files[0])
                                }}
                                className="form-control"
                                type="file"
                                accept="image/*"
                            />
                        </div>
                        <div >
                            <button onClick={saveImage} className="btn btn-success btn1">
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadFile;