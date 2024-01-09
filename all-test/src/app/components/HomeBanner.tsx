const HomeBanner = () => {
  return (
    <div>
      <div className="extended-hero-class bg-blue-400 lg:ml-36 w-full lg:w-5/6 mt-5 text-white pl-32">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 lg:mb-8">PoKI ShOP Sale!</h1>
            <p className="py-2 lg:py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn w-full lg:w-3/4">Get Started</button>
          </div>
          <img
            src="/banner.png"
            alt="Banner"
            className="w-full lg:w-1/2 mt-4 lg:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;



