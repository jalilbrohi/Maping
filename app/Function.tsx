import { FC } from "react";

interface Iprops {
  header: string;
  description: string;
  number: number;
  haveHover?: boolean;
}
const Function: FC<Iprops> = ({
  header,
  description,
  number,
  haveHover = true,
}) => {
  return (
    <div className={`bg-slate-100      rounded-md max-w-md px-5 relative py-4 ${haveHover && "border-2 "}`}>
      <h1 className="text-4xl font-semibold">{header}</h1>
      <p className="text-lg ">{description}</p>
      <span className="text-8xl text-gray-200 absolute top-0 right-0 ">
        {number}
      </span>
    </div>
  );
};

export default Function;
