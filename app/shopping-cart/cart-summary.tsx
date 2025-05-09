import { useCart } from "./cart-context";

const CartSummary = () => {
  const { state, dispatch } = useCart();
  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-neutral-100 w-1/4 p-5 rounded-lg">
      <h2 className="font-bold mb-5">Cart Summary</h2>
      <div className="flex flex-col gap-5 mb-5">
        {state.items.map((item) => (
          <div key={item.id}>
            <div className="mb-2">
              {item.name} x {item.quantity} = $
              {(item.price * item.quantity).toFixed(2)}
            </div>
            <div className="flex gap-1">
              <button
                className="cursor-pointer h-9 w-9 text-white px-2 bg-neutral-800 rounded-lg"
                onClick={() =>
                  dispatch({
                    type: "DECREASE_QUANTITY",
                    payload: { id: item.id },
                  })
                }
              >
                -
              </button>
              <button
                className="cursor-pointer h-9 w-9 text-white px-2 bg-neutral-800 rounded-lg"
                onClick={() =>
                  dispatch({
                    type: "INCREASE_QUANTITY",
                    payload: { id: item.id },
                  })
                }
              >
                +
              </button>
              <button
                className="cursor-pointer h-9 px-4 text-white bg-neutral-800 rounded-lg"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_ITEM",
                    payload: { id: item.id },
                  })
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="mb-5 font-bold">Total: ${total.toFixed(2)}</p>
      <button
        onClick={() => dispatch({ type: "CLEAR_CART" })}
        className="cursor-pointer h-9 px-4 text-white bg-neutral-800 rounded-lg"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartSummary;
