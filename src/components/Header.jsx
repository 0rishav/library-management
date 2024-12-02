import { Link } from "react-router-dom";

let login = false;

const Header = () => {
  return (
    <div>
      <div className="header">
        <h1>Library Management System</h1>
        <div className="sign-in-btn">
          <Link to={"/login"}>
            <button className="logged-in">Log In</button>
          </Link>
          <Link to={"/signup"}>
            <button className="sign-up">Sign Up</button>
          </Link>
        </div>
        {login && (
          <div className="dropdown-menu">
            <li style={{ listStyle: "none" }}>Logout</li>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
