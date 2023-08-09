import Navbar from "./components/navbar";
import Message from "./components/message";
import Landing from "./components/landing";
import Category from "./components/category";
import Selling from "./components/selling";
import Hottest from "./components/hottest";
import Deal from "./components/deals";
import Testimonial from "./components/testimonial";
import Foot from "./components/foot";

export default function Home() {
  return (
    <main className="">
      <Message />
      <Navbar />
      <Landing />
      <div className="bg-[#50806B] py-4 w-full "></div>
      <Category />
      <Selling />
      <Hottest />
      <Deal />
      <Testimonial />
      <Foot />
    </main>
  );
}
