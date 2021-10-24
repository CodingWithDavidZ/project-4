import React, {useState} from 'react'
import {Link} from 'react-router-dom'


function Login({apiURL}) {
    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    const handleLogin = (e) => {
        let attr = e.target.name;
        setInput({...input, [attr]: e.target.value});
        };

    function handleSubmit(e){
        e.preventDefault();
        fetch(`${apiURL}`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: input.username,
                password: input.password
            }),
          }).then(()=>{
              setInput({
                  username: '',
                  password: ''
          });
        });
    }




    return (
        <div id="login_box">
            <h1>Login</h1>
            <form id='user_login' autocomplete="off" onsubmit={handleSubmit}>
                <input
                    required
                    value={input.username}
                    type='text'
                    className='form_control'
                    id='username_field'
                    placeholder='Username'
                    onChange={handleLogin}
                />
                <br/>
                <input
                    required
                    value={input.password}
                    type='password'
                    className='form_control'
                    id='password_field'
                    placeholder='Password'
                    onChange={handleLogin}
                />              
            </form>
            <span>
            <button id="sign_in_button" onclick={handleSubmit}>Sign In</button>
            <Link id='sign_up' to='/signup'>Sign Up</Link> 
            </span>           
        </div>
    )
}


export default Login
