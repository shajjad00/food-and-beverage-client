import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import StarRating from "../../Components/StarRating/StarRating";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [loggedUserData, setLoggedUserData] = useState(null);
  const email = user?.email;

  const cartData = useLoaderData();

  useEffect(() => {
    const UserData = cartData.filter((data) => data.email == email);
    setLoggedUserData(UserData);
  }, [cartData, email]);

  return (
    <>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {loggedUserData ? (
          loggedUserData?.map((data) => {
            const {
              image,
              name,
              price,
              rating,
              shortDescription,
              brandName,
              _id,
            } = data;
            const ratingNum = rating * 1;
            return (
              <div
                key={_id}
                className=" rounded-lg shadow-xl overflow-hidden max-w-lg min-h-0"
              >
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
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {name}
                  </h2>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <span className="text-gray-800 text-xl font-semibold">
                        Price : ${price}
                      </span>
                    </div>
                    <span className="text-gray-600"></span>
                  </div>
                  <div>
                    <StarRating ratingNo={ratingNum}></StarRating>
                  </div>
                  <p className="text-gray-700 leading-tight my-4">
                    {shortDescription}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p>Nothing to Show</p>
        )}
      </div>
    </>
  );
};

export default MyCart;
