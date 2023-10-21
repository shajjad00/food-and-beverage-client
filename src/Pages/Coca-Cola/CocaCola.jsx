import { Link } from "react-router-dom";
import StarRating from "../../Components/StarRating/StarRating";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import AdvertiseBanner from "../../Components/AdvertiseBanner/AdvertiseBanner";

const CocaCola = () => {
  const { allProduct } = useContext(AuthContext);

  const cocaColaProduct = allProduct.filter(
    (product) => product.brandName.toLowerCase() == "Coca-cola".toLowerCase()
  );

  return (
    <>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto mt-6">
        {cocaColaProduct.map((item) => {
          const { image, name, price, rating, shortDescription, _id } = item;
          const ratingNum = rating * 1;
          const styles = {
            backgroundImage: `url(${image})`,
          };
          return (
            <div
              key={item._id}
              className="py-6 flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div
                className="w-2/5 bg-cover"
                style={styles}
              ></div>
              <div className="w-3/5 p-4">
                <h1 className="text-[#596e5c] font-bold text-2xl">{name}</h1>
                <p className="mt-2 text-gray-400 text-sm">
                  {shortDescription.slice(0, 100)}
                </p>
                <div className="flex item-center my-2">
                  <StarRating ratingNo={ratingNum}></StarRating>
                </div>
                <h1 className="text-gray-400 font-bold text-xl">
                  Price : ${price}
                </h1>
                <div className="flex  items-center justify-between mt-3">
                  <Link to={`/productDetails/${_id}`}>
                    <button className="px-3 py-2 bg-white text-green-500 border border-green-500 text-xs font-bold uppercase rounded">
                      Details
                    </button>
                  </Link>
                  <Link to={`/updateProduct/${_id}`}>
                    <button className="px-4 bg-green-500 py-2 text-white font-medium rounded-md">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <AdvertiseBanner title={"coca-cola"}></AdvertiseBanner>
    </>
  );
};

export default CocaCola;
