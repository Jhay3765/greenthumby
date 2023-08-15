import React from "react";
import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
export default function Foot() {
  return (
    <footer className="flex flex-col items-center ">
      <div className="py-8 flex flex-col items-center">
        <ul className="grid   grid-cols-2 gap-8 sm:flex  font-semibold text-xl ">
          <button>Products</button>
          <button>Returns</button>
          <button>FAQ</button>
          <button>Shipping</button>
          <button>About us</button>
          <button>Contact us</button>
        </ul>
        <ul className="flex gap-8 py-8 flex-wrap ">
          <button>
            {" "}
            <FaYoutube size={30} />
          </button>
          <button>
            <FaFacebook size={30} />
          </button>
          <button>
            {" "}
            <FaTwitter size={30} />
          </button>

          <button>
            <FaInstagram size={30} />
          </button>

          <button>
            <FaLinkedin size={30} />
          </button>
        </ul>
      </div>

      <div className="text-xs    bg-[#50806B] text-center w-full py-1 text-white tracking-widest sm:text-xl">
        COPYRIGHT GREEN THUMB. ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
