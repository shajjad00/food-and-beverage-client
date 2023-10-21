import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;

    //create account
    if (password.length < 6) {
      toast.error("password should be more than 6 char");
    } else if (!/[A-Z]/.test(password)) {
      toast.error("should contain at least one uppercase character");
      console.log("Password should contain uppercase ");
    } else if (!/[#?!@$%^&*-]/.test(password)) {
      toast.error("Password should contain at least one special character");
    } else {
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          if (result.user) {
            toast.success("Account created successfully");
            updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: image,
            })
              .then(() => {})
              .catch((error) => {
                // An error occurred
                console.log(error);
              });

            navigate("/");
          }
        })
        .catch((err) => {
          if (err) {
            toast.error(err.code);
          }
        });
    }
  };
  const styles = {
    backgroundImage: `linear-gradient(115deg,#3f6212,#4d7c0f,#22c55e,#86efac,#bbf7d0,#dcfce7)`,
  };
  const bgStyle = {
    backgroundImage: `url(https://i.ibb.co/MD9Pjc3/green-bg.jpg)`,
  };
  return (
    <>
      <div
        className=" min-h-screen rounded-lg"
        style={styles}
      >
        <div className="container mx-auto flex justify-center items-center min-h-screen py-10">
          <div className="w-8/12 mx-auto rounded-xl bg-white shadow-lg overflow-hidden flex flex-col lg:flex-row">
            <div
              className=" w-full lg:w-1/2 rounded-l-lg bg-no-repeat bg-cover bg-center relative inset-0"
              style={bgStyle}
            >
              <div className="py-40">
                <h2 className="text-2xl font-semibold text-center">Welcome</h2>
                <p className=" px-5 text-white">
                  An offer involving user registration can be an effective
                  strategy in the food and beverage industry. By enticing users
                  to register, businesses can personalize their offerings,
                  provide discounts, and gather valuable data. This approach not
                  only enhances the user experience but also boosts customer
                  engagement and loyalty
                </p>
              </div>
              <div className=" bg-gray-900 absolute bg-opacity-30 inset-0 top-0 bottom-0"></div>
            </div>
            <div className=" w-full lg:w-1/2 rounded-r-lg py-16 lg:py-28 px-12">
              <div className="text-center">
                <h2 className="text-xl font-bold text-green-500 cursor-pointer">
                  Register
                </h2>
                <div className="border-2 w-10 border-green-500 inline-block"></div>
              </div>
              <div className="text-center">
                <form onSubmit={handleRegister}>
                  <input
                    className="outline-none border border-green-500 mt-4 py-2 pl-2 w-72 rounded-md"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <input
                    className="my-4 pl-2 py-2 outline-none border border-green-500 w-72 rounded-md"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  <input
                    className="outline-none pl-2 py-2 border border-green-500 w-72 rounded-md"
                    type="password"
                    name="password"
                    placeholder="Your password"
                    required
                  />
                  <input
                    className="outline-none pl-2 py-2 border border-green-500 w-72 rounded-md mt-4"
                    type="text"
                    name="image"
                    placeholder="Photo Url"
                  />
                  <input
                    className="outline-none mt-3 text-white font-semibold py-2 border bg-green-500 w-72 rounded-md cursor-pointer"
                    type="submit"
                    value="Register"
                    placeholder="Your password"
                    required
                  />
                </form>
                <div className="my-3 text-gray-500 w-[200px] mx-auto">
                  <hr className="" />
                </div>
                <p className="mt-4 text-gray-400 font-medium">
                  Already Have an account ?{" "}
                  <span>
                    <Link
                      className="px-5 py-2 border-2 border-green-500 text-green-500 rounded-lg ml-2"
                      to="/login"
                    >
                      Login
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
