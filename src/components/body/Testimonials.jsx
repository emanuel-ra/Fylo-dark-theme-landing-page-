import TestimonialCard from "./TestimonialCard";

function Testimonials() {

  const Testimonials = [
    {
      id: 0,
      text:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Bruce McKenzie",
      info: "Founder & CEO, Huddle",
      img: "/src/assets/profile-1.jpg",
    },
    {
      id: 1,
      text:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Bruce McKenzie",
      info: "Founder & CEO, Huddle",
      img: "/src/assets/profile-2.jpg",
    },
    {
      id: 2,
      text:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Iva Boyd",
      info: "Founder & CEO, Huddle",
      img: "/src/assets/profile-3.jpg",
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
