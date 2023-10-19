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
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto my-10">
        {loggedUserData ? (
          loggedUserData?.map((data) => {
            const { image, name, price, rating, brandName, _id } = data;
            const ratingNum = rating * 1;
            return (
              <div
                key={_id}
                className="rounded overflow-hidden shadow-lg flex flex-col max-w-2xl"
              >
                <a href="#"></a>
                <div className="relative">
                  <a href="#">
                    <img
                      className="w-full h-[350px] object-cover"
                      src={image}
                      alt=""
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                  <a href="#!">
                    <div className="text-xs absolute top-0 right-0 bg-white px-4 py-2 text-green-500 mt-3 mr-3 hover:bg-green-500 hover:text-white transition duration-500 ease-in-out font-bold">
                      {brandName}
                    </div>
                  </a>
                </div>
                <div className="px-6 mt-2 mb-auto">
                  <p
                    href="#"
                    className="font-bold text-xl hover:text-indigo-600 transition duration-500 ease-in-out inline-block"
                  >
                    {name}
                  </p>
                </div>
                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                  <div className="flex item-center ">
                    <StarRating ratingNo={ratingNum}></StarRating>
                  </div>

                  <span
                    href="#"
                    className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
                    <span className="ml-1 text-lg">price : ${price}</span>
                  </span>
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
