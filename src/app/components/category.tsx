import React from "react";
import CategoryItem from "./categoryItem";

export default function Category() {
  return (
    <div className="flex px-4 lg:px-24 py-8 justify-center ">
      <div>
        <h1 className="text-3xl  lg:text-5xl font-bold py-12 whitespace-nowrap">
          <span className="text-[#50806B]">Shop</span> by Category
        </h1>
        <hr className="border border-gray-600" />
        <ul className="grid grid-cols-2 lg:flex justify-between py-8 lg:flex-nowrap">
          <CategoryItem img="/Bonsai.png" link="" title="BONSAI" />
          <CategoryItem img="/Cacti.png" link="" title="CACTI" />
          <CategoryItem img="/creep.png" link="" title="CREEPERS" />
          <CategoryItem img="/succ.png" link="" title="SUCCULENTS" />
          <CategoryItem img="/Seeds.png" link="" title="SEEDS" />
          <CategoryItem img="/Gifts.png" link="" title="GIFTS" />
        </ul>
      </div>
    </div>
  );
}
