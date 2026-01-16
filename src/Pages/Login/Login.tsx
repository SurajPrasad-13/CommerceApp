import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-100 m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-lg text-black font-medium">
            Login to your account
          </h3>
          <form action="" className="w-full mt-5">
            <div className="form-group w-full mb-5">
              <TextField
                type="email"
                id="email"
                label="Email Id"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={`${showPassword === true ? "text" : "password"}`}
                id="password"
                label="Password"
                variant="outlined"
                className="w-full"
              />
              <Button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute! top-2.5 right-2.5 w-9! min-w-9! text-black/70! rounded-full!"
              >
                {showPassword === true ? (
                  <FaRegEyeSlash className="text-2xl" />
                ) : (
                  <FaRegEye className="text-2xl" />
                )}
              </Button>
            </div>
            <Link to="/" className="link cursor-pointer text-sm font-semibold">
              Forgot Password
            </Link>
            <div className="flex items-center w-full my-3">
              <Button className="btn-org btn-lg w-full ">Login </Button>
            </div>
            <p className="text-center">
              Not Registered? <Link to="/register" className="link text-sm font-semibold text-primary">Sign Up</Link>
            </p>
            <p className="text-center font-medium my-3">Or continue with social account</p>
            <Button className="flex gap-3 w-full bg-[#f1f1f1]! text-black!">
              <FcGoogle className="text-xl"/> Login with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
