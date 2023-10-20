import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import StarRating from "../../Components/StarRating/StarRating";
import Swal from "sweetalert2";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [loggedUserData, setLoggedUserData] = useState(null);
  const email = user?.email;

  const cartData = useLoaderData();

  useEffect(() => {
    const UserData = cartData.filter((data) => data.email == email);
    setLoggedUserData(UserData);
  }, [cartData, email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/productCart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = loggedUserData.filter(
                (item) => item._id !== _id
              );
              setLoggedUserData(remaining);
              Swal.fire("Deleted!", "Product Remove Successful.", "success");
            }
          });
      }
    });
    console.log(_id);
  };

  console.log(loggedUserData);
  return (
    <>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto my-10">
        {loggedUserData?.length > 0 ? (
          loggedUserData?.map((data) => {
            const { image, name, price, rating, _id } = data;
            const ratingNum = rating * 1;
            return (
              <div
                key={_id}
                className="flex py-6"
              >
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={image}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="#">{name}</a>
                      </h3>
                      <p className="ml-4">${price}</p>
                    </div>
                    <p className="mt-1 text-sm ">
                      <StarRating ratingNo={ratingNum}></StarRating>
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty 1</p>

                    <div className="flex">
                      <button
                        onClick={() => handleDelete(_id)}
                        type="button"
                        className="font-semibold border border-green-500 px-8 py-2 rounded-md hover:text-white hover:bg-green-500 text-green-500 "
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="font-bold flex w-full justify-center text-3xl">
            <p>You have not added any product yet</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MyCart;
