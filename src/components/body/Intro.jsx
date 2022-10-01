import image from "../../assets/illustration-intro.png";

function Intro() {
  return (
    <article className="card__intro">
        <article className="card__intro__body lg:mb-[14rem]">            
            <img src={image} className="w-full" alt="illustration intro" />
            <h1 className="text-white text-2xl lg:text-4xl">All your files in one secure location, accessible anywhere.</h1>
            <blockquote className="text-gray-400">
            Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
            </blockquote>
            <button className="btn btn__primary">Get Started</button>
        </article>
    </article>
  )
}

export default Intro