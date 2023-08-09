import Image from "next/image";
export default function Landing() {
  return (
    <div className=" flex justify-center text-center bg-greenImage bg-no-repeat bg-cover bg-bottom pb-48">
      <div className="py-28 px-20 flex flex-col gap-12 max-w-xl imported items-center rounded-b-2xl ">
        <h1 className="font-bold text-7xl ">Plants are our passion</h1>
        <p className="text-xl">
          Even if you don’t have a green thumb, you can still have a green home.
        </p>
        <button className="bg-white text-black text-3xl w-fit px-8 py-6 rounded-3xl font-bold hover:bg-slate-100">
          {" "}
          GET PLANTING
        </button>
      </div>
    </div>
  );
}
