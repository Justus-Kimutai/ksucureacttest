import '../styles/signup.css'
import '../styles/global.css'

import cuLogo from '../assets/cuLogoUAR.png'
import { Link } from 'react-router-dom'

const SignIn: React.FC = () => {
    return(

        <>
            <div className="container">
                <Link to={"/"}>
                    <div className="logo_signUp"><img  src={cuLogo} alt="CU logo" /></div>
                </Link>
                <h2 className="text">Log in</h2>

                <form action="">
                    
                    <div>
                        <label htmlFor="name">User Name / Phone</label >
                        <input type="text" id="name" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>



                </form>

                <div className="submisions">
                    <div className="clearForm">Clear</div>
                    <div className="submitData">Next</div>
                </div>

                <div className='form-footer'>
                    <p>Have no account <Link to={"/signUp"}>click Here</Link></p>
                </div>

            </div>
        </>
    )
}

export default SignIn

