interface IPrimaryButton {
  text: string;
  onClick: () => void;
}
const PrimaryButton = ({ text, onClick }: IPrimaryButton) => {
  return (
    <button
      onClick={onClick}
      className="bg-sky-600 p-1.5 rounded text-[white] font-semibold	"
    >
      {text}
    </button>
  );
};

export { PrimaryButton };
