import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AccountManagement({ user, userUrl }) {
	const [editPassword, setEditPassword] = useState(false);
	const navigate = useNavigate();
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
		fetch(`${userUrl}${user.id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				user: user.id,
				password: input.password,
			}),
		}).then((res) => {
			if (res.ok) {
				navigate('/memberspage');
			} else {
				setInput({
					password: '',
				});
			}
		});
	}

	return (
		<div id='manage_account_box'>
			<div>
				Welcome:{' '}
				<strong>
					{user.first_name} {user.last_name}
				</strong>
			</div>
			{!editPassword ? (
				<span>
					<h3>Change password?</h3>
					<button id='change_password_button' onClick={handleClick}>
						Yes!
					</button>
				</span>
			) : (
				<form autoComplete='off' onSubmit={handleSubmit}>
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
					<button id='change_password_button' onClick={handleSubmit}>
						Change
					</button>
				</form>
			)}
		</div>
	);
}

export default AccountManagement;
