import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types/index";
import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  dispatch: Dispatch<OrderActions>;
};

export default function OrderTotals({
  order,
  tip,
  dispatch,
}: OrderTotalsProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  );

  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);

  const totalAmount = useMemo(
    () => subtotalAmount + tipAmount,
    [subtotalAmount, tipAmount]
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>
          Subtotal a pagar: {""}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>

        <p>
          Propina: {""}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>

        <p>
          Total a pagar: {""}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        onClick={() => dispatch({ type: "place_order" })}
        disabled={totalAmount === 0}
      >
        Guardar Orden
      </button>
    </>
  );
}
