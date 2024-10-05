import { PrimaryButton } from "../../atoms";
import { OrderStatus } from "../../../types/order.type";

interface IOderCard {
  id: number;
  name: string;
  numberOfItems: number;
  price: string;
  location: string;
  status: OrderStatus;
  onClick: () => void;
}

const OrderCard = ({
  id,
  name,
  numberOfItems,
  price,
  location,
  status,
  onClick,
}: IOderCard) => {
  const getButtonText = (status: OrderStatus): string => {
    if (status === OrderStatus.New) {
      return "Approve";
    } else if (status === OrderStatus.Active) {
      return "Ready";
    } else if (status === OrderStatus.Ready) {
      return "Complete";
    } else {
      return "";
    }
  };
  return (
    <div className="flex flex-col justify-between bg-white w-[350px] h-48 p-5 rounded drop-shadow-2xl mb-[20px]">
      <div>
        <p className="text-xs">{id}</p>
        <p className="text-sm font-semibold">{name} </p>
        <p className="text-xs">{`${numberOfItems} items 300`}</p>
      </div>
      <div className="w-full flex flex-row justify-between">
        <p className="text-sm font-semibold">{location}</p>
        <PrimaryButton text={getButtonText(status)} onClick={onClick} />
      </div>
    </div>
  );
};

export { OrderCard };
