import { useCart } from "./cart-context";
import type { Product } from "./product";

const ProductCard = ({ id, name, price, description }: Product) => {
  const { dispatch } = useCart();

  return (
    <div className="p-5 shadow border border-neutral-200 rounded-lg flex flex-col gap-4">
      <h3 className="font-bold">{name}</h3>
      <p>${price}</p>
      <p>{description}</p>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "ADD_ITEM",
              payload: { id, name, price, quantity: 1 },
            })
          }
          className="bg-neutral-800 rounded-lg text-white py-2 px-4 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
