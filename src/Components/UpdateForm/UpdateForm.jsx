import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateForm = () => {
  const productData = useLoaderData();
  const { image, name, price, rating, brandName, _id } = productData;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const image = form.image.value;
    const productType = form.productType.value;
    const rating = form.rating.value;
    const price = form.price.value;

    const productDetails = {
      name,
      brandName,
      image,
      productType,
      rating,
      price,
    };

    fetch(`https://food-and-beverage.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.modifiedCount);
        if (data.modifiedCount) {
          toast.success("Update Successful");
        }
      });
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[570px] bg-gray-300 p-6 rounded">
        <label className="mb-5 block text-center text-xl font-semibold text-gray-800 sm:text-xl">
          Update Product Details
        </label>
        <form onSubmit={handleUpdateProduct}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Name
            </label>
            <input
              type="text"
              defaultValue={name}
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="brandName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Brand Name
            </label>
            <input
              type="text"
              defaultValue={brandName}
              name="brandName"
              id="brandName"
              placeholder="Enter your Brand Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="image"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Image Url
            </label>
            <input
              type="text"
              defaultValue={image}
              name="image"
              id="image"
              placeholder="Enter your Image Url"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5 pt-3">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="productType"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    product Type
                  </label>
                  <input
                    type="text"
                    name="productType"
                    id="productType"
                    placeholder="Enter Category"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <label
                  htmlFor="rating"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Rating
                </label>
                <div className="mb-5">
                  <input
                    type="text"
                    defaultValue={rating}
                    name="rating"
                    id="rating"
                    placeholder="Enter Rating"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="price"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    defaultValue={price}
                    name="price"
                    id="price"
                    placeholder="Enter Price"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <button className="hover:shadow-form hover:bg-white hover:text-green-500 border hover:border-green-500 w-full rounded-md bg-green-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
