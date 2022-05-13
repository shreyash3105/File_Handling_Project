import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './list.css'
import UserContext from '../Context';
import UserNavbar from './nav';
import url from '../Url'

const List = () => {
    const [list, setList] = useState([])
    const history=useHistory()
    const {value,setValue}=useContext(UserContext)
    useEffect(() => {
        getList()
    }, [])

    const getList = () => {
        axios.get( url + '/list/' + value.user_id ).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                setList(result.data)
            } else {
                console.log(result.error);
                alert('error while loading list of brands')
            }
        })
    }


    return (
        <div>
            <UserNavbar />
            <div className="outer">
                {list.map((l) => {
                    return <>
                        <div className='card'>
                            <div className='unnik'>Id : {l.unique_id}</div>
                            <img className='img' src={ url +'/' + l.image} alt="d" />
                            <div className='btnn'>    
                                <div className="btn1 btn btn-primary" 
                                    onClick={()=>{ history.push('/download',{l:l})}}>
                                    Download                             
                                </div>
                                <div className="btn2 btn btn-danger" 
                                    onClick={()=>{ history.push('/deleteImage',{l:l})}}>
                                    Delete                              
                                </div>
                            </div>
                        </div>
                    </>
                })}
            </div>
        </div>
    );
};

export default List;