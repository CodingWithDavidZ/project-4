import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Measurements from './components/Measurements';
import Header from './components/Header';
import MembersPage from './components/MembersPage';
import AccountManagement from './components/AccountManagement';

const loginUrl = '/api/login';
const signUpUrl = '/api/signup';
const logOutUrl = '/api/logout';
const metricsUrl = '/api/metrics';
const memberUrl = '/api/me';
const userUrl = '/api/users/';

function App() {
	const [user, setUser] = useState({});

	useEffect(() => {
		// auto-login
		fetch(`${memberUrl}`).then((r) => {
			if (r.ok) {
				r.json().then((user) => setUser(user));
			}
		});
	}, []);

	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route
						exact
						path='/'
						element={
							user && user.id ? (
								<Measurements user={user} metricsUrl={metricsUrl} />
							) : (
								<Login loginUrl={loginUrl} setUser={setUser} user={user} />
							)
						}
					/>

					<Route
						exact
						path='/signup'
						element={
							<SignUp
								signUpUrl={signUpUrl}
								user={user}
								onLogin={setUser}
								metricsUrl={metricsUrl}
							/>
						}
					/>
					<Route
						exact
						path='/measurements'
						element={
							user && user.id ? (
								<Measurements metricsUrl={metricsUrl} user={user} />
							) : (
								<Login loginUrl={loginUrl} setUser={setUser} user={user} />
							)
						}
					/>
					<Route
						exact
						path='/memberspage'
						element={
							user && user.id ? (
								<>
									<Header setUser={setUser} user={user} logOutUrl={logOutUrl} />
									<MembersPage memberUrl={memberUrl} metricsUrl={metricsUrl} />
								</>
							) : (
								<Login loginUrl={loginUrl} setUser={setUser} user={user} />
							)
						}
					/>
					<Route
						exact
						path='/accountmanagement'
						element={
							user && user.id ? (
								<AccountManagement
									memberUrl={memberUrl}
									userUrl={userUrl}
									user={user}
									setUser={setUser}
								/>
							) : (
								<Login loginUrl={loginUrl} setUser={setUser} user={user} />
							)
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
