import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" md:px-[80px] lg:px-[160px] mt-10 bg-green-500 p-20 dark:bg-[#444]">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="">
            <h2 className=" text-3xl md:text-4xl text-white font-bold">
              Ready to explore?
            </h2>
            <div className="my-4 flex flex-col lg:flex-row gap-7">
              <Link to="/register">
                <button className="px-24  md:w-[400px] lg:w-72  rounded-md py-3 bg-white border-2 text-green-500 font-bold hover:bg-green-500 hover:text-white dark:hover:text-[#fff] dark:hover:bg-[#aaa] dark:text-[#999]">
                  SIGN UP
                </button>
              </Link>
              <button className="px-16 border md:w-[400px] lg:w-72 border-white rounded-md py-3  text-white font-bold hover:text-green-500 hover:bg-white dark:hover:text-[#777]">
                PRODUCT TOUR
              </button>
            </div>
          </div>
          <img
            className="hidden lg:block rounded-md"
            src="https://i.ibb.co/4Z1SK39/Untitled-design.png"
            alt=""
          />
        </div>
        <div>
          <footer className=" flex flex-col md:flex-row items-center justify-between text-white mt-10">
            <div className="flex flex-col md:justify-start md:items-start md:flex-row gap-16 md:gap-28 lg:gap-40">
              <nav className="space-y-4">
                <header className="text-lg font-medium">Services</header>
                <a className="link link-hover  block">Branding</a>
                <a className="link link-hover block">Design</a>
                <a className="link link-hover block">Marketing</a>
              </nav>

              <nav className="space-y-4">
                <header className="text-lg font-medium">Services</header>
                <a className="link link-hover  block">Branding</a>
                <a className="link link-hover block">Design</a>
                <a className="link link-hover block">Marketing</a>
              </nav>

              <nav className="space-y-4">
                <header className="text-lg font-medium">Legal</header>
                <a className="link link-hover block">Terms of use</a>
                <a className="link link-hover block">Privacy policy</a>
              </nav>
              <nav className="space-y-4">
                <header className="text-lg font-medium">Company</header>
                <a className="link link-hover block">About us</a>
                <a className="link link-hover block">Contact</a>
                <a className="link link-hover flex gap-2 text-xl">
                  <FaFacebook></FaFacebook>
                  <FaInstagram></FaInstagram>
                  <FaTwitter></FaTwitter>
                  <FaLinkedin></FaLinkedin>
                </a>
              </nav>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
