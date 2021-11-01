import React from 'react';
import { Link } from 'react-router-dom';

function Header({ setUser, logOutUrl }) {
  function handleLogout() {
    fetch(`${logOutUrl}`, { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className='header'>
      <Link className='header_link' to='/accountmanagement'>
        Manage Account
      </Link>
      <Link
        className='header_link'
        id='log_out_button'
        onClick={handleLogout}
        to='/'
      >
        Sign Out
      </Link>
    </div>
  );
}

export default Header;
