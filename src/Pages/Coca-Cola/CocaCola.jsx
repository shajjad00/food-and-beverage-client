import { Link, useLoaderData } from "react-router-dom";
import StarRating from "../../Components/StarRating/StarRating";

const CocaCola = () => {
  const allProduct = useLoaderData();

  const cocaColaProduct = allProduct.filter(
    (product) => product.brandName.toLowerCase() == "Coca-cola".toLowerCase()
  );

  return (
    <>
      {cocaColaProduct.map((item) => {
        const { image, name, price, rating, shortDescription, _id } = item;
        const ratingNum = rating * 1;
        const styles = {
          backgroundImage: `url(${image})`,
        };
        return (
          <div
            key={item._id}
            className="py-6"
          >
            <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
              <div
                className="w-2/5 bg-cover"
                style={styles}
              ></div>
              <div className="w-3/5 p-4">
                <h1 className="text-[#596e5c] font-bold text-2xl">{name}</h1>
                <p className="mt-2 text-gray-400 text-sm">
                  {shortDescription.slice(0, 100)}
                </p>
                <div className="flex item-center mt-2">
                  <StarRating ratingNo={ratingNum}></StarRating>
                </div>
                <div className="flex item-center justify-between mt-3">
                  <h1 className="text-[#011b10] font-bold text-xl">${price}</h1>
                  <Link to={`/CocaCola/${_id}`}>
                    <button className="px-3 py-2 bg-white text-green-500 border border-green-500 text-xs font-bold uppercase rounded">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CocaCola;