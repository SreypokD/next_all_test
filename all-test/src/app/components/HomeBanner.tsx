const HomeBanner = () => {
  return (
    <div>
      <div className="hero  bg-blue-500 ml-36 w-5/6 mt-5  text-white">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold">PoKI ShOP Sale!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn w-3/4">Get Started</button>
          </div>
          <img
            src="/banner.png"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
