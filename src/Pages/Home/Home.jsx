import Brands from "../../Components/Brands/Brands";
import Banner from "../../Components/Header/Banner";

const Home = () => {
  //#1E1E1E
  //#F40009
  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <Banner></Banner>
      <Brands></Brands>
    </div>
  );
};

export default Home;
