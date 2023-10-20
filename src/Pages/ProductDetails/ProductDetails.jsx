import { useLoaderData } from "react-router-dom";
import StarRating from "../../Components/StarRating/StarRating";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const cardData = useLoaderData();
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const { image, name, price, rating, shortDescription, brandName } = cardData;
  const ratingNum = rating * 1;

  const handleAddToDb = () => {
    const cartData = {
      image,
      name,
      price,
      rating,
      shortDescription,
      brandName,
      email,
    };

    fetch("http://localhost:4000/productCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Product added successfully");
        }
      });
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
          <div className="relative">
            <img
              src={image}
              className="w-full h-64 object-cover"
            />
            <button className="absolute  font-semibold px-12 py-2 bg-white border-2  border-white text-green-500 bottom-4 left-4 uppercase shadow-lg">
              {brandName}
            </button>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="text-gray-800 text-xl font-semibold">
                  Price : ${price}
                </span>
              </div>
              <span className="text-gray-600">
                <button
                  onClick={handleAddToDb}
                  className="px-3 py-2 bg-white text-green-500 border border-green-500 text-xs font-bold uppercase rounded"
                >
                  Add to Cart
                </button>
              </span>
            </div>
            <div>
              <StarRating ratingNo={ratingNum}></StarRating>
            </div>
            <p className="text-gray-700 leading-tight my-4">
              {shortDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
