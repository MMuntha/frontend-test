import { PrimaryButton } from "../../atoms";
import { OrderStatus } from "../../../types/order.type";

interface IOderCard {
  id: number;
  name: string;
  numberOfItems: number;
  price: string;
  location: string;
  status: OrderStatus;
}

const OrderCard = ({
  id,
  name,
  numberOfItems,
  price,
  location,
  status,
}: IOderCard) => {
  return (
    <div className="bg-white w-[350px] h-48 p-2.5 rounded shadow-2xl mb-[20px]">
      <p className="text-xs">{id}</p>
      <p className="text-sm">{name} </p>
      <p className="text-xs">{`${numberOfItems} items 300`}</p>
      <div>
        <p className="text-xs">{location}</p>
        <PrimaryButton
          text="Approve"
          onClick={() => console.log("hwllo world")}
        ></PrimaryButton>
      </div>
    </div>
  );
};

export { OrderCard };
