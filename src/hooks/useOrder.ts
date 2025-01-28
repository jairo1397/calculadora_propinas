import { useState } from "react"
import type { MenuItem, OrderItem } from "../types/index"

export default function useOrder(){

    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    // funcion para agregar item
    const addItem = (item: MenuItem) => {
        setOrder((prevOrder) => {
            const existingItem = prevOrder.find((orderItem) => orderItem.id === item.id);
      
            if (existingItem) {
              // Si el item ya existe, incrementa su cantidad
              return prevOrder.map((orderItem) =>
                orderItem.id === item.id
                  ? { ...orderItem, quantity: orderItem.quantity + 1 }
                  : orderItem
              );
            } else {
              // Si el item no existe, agrégalo con cantidad 1
              return [...prevOrder, { ...item, quantity: 1 }];
            }
          });
    };
    const updateOrRemoveItem = (item: MenuItem) => {
        setOrder((prevOrder) =>
          prevOrder.flatMap((orderItem) =>
            orderItem.id === item.id
              ? orderItem.quantity > 1
                ? [{ ...orderItem, quantity: orderItem.quantity - 1 }] // Reduce cantidad
                : [] // Elimina el item
              : [orderItem] // No modifica otros elementos
          )
        );
      };

      const placeOrder = () => {
        setTip(0);
        setOrder([]);
        alert("Orden guardada");
      };
  
    return {
        order,
        addItem,
        updateOrRemoveItem,
        tip,
        setTip,
        placeOrder
    };
}