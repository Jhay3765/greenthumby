import React from "react";
import Link from "next/link";
import Image from "next/image";
interface Props {
  link: string;
  img: string;
  title: string;
}
export default function CategoryItem(props: Props) {
  return (
    <div className="flex flex-col text-center font-semibold text-xl p-4 ">
      <Link href={props.link} className="">
        <Image alt="CategoryItem" src={props.img} width={200} height={80} />
      </Link>
      <p className="tracking-wider ">{props.title}</p>
    </div>
  );
}
