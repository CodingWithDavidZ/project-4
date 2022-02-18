import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ setUser, logOutUrl, user }) {
	const navigate = useNavigate();

	async function handleLogout() {
		await fetch(`${logOutUrl}`, { method: 'DELETE' }).then((r) => {
			if (r.ok) {
				setUser(null);
				navigate('/');
			}
		});
		console.log('Empty user check', user);
	}

	return (
		<div className='header'>
			<Link className='header_link' to='/accountmanagement'>
				Manage Account
			</Link>
			<button
				className='header_link'
				id='log_out_button'
				onClick={handleLogout}
			>
				Sign Out
			</button>
		</div>
	);
}

export default Header;
