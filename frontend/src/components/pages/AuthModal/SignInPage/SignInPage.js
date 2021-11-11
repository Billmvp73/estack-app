import React from 'react';
import { EmailPassBox } from '../EmailPassBox/EmailPassBox';
import { SignInButton } from '../SignInButton/SignInButton';
import './SignInPage.css';
import {
	AUTH_EMAIL,
	AUTH_PASSWORD,
	AUTH_SIGNIN_RESET,
	AUTH_SOCIAL,
	AUTH_GOOGLE,
} from '../strings/en.js';
import { Link } from 'react-router-dom';
import { GoogleButton } from '../GoogleButton/GoogleButton';
import { useState } from 'react';
import Axios from 'axios';

function SignInPage({ isOpen, onModalToggle, setIsLoggedIn }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginStatus, setLoginStatus] = useState('');
	const [emailStatus, setEmailStatus] = useState('');
	const [passwordStatus, setPasswordStatus] = useState('');

	const login = () => {
		setEmailStatus('');
		setPasswordStatus('');

		Axios.post('http://localhost:3001/users/login', {
			email: email,
			password: password,
		})
			.then((response) => {
				setLoginStatus(response.data.message);
				check();
			})
			.catch((err) => {
				console.log(err);
			});
		console.log('LOGIN');
		console.log(email);
	};

	function closeModal() {
		onModalToggle(false);
	}

	const check = () => {
		if (loginStatus === 'logged in') {
			setEmailStatus(loginStatus);
			closeModal();
		} else if (loginStatus === 'Email Address not found') {
			setEmailStatus(loginStatus);
		} else if (loginStatus === 'Wrong Password') {
			setPasswordStatus(loginStatus);
		}
	};

	return (
		<>
			<div
				className="contentContainer"
				style={{
					display: isOpen ? 'block' : 'none',
				}}
			>
				{/*temporaroly add this to view logginStatus */}

				<h3 className="authEmail">
					Email <span className="Warning-Text">{emailStatus}</span>
				</h3>
				<EmailPassBox
					text={AUTH_EMAIL}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<h3 className="authPassword">
					Password{' '}
					<span className="Warning-Text">{passwordStatus}</span>
				</h3>
				<EmailPassBox
					text={AUTH_PASSWORD}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<div className="signInButton">
					<SignInButton text="Sign in" onClick={login} />
				</div>
				<div className="forgotPassword">
					<Link to="#">
						<p className="forgotPasswordText">
							{AUTH_SIGNIN_RESET}
						</p>
					</Link>
				</div>
				{/* Social Authentication */}
				<hr className="hrLineTwo" />
				<div className="authSocialText">{AUTH_SOCIAL}</div>
				<GoogleButton text={AUTH_GOOGLE} />
			</div>
		</>
	);
}

export default SignInPage;
