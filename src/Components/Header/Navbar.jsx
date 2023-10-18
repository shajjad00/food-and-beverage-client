import { Link } from "react-router-dom";

const Navbar = () => {
  const elements = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/addProduct">Add Product</Link>
      </li>
      <li>
        <Link to="/addProduct">Add Product</Link>
      </li>
    </>
  );
  return (
    <div className="navbar ">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 "
          >
            {elements}
          </ul>
        </div>
        <Link
          to="/"
          className="normal-case hidden md:block text-xl font-semibold"
        >
          Food and <span className="text-green-500">Beverage Limited</span>{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium   text-lg">
          {elements}
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="hover:border-2 hover:border-green-500 bg-green-500 text-white border-gray-500 rounded-md px-12  py-2 hover:bg-white hover:text-green-500 font-semibold"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
