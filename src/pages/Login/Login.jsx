import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email }
                
                // get access token
                axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
                .then(res =>{
                    console.log(res.data)
                    if(res.data.success){
                        navigate(location?.state ? location?.state : '/')
                    }
                })

            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mr-12 md:w-1/2">
                        <img src={login} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-4xl font-semibold text-center">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#FF3811] text-white">Login</button>
                            </div>
                        </form>
                        <p className=" text-center my-5">New to Here?<Link className="font-bold text-[#FF3811]" to="/signUp"> Sign Up</Link>  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;