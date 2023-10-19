import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, [setBrands]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-9 lg:grid-cols-3">
      {brands.map((data) => {
        const { image, title, route } = data;
        return (
          <div
            key={data.id}
            className="relative w-[400px]  mx-auto"
          >
            <img
              className="h-64 w-full object-cover rounded-md"
              src={image}
              alt={title}
            />
            <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
            <div className="absolute inset-0 flex items-end justify-end mr-3">
              <Link to={route}>
                <button className="text-grey-500 bg-white border-2 cursor-pointer border-white text-xl px-6 py-2 font-medium mb-2">
                  {title}
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Brands;
