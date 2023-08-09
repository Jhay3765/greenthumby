import React from "react";
import Image from "next/image";
interface Props {
  star: string;
  person: string;
  text: string;
  name: string;
}
export default function Card(props: Props) {
  return (
    <div className="bg-white w-full flex flex-col items-center max-w-md py-4 px-14 ">
      <Image src={props.person} alt="Person" height={200} width={200} />
      <Image src={props.star} alt="rating" height={30} width={150} />
      <h2 className="text-3xl font-semibold">
        {'"'}
        {props.text}
        {'"'}
      </h2>
      <h3 className="text-2xl text-gray-500 py-2">{props.name}</h3>
    </div>
  );
}
