import { useContext } from "react";
import Brands from "../../Components/Brands/Brands";
import Banner from "../../Components/Header/Banner";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Blogs from "../../Components/Blogs/Blogs";

const Home = () => {
  const { theme } = useContext(AuthContext);
  console.log(theme);

  return (
    <div className="dark:bg-[#444]">
      <div className="p-4  max-w-screen-xl mx-auto">
        <div>
          <Banner></Banner>
        </div>

        <Brands></Brands>
      </div>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
