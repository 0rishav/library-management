import { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const handleInputChange = (e) => {
        setFormData(e.target.value);
      };
  return (
    <div>
      <div className="register-container">
        <div className="register-box">
          <h2 className="title">Welcome to Login Page</h2>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="login-link">
              <p>
                {"Don't"} have an account?{" "}
                <a href="/signup" className="link-text">
                  Sign Up
                </a>
              </p>
            </div>

            <button type="submit" className="register-btn">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login