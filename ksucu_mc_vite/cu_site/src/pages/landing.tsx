import '../styles/index.css';
import '../styles/global.css';
import cuLogo from '../assets/cuLogoUAR.png'
import introVid from '../assets/20230501_091418.jpg'
import Footer from '../componenets/footer';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const handleNavToggle = () => {
    document.body.classList.toggle('nav-open');
    };
    
  return (
    <>
      <header className="header">
        <div className="flex-title">
          <div className="logo">
            <img src={cuLogo} alt="Cu-logo" className="logo-image" />
          </div>
          <div className="title">
            <h3 className="title-text">KISII UNIVERSITY CHRISTIAN </h3>
            <h3 className="title-text">UNION MAIN CAMPUS</h3>

            <div className="nav-one--hidden">
            <Link to={"/signUp"} className="signUp-btn">Sign up</Link>
            <Link to={'/signIn'} className="Login-btn">Log in</Link>
              <div className="About-btn">
                <a href="" className="nav-link">
                  About us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="nav">
          <div className="nav-one">
            <Link to={"/signUp"} className="signUp-btn">Sign up</Link>
            <Link to={'/signIn'} className="Login-btn">Log in</Link>
            <div className="About-btn">About us</div>
          </div>

          <div className="row" id="hambuger">
            <button className="nav-toggle__btn" onClick={handleNavToggle}>
              <div className="hambuger"></div>
            </button>
          </div>
        </div>

        <div className="main-quick--links">
            <h3 className="main-quick--links---text">Quick Links</h3>
            <ul className="quick-nav--links">
                <li className="quick-item"><a href="#" className="quick-item--link">Win a Soul</a></li>
                <hr />
                <li className="quick-item"><a href="#" className="quick-item--link">Media</a></li>
                <hr />
                <li className="quick-item"><a href="#" className="quick-item--link">Constitution</a></li>
                <hr />
                <li className="quick-item"><a href="#" className="quick-item--link">Library</a></li>
                <hr />
                
                  <li className="quick-item"><Link to="/financial" className="quick-item--link" >Financials</Link></li>
                
                <hr />
            </ul>

        </div>

        <div className="intro-video--header">
            <div className="video-intro">
                <img src={introVid} alt="" />
            </div>
            <div className="side-bar--links">
                <h3 className="quick-links">Quick Links</h3>
                <ul className="quick-nav--links">
                    <li className="quick-item"><a href="#" className="quick-item--link">Win a Soul</a></li>
                    <li className="quick-item"><a href="#" className="quick-item--link">Media</a></li>
                    <li className="quick-item"><a href="#" className="quick-item--link">Constitution</a></li>
                    <li className="quick-item"><a href="#" className="quick-item--link">Library</a></li>
                    <li className="quick-item"><Link to="/financial" className="quick-item--link" >Financials</Link></li>
                </ul>
            </div>
        </div>

      </header>

      <div className="main">
        
      <div className="call-to-action-text">
            <p className="cta-text">JOIN A NON-DENOMINATIONAL CHRISTIAN STUDENT ASSOCIATION</p>
        </div>

            <div className="main-flex">
                <div className="main-section--flex">
                    <div className="ministries">
                        <h3 className="ministries-title category-title">MINISTRIES</h3>
                        <ol className="ministries-list category-list">
                            <li className="ministries-item"><Link to={"/ministries#wananzambe"} className="ministries-item--link">Wananzambe</Link></li>
                            <li className="ministries-item"><Link to={"/ministries#pw"} className="ministries-item--link">P&W</Link></li>
                            <li className="ministries-item"><Link to={"/ministries#hs"} className="ministries-item--link">High School</Link></li>
                            <li className="ministries-item"><Link to={"/ministries#creativity"} className="ministries-item--link">Creativity</Link></li>
                            <li className="ministries-item"><Link to={"/ministries#ushering"} className="ministries-item--link">Ushering</Link></li>
                            <li className="ministries-item"><Link to={"/ministries#cs"} className="ministries-item--link">Church School</Link></li>
                            <li className="ministries-item"><Link to={"/ministries#compassion"} className="ministries-item--link">Compassion</Link></li>
                            <li className="ministries-item"><Link to={"/ministries#intercessory"} className="ministries-item--link">Intecessory</Link></li>
                        </ol>
                    </div>
                    <div className="products-splitter"></div>
                    <div className="ET">
                        <h3 className="ET-title category-title">ET'S</h3>
                        <ol className="ET-list category-list">
                            <li className="ET-item"><Link to={"/ets#rivet"} className="ET-item--link">RIVET</Link></li>
                            <li className="ET-item"><Link to={"/ets#weso"} className="ET-item--link">WESO</Link></li>
                            <li className="ET-item"><Link to={"/ets#eset"} className="ET-item--link">ESET</Link></li>
                            <li className="ET-item"><Link to={"/ets#cet"} className="ET-item--link">CET</Link></li>
                            <li className="ET-item"><Link to={"/ets#net"} className="ET-item--link">NET</Link></li>
                        </ol>
                    </div>

                    
                <div className="products-splitter products-splitter--hidden"></div>
                </div>
                <div className="main-section--flex">
                    <div className="boards">
                        <h3 className="boards-title category-title">BOARDS</h3>
                        <ol className="boards-list category-list">
                            <li className="boards-item"><a href="#" className="boards-item--link">Board one</a></li>
                            <li className="boards-item"><a href="#" className="boards-item--link">Board two</a></li>
                            <li className="boards-item"><a href="#" className="boards-item--link">Board three</a></li>
                            <li className="boards-item"><a href="#" className="boards-item--link">Board four</a></li>
                            <li className="boards-item"><a href="#" className="boards-item--link">Board five</a></li>
                            <li className="boards-item"><a href="#" className="boards-item--link">Board six</a></li>
                        </ol>
                    </div>
                    <div className="products-splitter"></div>
                    <div className="committees">
                        <h3 className="comm-title category-title">COMMS</h3>
                        <ol className="comm-list category-list">
                            <li className="comm-item"><a href="#" className="comm-item--link">Commmitee one</a></li>
                            <li className="comm-item"><a href="#" className="comm-item--link">Committee two</a></li>
                            <li className="comm-item"><a href="#" className="comm-item--link">committee three</a></li>
                            <li className="comm-item"><a href="#" className="comm-item--link">Committee four</a></li>
                            <li className="comm-item"><a href="#" className="comm-item--link">commiittee five</a></li>
                        </ol>
                    </div>
                </div>
            </div>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;

