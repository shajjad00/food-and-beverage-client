import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { BsSun, BsMoonFill } from "react-icons/bs";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  // const [theme, setTheme] = useState(null);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  // const handleThemeSwitch = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  const { theme, handleThemeSwitch } = useContext(AuthContext);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("Sign Out Successful");
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  const elements = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/addProduct">Add Product</Link>
      </li>
      <li>
        <Link to="/myCart"> My Cart</Link>
      </li>
    </>
  );

  const styles = {
    color: theme == "dark" ? "white" : "#333",
  };
  return (
    <div className="navbar bg-green-500 dark:bg-slate-700">
      <div className="navbar-start">
        <div className="dropdown ">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dark:hover:text-white menu-sm dropdown-content mt-3 z-10 p-2 shadow rounded-box w-52 bg-white"
          >
            {elements}
          </ul>
        </div>
        <Link
          to="/"
          className="normal-case hidden md:block text-xl font-semibold border border-white px-5 py-2 text-gray-300 rounded-md"
        >
          Food and <span className="">Beverage Limited</span>{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-white dark:hover:text-white text-lg">
          {elements}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  {user?.displayName}
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Link
                  onClick={handleSignOut}
                  className="hover:border-2 hover:border-green-500 bg-green-500 text-white  rounded-md pl-16 py-2 hover:bg-white hover:text-green-500 font-semibold"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink
            to="/login"
            className="hover:border-2 mr-2 dark:bg-slate-800 hover:border-green-500 bg-green-500 text-white  rounded-md px-12  py-2 hover:bg-white hover:text-green-500 font-semibold border dark:hover:text-white dark:hover:border-white border-white"
          >
            Login
          </NavLink>
        )}
        <div
          className=" cursor-pointer"
          onClick={handleThemeSwitch}
        >
          {theme == "dark" ? (
            <BsSun
              className="text-xl font-bold"
              style={styles}
            ></BsSun>
          ) : (
            <BsMoonFill className="text-xl font-bold"></BsMoonFill>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
