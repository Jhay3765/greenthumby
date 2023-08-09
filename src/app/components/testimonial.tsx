import React from "react";
import Card from "./card";
export default function Testimonial() {
  return (
    <div className="bg-[#E8EDDE] text-center py-20">
      <h1 className="text-6xl font-semibold">Testimonials</h1>
      <p className="text-2xl font-semibold py-2 ">Plant parents love us</p>
      <ul className="flex flex-wrap justify-center gap-8 py-8">
        <Card
          name="Lusia"
          person="/people/people.png"
          star="/people/4star.png"
          text="Healthy, happy
plants"
        />
        <Card
          name="Eduardo"
          person="/people/people2.png"
          star="/people/5star.png"
          text="Recommend to all my plant friends"
        />
        <Card
          name="Martia"
          person="/people/people1.png"
          star="/people/4star.png"
          text="I turned my house
into my dream jungle"
        />
      </ul>
    </div>
  );
}
