import React from "react";
import HottestItem from "./hottestItem";
export default function Hottest() {
  return (
    <div className="px-4 lg:px-24 bg-[#E8EDDE] ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center flex-wrap ">
          <h1 className="text-2xl lg:text-5xl font-bold py-12 whitespace-nowrap">
            <span className="text-[#50806B]">Hottest</span> Plants
          </h1>
          <button className="text-xl lg:text-3xl whitespace-nowrap">
            SHOP ALL {" >"}
          </button>
        </div>

        <hr className="border border-gray-900" />
        <ul className="grid place-content-evenly sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8 py-14 w-full">
          <HottestItem img="/plants/marble.png" link="" title="Marble Queen" />
          <HottestItem img="/plants/neon.png" link="" title="Neon Pothos" />
          <HottestItem img="/plants/syn.png" link="" title="Syngonium Rayii" />
          <HottestItem img="/plants/per.png" link="" title="Peruvian Cactus" />
          <HottestItem img="/plants/pine.png" link="" title="Pineapple" />
          <HottestItem
            img="/plants/african.png"
            link=""
            title="African Milk Tree"
          />
          <HottestItem img="/plants/pothos.png" link="" title="Pothos" />
          <HottestItem
            img="/plants/chinese.png"
            link=""
            title="Chinese Evergreen"
          />
        </ul>
      </div>
    </div>
  );
}
