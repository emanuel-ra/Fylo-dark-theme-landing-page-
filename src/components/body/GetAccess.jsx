function GetAccess() {
  return (
    <article className="bg-dark-blue py-24">
      <div className="flex justify-center items-center relative">
        <div class="card__access absolute mt-40">
          <h3 className="text-white text-3xl font-bold text-center">
            Get early access today
          </h3>

          <blockquote className="text-gray-400 text-center mt-10">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </blockquote>

          <div className="mt-10 flex flex-col lg:flex-row gap-5">
            <input
              type="text"
              className="input__text"
              placeholder="email@example.com"
            />
            <button className="btn btn__primary">Get Started For Free</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default GetAccess;
