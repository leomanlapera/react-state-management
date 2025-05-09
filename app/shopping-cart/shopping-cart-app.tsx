import { CartProvider } from "./cart-context";
import CartSummary from "./cart-summary";
import { products } from "./product";
import ProductCard from "./product-card";

const ShoppingCartApp = () => {
  return (
    <CartProvider>
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-10">Tindahan ni Maning</h1>
        <div className="flex gap-10 items-start">
          <div className="grid gap-5 grid-cols-3 flex-1">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            ))}
          </div>
          <CartSummary />
        </div>
      </div>
    </CartProvider>
  );
};

export default ShoppingCartApp;
