import '../styles/global.css';
import '../styles/index.css';
import cuLogo from '../assets/cuLogoUAR.png'
import { Link } from 'react-router-dom';

const Header = ()=>{

    return (

        <header className="header">
          <div className="flex-title">
            <Link to={"/"} className="logo">
                  <img src={cuLogo} alt="Cu-logo" className="logo-image" />
            </Link>
            <div className="title">
              <h3 className="title-text">KISII UNIVERSITY CHRISTIAN </h3>
              <h3 className="title-text">UNION MAIN CAMPUS</h3>
              <div className="nav-one--hidden">
                <div className="signUp-btn">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                </div>
                <div className="Login-btn">
                  <a href="#contacts" className="nav-link">
                    Contact
                  </a>
                </div>
                <div className="About-btn">
                  <a href="" className="nav-link">
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="nav">
            <div className="nav-one">
            <div className="signUp-btn">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                </div>
                <div className="Login-btn">
                  <a href="#contacts" className="nav-link">
                    Contact
                  </a>
                </div>
                <div className="About-btn">
                  <a href="" className="nav-link">
                    About Us
                  </a>
                </div>
            </div>
          </div>
        </header>
)}

export default Header