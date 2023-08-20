import React from "react";
import Link from "next/link";
import Image from "next/image";
interface Props {
  img: string;
  title: string;
}
export default function DealItem(props: Props) {
  return (
    <div className="flex flex-col font-semibold text-xl bg-white w-fit shadow-2xl p-4 rounded-xl">
      <button className="py-2">
        <Image alt="CategoryItem" src={props.img} width={250} height={80} />
      </button>
      <p className="tracking-wider ">{props.title}</p>
      <p className="pb-4 font-normal">
        $350 <s className="text-red-800 font-thin ">$ 450</s>
      </p>
      <button className="bg-[#50806B] text-center text-white font-semibold py-4 text-xl rounded-xl">
        Buy
      </button>
    </div>
  );
}
