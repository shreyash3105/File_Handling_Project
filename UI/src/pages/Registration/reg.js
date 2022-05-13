import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './reg.css'
import url from '../../Url'
const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const history = useHistory()

    const registerUser = () => {
        if (email.length === 0) {
            alert('enter email');
        }
        else if (password.length === 0) {
            alert('enter password');
        } else if (firstName.length === 0) {
            alert('enter firstName');
        } else if (lastName.length === 0) {
            alert('enter lastName');
        } else if (phone.length === 0) {
            alert('enter phone');
        } else {

            const data = {}
            data.email = email
            data.password = password
            data.phone = phone
            data.firstName = firstName
            data.lastName = lastName

            axios.post( url +'/register', data).then((response) => {
                const result = response.data
                if (result.status === 'success') {
                    alert('registration successfull')
                    history.push('/')
                } else {
                    console.log(result.error);
                    alert('registration failed')
                }
            })
            
        }
    }

    return (
        <div>
            <div className='signup-page'>
                <div className='back1'>
                    <div className="disp">
                        <h2 className='name'>Registeration</h2>
                        <div >
                            <label className='color'>First Name</label>
                            <input
                                onChange={(event) => {
                                    setFirstName(event.target.value)
                                }}
                                placeholder="enter your first name"
                                className="form-control"
                                type="text"
                            />
                        </div>
                        <div >
                            <label className='color'>Last Name</label>
                            <input
                                onChange={(event) => {
                                    setLastName(event.target.value)
                                }}
                                placeholder="enter your last name"
                                className="form-control"
                                type="text"
                            />
                        </div>
                        <div >
                            <label className='color'>Phone</label>
                            <input
                                onChange={(event) => {
                                    setPhone(event.target.value)
                                }}
                                placeholder="enter Phone no"
                                className="form-control"
                                type="text"
                            />
                        </div>
                        <div >
                            <label className='color'>Email</label>
                            <input
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}
                                placeholder="enter your email"
                                className="form-control"
                                type="email"
                            />
                        </div>
                        <div >
                            <label className='color'>Password</label>
                            <input
                                onChange={(event) => {
                                    setPassword(event.target.value)
                                }}
                                placeholder="enter your password"
                                className="form-control"
                                type="password"
                            />
                        </div>
                        <div >
                            <button onClick={registerUser} className="btn btn-success btn1">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;