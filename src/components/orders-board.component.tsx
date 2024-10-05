import React from "react";
import { CountBadge } from "./atoms";
import { OrderCard } from "./molecules";
import data from "../data/orders.json";
import { useState, useEffect } from "react";
import { Order, OrderStatus } from "../types/order.type";

export const OrdersBoard: React.FC = () => {
  const [newOrders, setNewOrders] = useState<Order[]>([]);
  const [activeOrders, setActiveOrders] = useState<Order[]>([]);
  const [readyOrders, setReadyOrders] = useState<Order[]>([]);

  const categorizeOrders = () => {
    const newOrdersTemp: Order[] = [];
    const activeOrdersTemp: Order[] = [];
    const readyOrdersTemp: Order[] = [];

    data.forEach((order) => {
      const orderWithEnumStatus = {
        ...order,
        status: order.status as OrderStatus,
      };

      if (orderWithEnumStatus.status === OrderStatus.New) {
        newOrdersTemp.push(orderWithEnumStatus); // Push to the temporary array
      } else if (orderWithEnumStatus.status === OrderStatus.Active) {
        activeOrdersTemp.push(orderWithEnumStatus);
      } else if (orderWithEnumStatus.status === OrderStatus.Ready) {
        readyOrdersTemp.push(orderWithEnumStatus);
      }
    });

    setNewOrders(newOrdersTemp);
    setActiveOrders(activeOrdersTemp);
    setReadyOrders(readyOrdersTemp);
  };

  useEffect(() => {
    categorizeOrders();
  }, [data]);

  const handleClick = (order: Order) => {
    let updatedOrder: Order | undefined;

    if (order.status === OrderStatus.New) {
      updatedOrder = { ...order, status: OrderStatus.Active };
    } else if (order.status === OrderStatus.Active) {
      updatedOrder = { ...order, status: OrderStatus.Ready };
    } else if (order.status === OrderStatus.Ready) {
      updatedOrder = { ...order, status: OrderStatus.Completed };
    }

    if (updatedOrder) {
      setNewOrders((prevOrders) => prevOrders.filter((o) => o.id !== order.id));
      setActiveOrders((prevOrders) =>
        prevOrders.filter((o) => o.id !== order.id)
      );
      setReadyOrders((prevOrders) =>
        prevOrders.filter((o) => o.id !== order.id)
      );

      if (updatedOrder.status === OrderStatus.Active) {
        // @ts-ignore
        setActiveOrders((prevOrders) => [...prevOrders, updatedOrder]);
      } else if (updatedOrder.status === OrderStatus.Ready) {
        // @ts-ignore

        setReadyOrders((prevOrders) => [...prevOrders, updatedOrder]);
      } else if (updatedOrder.status === OrderStatus.Completed) {
        console.log(`Order ${updatedOrder.id} has been completed.`);
      }
    }
  };
  return (
    <div className="flex justify-around items-start space-x-14 pt-2">
      <div>
        <div className="flex flex-row items-center gap-x-1 pl-2">
          <h1 className="text-2xl font-bold mb-[10px]">New</h1>
          <CountBadge count={newOrders.length} bgColor="red" />
        </div>
        {newOrders &&
          newOrders.map((order) => (
            <OrderCard
              id={order.id}
              numberOfItems={order.items.length}
              location={order.location}
              name={order.pricelist.name}
              status={order.status}
              price={"300"}
              onClick={() => handleClick(order)}
            />
          ))}
      </div>
      <div>
        <div className="flex flex-row items-center gap-x-1 pl-2 ">
          <h1 className="text-2xl font-bold mb-[10px]">Active </h1>
          <CountBadge count={activeOrders.length} bgColor="#1B73E7" />
        </div>
        {activeOrders &&
          activeOrders.map((order) => (
            <OrderCard
              id={order.id}
              numberOfItems={order.items.length}
              location={order.location}
              name={order.pricelist.name}
              status={order.status}
              price={"300"}
              onClick={() => handleClick(order)}
            />
          ))}
      </div>
      <div>
        <div className="flex flex-row items-center gap-x-1 pl-2">
          <h1 className="text-2xl font-bold mb-[10px]">Ready</h1>
        </div>
        {readyOrders &&
          readyOrders.map((order) => (
            <OrderCard
              id={order.id}
              numberOfItems={order.items.length}
              location={order.location}
              name={order.pricelist.name}
              status={order.status}
              price={"300"}
              onClick={() => handleClick(order)}
            />
          ))}
      </div>
    </div>
  );
};
