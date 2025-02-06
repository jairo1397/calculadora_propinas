import { formatCurrency } from '../helpers'
import { OrderItem } from '../types'
import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";

type OrderContentsProps = {
  order: OrderItem[];
  dispatch: Dispatch<OrderActions>;
};

export default function OrderContents({ order, dispatch }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-10">
        {order.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
          >
            <div>
              <p>
                Producto: {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              className="bg-red-600 h-8 w-8 rounded-full hover:bg-red-700 text-white font-black items-center"
              onClick={() =>
                dispatch({
                  type: "update_or_remove_item",
                  payload: { item },
                })
              }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
