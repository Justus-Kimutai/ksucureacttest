import '../styles/index.css';
import '../styles/global.css';
import { FaYoutube, FaFacebook, FaTiktok } from 'react-icons/fa';

const Footer = ()=>{

    return (

        <div className="footer" id='contacts'>

        <p className="footer--text">KISII UNIVERSITY MAIN CAMPUS CHRISTIAN UNION 2024</p>

            <div className="hr"></div>

            <div className="social--links">
                <div className="youtube">
                    <a href="https://www.youtube.com/@KSUCU-MC" className="social-link"><FaYoutube /></a>
                </div>

                <div className="facebook">
                    <a href="https://www.facebook.com/ksucumc" className="social-link"><FaFacebook /></a>
                </div>

                <div className="tiktok">
                    <a href="" className="social-link"><FaTiktok /></a>
                </div>
            </div>
        </div>
)}

export default Footer

  