import Image from "next/image";
import Link from "next/link";

const Service = () => {
  return (
    <>
      <section id="home" className="services_section">
        <div className="container">
          <div className="services_wrapper">
            <div className="services_box">
              <div className="flex items-center justify-center">
                <Image
                  src="https://hupp.tech/wp-content/uploads/2023/02/javascript.svg"
                  alt=""
                  width={60}
                  height={60}
                />
              </div>
              <h2>JavaScript</h2>
              <p>
                For a highly dynamic web experience, we provide solutions based
                on JavaScript Frameworks and Libraries that will propel you on
                the market.
              </p>
            </div>
            <div className="services_box">
              <div className="flex items-center justify-center">
                <Image
                  src="https://hupp.tech/wp-content/uploads/2023/02/front-end.svg"
                  alt=""
                  width={60}
                  height={60}
                />
              </div>
              <h2>Frontend Development</h2>
              <p>
                Our skilled team will ensure an user-friendly interface for any
                mobile and web application that will serve your business
                purpose.
              </p>
            </div>
            <div className="services_box">
              <div className="flex items-center justify-center">
                <Image
                  src="https://hupp.tech/wp-content/uploads/2023/02/php-document.svg"
                  alt=""
                  width={60}
                  height={60}
                />
              </div>
              <h2>PHP</h2>
              <p>
                We render PHP development with all its frameworks. This fosters
                a dynamic PHP environment to deliver excellent solutions to
                short and long-term projects.
              </p>
            </div>
            <div className="services_box">
              <div className="flex items-center justify-center">
                <Image
                  src="https://hupp.tech/wp-content/uploads/2023/02/qa.svg"
                  alt=""
                  width={60}
                  height={60}
                />
              </div>
              <h2>QA Services</h2>
              <p>
                Provide a wide range of QA services at each stage of the
                development lifecycle. We ensure that projects meet the
                requirements with bug free environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
