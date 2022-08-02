import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../../assets/svg/visibilityIcon.svg"

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const { name, email, password } = formData;
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
          <form className="signup-form">
            <input type="text" className="name-input" placeholder="Name" id="name" value={name} onChange={handleChange} />
            <input type="email" className="email-input" placeholder="Email" id="email" value={email} onChange={handleChange} />
            <div className="password-input-div">
              <input type={showPassword ? "text" : "password"} className="password-input" placeholder="Password" id="password" value={password} onChange={handleChange} />
              <img src={visibilityIcon} alt="show password" className="show-password" onClick={() => setShowPassword(prevState => !prevState)} />
            </div>

            <div className="signup-bar">
              <p className="signup-text">
                Sign Up
              </p>
              <button className="signup-button">
                <ArrowRightIcon />
              </button>
            </div>
          </form>
          {/* Google Oath */}
          <Link to="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </Link>
          <Link to="/login" className="register-link">
            Aleready have an account? Log In NOW!
          </Link>
        </main>
      </div>
    </>
  )
};

export default SignUpPage;