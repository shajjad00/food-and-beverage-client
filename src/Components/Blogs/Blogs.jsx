const Blogs = () => {
  return (
    <>
      <div className=" text-center max-w-2xl mx-auto">
        <h3 className=" italic text-lg text-gray-400">News And Blog</h3>
        <h2 className="text-4xl mb-6 font-bold">Our Food and Beverage Blog</h2>
        <div className="w-[200px] mx-auto h-[4px]">
          <hr />
        </div>
        <p className="italic text-sm mt-2 my-4 text-gray-400">
          Food is more than just something we eat to survive. It is a central
          part of our lives, and it connects us to each other and to our
          cultures
        </p>
      </div>
      <div className="grid grid-cols-1 max-w-screen-xl mx-auto md:grid-cols-3 gap-6">
        <div className="max-w-md bg-gray-100 shadow-lg pb-5">
          <div>
            <div className="group relative h-[280px]">
              <img
                className="w-full object-cover h-[280px]"
                src="https://i.ibb.co/nk055qp/aromatic-frappuccino-table.jpg"
              />
              <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gray-400 opacity-0 bg-opacity-60 group-hover:h-full group-hover:opacity-100 duration-500">
                <h1 className="text-2xl font-semibold text-white text-center">
                  Coffee Cocktails for Every Occasion
                </h1>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="px-5 py-2 my-4 rounded-lg bg-green-500 text-white uppercase font-medium">
              Nestle
            </button>
            <p className="text-2xl font-bold text-gray-900 font-sans mb-3">
              Coffee Cocktails for Every Occasion
            </p>
            <p className="text-sm text-gray-500 flex justify-center items-center gap-16">
              <span>Oct 21, 2023</span> <span>0 Comment</span>
            </p>
          </div>
        </div>
        <div className="max-w-md bg-gray-100 shadow-lg pb-5">
          <div>
            <div className="group relative h-[280px]">
              <img
                className="w-full object-cover h-[280px]"
                src="https://i.ibb.co/0DmRhWH/front-view-tasty-meat-burger-with-cheese-salad-dark-background.jpg"
              />
              <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gray-400 opacity-0 bg-opacity-60 group-hover:h-full group-hover:opacity-100 duration-500">
                <h1 className="text-2xl font-semibold text-white text-center">
                  The Science of the Perfect Burger
                </h1>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="px-5 py-2 my-4 rounded-lg bg-green-500 text-white uppercase font-medium">
              McDonalds
            </button>
            <p className="text-2xl font-bold text-gray-900 font-sans mb-3">
              The Science of the Perfect Burger
            </p>
            <p className="text-sm text-gray-500 flex justify-center items-center gap-16">
              <span>Oct 21, 2023</span> <span>0 Comment</span>
            </p>
          </div>
        </div>
        <div className="max-w-md bg-gray-100 shadow-lg pb-5">
          <div>
            <div className="group relative h-[280px]">
              <img
                className="w-full object-cover h-[280px]"
                src="https://i.ibb.co/DK4KhQy/sprite.png"
              />
              <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gray-400 opacity-0 bg-opacity-60 group-hover:h-full group-hover:opacity-100 duration-500">
                <h1 className="text-2xl font-semibold text-white text-center">
                  Fun Facts About Sprite Drinks
                </h1>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="px-5 py-2 my-4 rounded-lg bg-green-500 text-white uppercase font-medium">
              Pepsico
            </button>
            <p className="text-2xl font-bold text-gray-900 font-sans mb-3">
              Fun Facts About Sprite Drinks
            </p>
            <p className="text-sm text-gray-500 flex justify-center items-center gap-16">
              <span>Oct 21, 2023</span> <span>0 Comment</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
