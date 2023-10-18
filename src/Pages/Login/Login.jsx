import { useContext } from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { userSignIn } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // user sign in

    userSignIn(email, password)
      .then((res) => {
        if (res.user) {
          toast.success("Login successful");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.code);
        if (err.code) {
          toast.error(err.code);
        }
      });
  };

  return (
    <>
      <div className="flex justify-center py-4 items-center min-h-screen  bg-gray-100">
        <div className="bg-white rounded-lg shadow-2xl flex flex-col md:flex-row w-2/3 max-w-4xl">
          <div className=" w-full md:w-1/2 lg:w-3/5 p-5">
            <div className="font-bold text-xl">
              <span className="text-green-500 ">Food </span>and Beverage{" "}
            </div>
            <div className="py-10 text-center">
              <h2 className="text-xl font-bold text-green-500 mb-2">
                Sign in to Account
              </h2>
              <div className="border-2 inline-block w-10 border-green-500  mb-2"></div>
              {/* <div className="flex justify-center my-2">
                <Link className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaFacebookF className="text-sm"></FaFacebookF>
                </Link>
                <Link className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaLinkedin className="text-sm"></FaLinkedin>
                </Link>
                <Link className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaGoogle className="text-sm"></FaGoogle>
                </Link>
              </div> */}
              <form onSubmit={handleSignIn}>
                <div className="flex flex-col items-center mb-3">
                  <div className="flex items-center bg-gray-100 w-60 p-2">
                    <FaRegEnvelope className=" text-gray-400 m-2"></FaRegEnvelope>
                    <input
                      className="bg-gray-100 outline-none flex-1"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center mb-3 bg-gray-100 w-60 p-2">
                    <MdLockOutline className=" text-gray-400 m-2"></MdLockOutline>
                    <input
                      className="bg-gray-100 outline-none flex-1"
                      type="password"
                      name="password"
                      placeholder="Your Password"
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  className="border-2 cursor-pointer border-green-500  text-green-500 font-semibold  rounded-md px-10 py-2 hover:bg-green-500 hover:text-white"
                  value="Sign In"
                />
              </form>
              <div className="flex justify-center items-center gap-1 my-4">
                <div className="w-20 h-0 border-2 border-green-500 inline-block "></div>
                <p className="text-gray-400">or</p>
                <div className="border-2 h-0 w-20 border-green-500 inline-block"></div>
              </div>
              <div className="flex justify-center my-2">
                <Link className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaFacebookF className="text-sm"></FaFacebookF>
                </Link>
                <Link className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaLinkedin className="text-sm"></FaLinkedin>
                </Link>
                <Link className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaGoogle className="text-sm"></FaGoogle>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-2/5 text-center rounded-tr-lg rounded-br-lg bg-green-500 text-white py-36 px-12">
            <h2 className="text-xl font-bold mb-2">Hello,Friend</h2>
            <div className="border-2 inline-block w-10 border-white mb-2"></div>
            <p className="mb-10">
              Fill up your information and start journey with us
            </p>
            <Link to="/register">
              <button className="border-2 border-white font-semibold  rounded-md px-10 py-2 hover:bg-white hover:text-green-500">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
