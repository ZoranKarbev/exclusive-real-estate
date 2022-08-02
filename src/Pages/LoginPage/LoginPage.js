import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../../assets/svg/visibilityIcon.svg"

const LoginPage = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	})
	const { email, password } = formData;
	const navigate = useNavigate();
	const handleChange = (e) => {
		setFormData(prevState => ({
			...prevState,
			[e.target.id]: e.target.value
		}))
	}
	return (
		<>
			<div className="page__container">
				<h2 className="page__header">Welcome Back!</h2>
				<main>
					<form className="login-form">
						<input type="email" className="email-input" placeholder="Email" id="email" value={email} onChange={handleChange} />
						<div className="password-input-div">
							<input type={showPassword ? "text" : "password"} className="password-input" placeholder="Password" id="password" value={password} onChange={handleChange} />
							<img src={visibilityIcon} alt="show password" className="show-password" onClick={() => setShowPassword(prevState => !prevState)} />
						</div>

						<div className="login-bar">
							<p className="login-text">
								Log In
							</p>
							<button className="login-button">
								<ArrowRightIcon />
							</button>
						</div>
					</form>
					{/* Google Oath */}
					<Link to="/forgot-password" className="forgot-password-link">
						Forgot Password?
					</Link>

					<Link to="/sign-up" className="register-link">
						Don't have an account? Sign Up NOW!
					</Link>
				</main>
			</div>
		</>
	)
};

export default LoginPage;