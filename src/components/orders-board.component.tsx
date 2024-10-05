import React from "react";
import { PrimaryButton } from "./atoms";
import { OrderCard } from "./molecules";
import data from "../data/orders.json";
import { useState, useEffect } from "react";
import { Order, OrderStatus } from "../types/order.type";

export const OrdersBoard: React.FC = () => {
  const [newOrders, setNewOrders] = useState<Order[]>([]);
  const [activeOrders, setActiveOrders] = useState<Order[]>();
  const [readyOrders, setReadyOrders] = useState<Order[]>();

  const categorizeOrders = () => {
    const newOrdersTemp: Order[] = [];
    const activeOrdersTemp: Order[] = [];
    const readyOrdersTemp: Order[] = [];

    data.forEach((order) => {
      const orderWithEnumStatus = {
        ...order,
        status: order.status as OrderStatus, // Cast status to OrderStatus
      };

      if (orderWithEnumStatus.status === OrderStatus.New) {
        newOrdersTemp.push(orderWithEnumStatus); // Push to the temporary array
      } else if (orderWithEnumStatus.status === OrderStatus.Active) {
        activeOrdersTemp.push(orderWithEnumStatus);
      } else if (orderWithEnumStatus.status === OrderStatus.Ready) {
        readyOrdersTemp.push(orderWithEnumStatus);
      }
    });

    // After the loop, set the states with the new arrays
    setNewOrders(newOrdersTemp);
    setActiveOrders(activeOrdersTemp);
    setReadyOrders(readyOrdersTemp);
  };

  useEffect(() => {
    categorizeOrders();
  }, [data]);

  return (
    <div className="flex justify-around items-start space-x-14 pt-2">
      <div>
        <h1 className="text-2xl font-bold mb-[10px]">New</h1>
        {newOrders &&
          newOrders.map((order) => (
            <OrderCard
              id={order.id}
              numberOfItems={order.items.length}
              location={order.location}
              name={order.pricelist.name}
              status={order.status}
              price={"300"}
            />
          ))}
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-[10px]">Active </h1>
        {activeOrders &&
          activeOrders.map((order) => (
            <OrderCard
              id={order.id}
              numberOfItems={order.items.length}
              location={order.location}
              name={order.pricelist.name}
              status={order.status}
              price={"300"}
            />
          ))}
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-[10px]">Ready</h1>
        {readyOrders &&
          readyOrders.map((order) => (
            <OrderCard
              id={order.id}
              numberOfItems={order.items.length}
              location={order.location}
              name={order.pricelist.name}
              status={order.status}
              price={"300"}
            />
          ))}
      </div>
    </div>
  );
};
