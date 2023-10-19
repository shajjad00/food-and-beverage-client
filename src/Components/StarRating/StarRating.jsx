import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const StarRating = ({ ratingNo }) => {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    setRating(ratingNo);
  }, [ratingNo]);
  return (
    <>
      <div className="flex">
        {[...Array(5)].map((star, idx) => {
          const currentValue = idx + 1;
          return (
            <FaStar
              key={idx}
              color={currentValue <= rating ? "#ffa534" : "gray"}
            ></FaStar>
          );
        })}
      </div>
    </>
  );
};

StarRating.propTypes = {
  ratingNo: PropTypes.number,
};

export default StarRating;
