import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="banner_section relative z-10 mt-[90px] overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{ backgroundImage: "url(/images/home/back_1.jpeg)" }}
      >
        <div className="container">
          <div className="banner_wrapper">
            <h1>Crafters of great mobile and web applications</h1>
            <p>
              We put our experience and talent at stake to build mobile and web
              applications for tangible results in a digital-oriented world.
            </p>
            <div className="banner_buttons">
              <a href="https://hupp.tech/contact-us/">Contact Us</a>
              <a href="https://hupp.tech/portfolio/">Portfolio</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
