import toast from "react-hot-toast";

const AddProduct = () => {
  const handleAddData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const shortDescription = form.shortDescription.value;

    const productDetails = {
      name,
      image,
      brandName,
      price,
      shortDescription,
      rating,
    };

    fetch("https://food-and-beverage.vercel.app/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          toast.success("Product added successfully");
        }
      });
  };
  return (
    <>
      <div>
        <div className="text-center">
          <h2 className="text-2xl font-bold my-3">Add New Product</h2>
          <p className="text-xl mb-3">
            Use the below form to create a new Product
          </p>
        </div>
        <div className=" max-w-xl mx-auto p-4">
          <form
            onSubmit={handleAddData}
            className=""
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <div>
                  <label className="block">Name</label>
                  <input
                    type="text"
                    placeholder="Product Name"
                    name="name"
                    className="input my-3 focus:outline-none input-bordered input-secondary w-full"
                  />
                </div>
                <div>
                  <label className="block">Image</label>
                  <input
                    type="text"
                    placeholder="Image URL"
                    name="image"
                    className="input my-3 focus:outline-none input-bordered input-secondary w-full"
                  />
                </div>
                <div>
                  <label className="block">Brand Name</label>
                  <input
                    type="text"
                    placeholder="Brand Name"
                    name="brandName"
                    className="input focus:outline-none mt-3 input-bordered input-secondary w-full"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block">Price</label>
                  <input
                    type="number"
                    placeholder="$50"
                    name="price"
                    className="input my-3 focus:outline-none input-bordered input-secondary w-full"
                  />
                </div>
                <div>
                  <label className="block">Rating</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    placeholder="2"
                    name="rating"
                    className="input mt-3 focus:outline-none input-bordered input-secondary w-full"
                  />
                </div>
                <div>
                  <label className="block mt-3">Short description</label>
                  <textarea
                    className="input mt-3 focus:outline-none input-bordered input-secondary w-full outline-none"
                    name="shortDescription"
                    rows="4"
                    cols="50"
                    placeholder=" Write here..."
                  ></textarea>
                </div>
              </div>
            </div>
            <input
              type="submit"
              value="Add Product"
              className="input mt-3 cursor-pointer bg-green-500 w-full text-white"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
