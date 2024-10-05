interface ICountBadge {
  count: number;
  bgColor: string;
}
const CountBadge = ({ count, bgColor }: ICountBadge) => {
  return (
    <div
      className={`flex justify-center items-center text-white rounded-full p-2 bg-[${bgColor}] w-6 h-6 mt-[-8px]`}
    >
      <span className="text-sm font-semibold">{count}</span>
    </div>
  );
};

export { CountBadge };
