import React from "react";
import HottestItem from "./hottestItem";
import DealItem from "./dealItem";
export default function Deal() {
  return (
    <div className="max-w-7xl mx-auto px-2">
      <div className="flex justify-between items-center flex-wrap ">
        <h1 className="text-2xl lg:text-5xl font-bold py-12 whitespace-nowrap">
          <span className="text-[#50806B]">Fantastic</span> Deals
        </h1>
        <button className="text-xl lg:text-3xl whitespace-nowrap">
          SHOP ALL {" >"}
        </button>
      </div>

      <hr className="border border-gray-900" />
      <ul className="flex flex-wrap justify-around  gap-4 px-8 py-14 ">
        <DealItem img="/deals/hoya.png" title="Hoya Retusa" />
        <DealItem img="/deals/jewel.png" title="Jewel Alocasias" />
        <DealItem img="/deals/red.png" title="Red Secret Alocasia" />
        <DealItem img="/deals/string.png" title="String of Hearts" />
      </ul>
    </div>
  );
}
