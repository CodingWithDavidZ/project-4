import React, { useState } from 'react';
import Measurements from './Measurements';
import { Redirect } from 'react-router-dom';

function SignUp({ signUpUrl, user, onLogin, metricsUrl }) {
  const [input, setInput] = useState({
    first_name: '',
    last_name: '',
    birthdate: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    let attr = e.target.name;
    setInput({ ...input, [attr]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${signUpUrl}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: {
          first_name: input.first_name,
          last_name: input.last_name,
          birthdate: input.birthdate,
          username: input.username,
          password: input.password,
        },
      }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        }
      })
      .then(() => {
        setInput({
          first_name: '',
          last_name: '',
          birthdate: '',
          username: '',
          password: '',
        });
      });
  }

  if (user) return <Measurements metricsUrl={metricsUrl} user={user} />;

  return (
    <div id='sign_up_box'>
      <h1 id='join_text'>Join</h1>
      <form id='sign_up_form' autocomplete='off' onSubmit={handleSubmit}>
        <h4 className='sign_up_descriptor'>First name</h4>
        <input
          required
          value={input.first_name}
          type='text'
          className='sign_up_input_fields'
          id='first_name_field'
          name='first_name'
          placeholder='First Name'
          onChange={handleChange}
        />
        <br />
        <h4 className='sign_up_descriptor'>Last name</h4>
        <input
          required
          value={input.last_name}
          type='text'
          className='sign_up_input_fields'
          id='last_name_field'
          name='last_name'
          placeholder='Last Name'
          onChange={handleChange}
        />
        <br />
        <h4 className='sign_up_descriptor'>Date of birth</h4>
        <input
          required
          value={input.birthdate}
          type='date'
          className='sign_up_input_fields'
          id='birthdate_field'
          name='birthdate'
          placeholder='Date of Birth'
          onChange={handleChange}
        />
        <br />
        <h4 className='sign_up_descriptor'>Username</h4>
        <input
          required
          value={input.username}
          type='text'
          className='sign_up_input_fields'
          id='username_field'
          name='username'
          placeholder='Username'
          onChange={handleChange}
        />
        <br />
        <h4 className='sign_up_descriptor'>Password</h4>
        <input
          required
          value={input.password}
          type='password'
          className='sign_up_input_fields'
          id='password_field'
          name='password'
          placeholder='Password'
          onChange={handleChange}
        />
        <br />
        <input id='submit_button' type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default SignUp;
