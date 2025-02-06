import { MenuItem, OrderItem } from "../types";

export type OrderActions =
  | { type: "add_item"; payload: { item: MenuItem } }
  | { type: "update_or_remove_item"; payload: { item: MenuItem } }
  | { type: "place_order" }
  | { type: "set_tip"; payload: { tip: number } };

export type OrderState = {
  order: OrderItem[];
  tip: number;
};

export const initialState: OrderState = {
  order: [],
  tip: 0,
};

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderActions
) => {
  switch (action.type) {
    case "add_item": {
      const existingItem = state.order.find(
        (orderItem) => orderItem.id === action.payload.item.id
      );
      if (existingItem) {
        return {
          ...state,
          order: state.order.map((orderItem) =>
            orderItem.id === action.payload.item.id
              ? { ...orderItem, quantity: orderItem.quantity + 1 }
              : orderItem
          ),
        };
      } else {
        return {
          ...state,
          order: [...state.order, { ...action.payload.item, quantity: 1 }],
        };
      }
    }

    case "update_or_remove_item": {
      return {
        ...state,
        order: state.order.flatMap((orderItem) =>
          orderItem.id === action.payload.item.id
            ? orderItem.quantity > 1
              ? [{ ...orderItem, quantity: orderItem.quantity - 1 }]
              : [] // Eliminar el item
            : [orderItem]
        ),
      };
    }

    case "place_order":
      return {
        ...initialState,
      };

    case "set_tip":
      return {
        ...state,
        tip: action.payload.tip,
      };

    default:
      return state;
  }
};
