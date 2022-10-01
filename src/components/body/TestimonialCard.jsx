

function TestimonialCard({ data }) {
  
  return (
    <article className="testimonial">
      <blockquote className="text-gray-400">{data.text}</blockquote>
      <article className="flex space-x-2">
        <img src={data.img} alt={data.name} className="w-11 rounded-full"/>
        <span className="flex flex-col">
            <span className="text-white font-semibold">{data.name}</span>
            <span className="text-gray-400 text-xs">{data.info}</span>
        </span>
      </article>
    </article>
  );
}

export default TestimonialCard;
