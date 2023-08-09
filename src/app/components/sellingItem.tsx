import React from "react";
import Image from "next/image";

interface Props {
  link: string;
  img: string;
  title: string;
}
export default function SellingItem(props: Props) {
  return (
    <li className="bg-white shadow-xl w-fit p-4 rounded-lg flex flex-col gap-4 ">
      <Image src={props.img} alt="Best Selling" width={400} height={400} />

      <div className="bg-[#50806B]  text-center py-4 text-white rounded-lg text-xl font-semibold">
        Shop Now
      </div>
    </li>
  );
}
