import React from 'react';
import axios from 'axios'
import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import UserContext from '../../Context'
import './login.css'
import url from '../../Url'
const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { value, setValue } = useContext(UserContext)
    const history = useHistory()
    const signinUser = () => {
        if (email.length === 0) {
            alert('enter email');
        }
        else if (password.length === 0) {
            alert('enter password');
        } else {

            const data = {}
            data.email = email
            data.password = password
            axios.post( url + '/login', data).then((response) => {
                const result = response.data
                if (result.status === 'success') {
                    setValue(result.data);
                    // alert('sign in successfully')
                    history.push('/userHome');
                } else {
                    console.log(result.error);
                    alert('login fail enter valid password')
                }
            })
        }
    }

    return (
        <div>
            <div className=''>
                <div className='back'>
                    <div className="disp">
                        <h2 className='name'>LogIn</h2>
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
                            <button onClick={signinUser} className="btn btn-success btn1">
                                Signin
                            </button>
                        </div>
                        <div className='color'>
                            <p>Not registered? Register here</p>
                            <Link className="nav-link px-2 text-danger" to='/register'>Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;