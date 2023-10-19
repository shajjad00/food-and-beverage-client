import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const cartData = useLoaderData();
  console.log(cartData);
  return <div>MyCart</div>;
};

export default MyCart;
