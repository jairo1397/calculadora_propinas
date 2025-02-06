import type { MenuItem } from "../types";
import { OrderActions } from "../reducers/order-reducer";
import { Dispatch } from "react";

type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
};

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button
      onClick={() => dispatch({ type: "add_item", payload: { item } })}
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
    >
      <p className="text-lg">{item.name}</p>
      <p className="text-lg font-black">${item.price}</p>
    </button>
  );
}
