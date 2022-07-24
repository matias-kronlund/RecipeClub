import "./login.scss";
import { AiFillLock } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { uid } from "../../scripts/id";
function Login({ GuestLogin, loggedin }) {
    console.log(loggedin);
    return (
        <div className="loginbg" hidden={loggedin === "" ? false : true}>
            <div className="login">
                <h1>Recipe Club</h1>
                <h2>Login</h2>
                <form>
                    <div className="inpWrap">
                        <FaUserAlt className="loginicon"></FaUserAlt>
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="inpWrap">
                        <AiFillLock className="loginicon"></AiFillLock>
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="cheWrap">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <button type="submit">Login</button>
                </form>

                <div className="Or">Or</div>
                <button
                    onClick={() => {
                        GuestLogin(uid());
                    }}
                >
                    Continue as guest
                </button>
                <div className="signup">
                    Not a member? <a>Sign up now</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
