import React, { useState } from 'react';

function AccountManagement({ user }) {
  const [editPassword, setEditPassword] = useState(false);
  const [input, setInput] = useState({
    user: user.id,
    password: '',
  });

  function handleClick() {
    setEditPassword(true);
  }

  const handleChange = (e) => {
    let attr = e.target.name;
    setInput({ ...input, [attr]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: user.id,
        password: input.password,
      }),
    }).then((res) => {
      if (res.ok) {
        // res.json().then((user) => setUser(user));
        window.location.href = '/memberspage';
      } else {
        setInput({
          password: '',
        });
      }
    });
  }

  return (
    <div id='wrapper'>
      <div>
        Welcome {user.first_name} {user.last_name}
      </div>
      {!editPassword ? (
        <span>
          <h3>Change password?</h3>
          <button id='change_password_button' onClick={handleClick}>
            Yes!
          </button>
        </span>
      ) : (
        <form autocomplete='off' onSubmit={handleSubmit}>
          <input
            required
            value={input.password}
            type='password'
            className='login_input_fields'
            id='password_field'
            name='password'
            placeholder='New Password'
            onChange={handleChange}
          />
          <button id='change_password_button' onclick={handleSubmit}>
            Change
          </button>
        </form>
      )}
    </div>
  );
}

export default AccountManagement;
