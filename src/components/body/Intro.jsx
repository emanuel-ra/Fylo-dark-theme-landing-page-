import image from "../../assets/illustration-intro.png";

function Intro() {
  return (
    <div className="card__intro">
        <div className="card__intro__body mb-[14rem]">
            
            <picture>
                <img src={image} />
            </picture>

            <h1 className="text-white text-4xl">All your files in one secure location, accessible anywhere.</h1>
            <blockquote className="text-white px-32">
            Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
            </blockquote>

            <button className="btn btn__primary">Get Started</button>
        </div>
    </div>
  )
}

export default Intro