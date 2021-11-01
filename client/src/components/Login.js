import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ loginUrl, setUser }) {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const handleLogin = (e) => {
    let attr = e.target.name;
    setInput({ ...input, [attr]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${loginUrl}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: input.username,
        password: input.password,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
        window.location.href = '/measurements';
      } else {
        setInput({
          username: '',
          password: '',
        });
      }
    });
  }

  return (
    <div id='login_box'>
      <h1>Login</h1>
      <form id='user_login' autocomplete='off' onSubmit={handleSubmit}>
        <h4 className='login_descriptor'>Username</h4>
        <input
          required
          value={input.username}
          type='text'
          className='login_input_fields'
          id='username_field'
          name='username'
          placeholder='Username'
          onChange={handleLogin}
        />
        <br />
        <h4 className='login_descriptor'>Password</h4>
        <input
          required
          value={input.password}
          type='password'
          className='login_input_fields'
          id='password_field'
          name='password'
          placeholder='Password'
          onChange={handleLogin}
        />
        <br />
        <span>
          <button id='sign_in_button' onclick={handleSubmit}>
            Sign In
          </button>
          <Link id='sign_up' to='/signup'>
            Sign Up
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
