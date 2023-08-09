import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  link: string;
  img: string;
  title: string;
}
export default function HottestItem(props: Props) {
  return (
    <li className="bg-white shadow-xl w-fit p-4 rounded-lg flex flex-col gap-4">
      <Image src={props.img} alt="Best Selling" width={250} height={400} />

      <div className="leading-5">
        <p className="font-semibold text-2xl whitespace-nowrap">
          {props.title}
        </p>
        <p className="text-xl">$ 350</p>
      </div>
      <div className="bg-[#50806B]  text-center py-4 text-xl text-white rounded-lg font-semibold ">
        Buy
      </div>
    </li>
  );
}
