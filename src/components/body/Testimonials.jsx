import TestimonialCard from "./TestimonialCard";
import profile1 from "../../assets/profile-1.jpg";
import profile2 from "../../assets/profile-2.jpg";
import profile3 from "../../assets/profile-3.jpg";

function Testimonials() {

  const Testimonials = [
    {
      id: 0,
      text:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Bruce McKenzie",
      info: "Founder & CEO, Huddle",
      img: profile1,
    },
    {
      id: 1,
      text:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Bruce McKenzie",
      info: "Founder & CEO, Huddle",
      img: profile2 ,
    },
    {
      id: 2,
      text:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Iva Boyd",
      info: "Founder & CEO, Huddle",
      img: profile3 ,
    },
  ];

  return (
    <article className="card__testimonials">
      <div className="card__testimonials__body">
        {Testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} data={testimonial} />
        ))}
      </div>
    </article>
  );
}

export default Testimonials;
