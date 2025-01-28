import type { MenuItem } from "../types";

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <button onClick={() => addItem(item)} className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between">
        <p className="text-lg">{item.name}</p>
        <p className="text-lg font-black">${item.price}</p>
    </button>
  );
}
