import { FaArrowRightLong } from "react-icons/fa6";

interface IPrimaryButton {
  text: string;
  onClick: () => void;
}
const PrimaryButton = ({ text, onClick }: IPrimaryButton) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#1B73E7] p-1.5 rounded text-[white] text-sm font-semibold w-auto flex flex-row gap-x-1.5 items-center "
    >
      {text}
      <span>
        <FaArrowRightLong />
      </span>
    </button>
  );
};

export { PrimaryButton };
