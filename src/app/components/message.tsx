import Link from "next/link";
import React from "react";

export default function Message() {
  return (
    <div className="text-white bg-[#50806B] flex  py-2 justify-center  text-xs sm:text-sm text-center ">
      <p className="w-full hidden sm:block"></p>

      <p className="w-full font-semibold   sm:whitespace-nowrap">
        FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28.{" "}
      </p>
      <div className="sm:flex gap-8 w-full justify-center hidden ">
        <p>USD</p>
        <Link href="" className="font-semibold">
          SUPPORT
        </Link>
      </div>
    </div>
  );
}
