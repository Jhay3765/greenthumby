import React from "react";
import SellingItem from "./sellingItem";
export default function Selling() {
  return (
    <div className="px-4 lg:px-24">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl lg:text-5xl font-bold py-12 whitespace-nowrap">
          <span className="text-[#50806B]">Best</span> Selling
        </h1>
        <section className="text-xl lg:text-3xl whitespace-nowrap">
          SHOP ALL {" >"}
        </section>
      </div>

      <hr className="border border-gray-900" />
      <ul className="flex flex-wrap justify-around gap-4  px-8 py-14">
        <SellingItem img="/indoorp.png" link="" title="INDOOR PLANTS" />
        <SellingItem img="/air.png" link="" title="INDOOR PLANTS" />
        <SellingItem img="/flower.png" link="" title="INDOOR PLANTS" />
      </ul>
    </div>
  );
}
