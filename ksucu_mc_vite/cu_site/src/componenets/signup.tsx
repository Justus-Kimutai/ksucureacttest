import '../styles/signup.css'
import '../styles/global.css'
import cuLogo from '../assets/cuLogoUAR.png'
import { Link } from 'react-router-dom'
import { useRef,useState } from 'react'
import userImg from '../assets/userIMG.jpeg'
import PencilIcon from './cropper/PencilIcon'
import Modal from "./cropper/Modal";


const SignUp: React.FC = () => {
    const avatarUrl = useRef(
        userImg
      );
      
      const [modalOpen, setModalOpen] = useState(false);
      
      const updateAvatar = (imgSrc: string) => {
        avatarUrl.current = imgSrc;
      };

    return(

        <>
            <div className="container">
                <Link to={"/"}>
                    <div className="logo_signUp"><img  src={cuLogo} alt="CU logo" /></div>
                </Link>
                <h2 className="text">Sign Up</h2>

                <div className='form'>

                    <div>
                        <label htmlFor="name">NAME</label >
                        <input type="text" id="name" />
                    </div>

                    <div>
                        <label htmlFor="phone">PHONE</label>
                        <input type="number" id="phone" />
                    </div>

                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" />
                    </div>

                    <div>
                        <label htmlFor="course">COURSE</label>
                        <input type="text" id="course" />
                    </div>

                    <div>
                        <label htmlFor="reg">REG</label>
                        <input type="text" id="reg" />
                    </div>

                    <div>
                        <label htmlFor="yos">Y.O.S</label>
                        <input type="text" id="yos" />
                    </div>

                    <div>
                        <label htmlFor="ministry">MINISTRY</label>
                        <select id="ministry">
                            <option>choose...</option>
                            <option value="wananzambe">Wananzambe</option>
                            <option value="intercessory">Intercessory</option>
                            <option value="ushering">Ushering</option>
                            <option value="pw">Praise and Worship</option>
                            <option value="cs">Church School</option>
                            <option value="hs">High School</option>
                            <option value="compassion">Compassion</option>
                            <option value="creativity">Creativity</option>
                        </select>
                    </div>

                    

                    <div>
                        <label htmlFor="et">ET</label>
                        <select id="et">
                            <option value="rivet">choose...</option>
                            <option value="rivet">Rivet</option>
                            <option value="cet">Cet</option>
                            <option value="ecet">Ecet</option>
                            <option value="net">Net</option>
                            <option value="weso">Weso</option>
                        </select>
                    </div>

                    <div className="img_selct">
                        <label htmlFor="photo">PHOTO</label>

                        <div className="photo-passport--img">
                                <img
                                    src={avatarUrl.current}
                                    alt="Avatar"
                                    className="photo-background--img"
                                    />
                                <button
                                    className="photo-background--btn"
                                    title="Change photo"
                                    onClick={() => setModalOpen(true)}
                                    >
                                    <PencilIcon />
                                </button>
                        </div>

                    </div>

                    <section className="passwords">
                        <div>
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password" id="password" />
                        </div>
            
                        <div>
                            <label htmlFor="retype_p">RETYPE</label>
                            <input type="password" id="retype_p" />
                        </div>
                    </section>

                </div>

                <div className="submisions">
                    <div className="clearForm">Clear</div>
                    <div className="submitData">Next</div>
                </div>

                <div className='form-footer'>
                    <p>Already having an account <Link to={"/signIn"}>click Here</Link></p>
                </div>

                {modalOpen && (
                    <Modal
                    updateAvatar={updateAvatar}
                    closeModal={() => setModalOpen(false)}
                    />
                )}

            </div>
        </>
    )
}

export default SignUp