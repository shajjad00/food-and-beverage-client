import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" md:px-[80px] lg:px-[160px] bg-green-500 p-20 ">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="">
            <h2 className=" text-3xl md:text-4xl text-white font-bold">
              Ready to elevate your data quality?
            </h2>
            <div className="my-4 flex flex-col md:flex-row gap-7">
              <button className="px-24  rounded-md py-3 bg-white border-2 text-green-500 font-bold hover:bg-green-500 hover:text-white">
                SIGN UP
              </button>
              <button className="px-16 border border-white rounded-md py-3  text-white font-bold hover:text-green-500 hover:bg-white">
                PRODUCT TOUR
              </button>
            </div>
          </div>
          <img
            className=" w-24 hidden md:block"
            src="https://i.ibb.co/zNcPwcy/coca-cola.jpg"
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
