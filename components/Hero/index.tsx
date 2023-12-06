import Link from "next/link";

import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="home"
        className="banner_section relative z-10 mt-[90px] overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{ backgroundImage: "url(/images/home/back_1.jpeg)" }}
      >
        <div className="container">
          <div className="banner_wrapper">
            <h1>{t("TITLE")}</h1>
            <p>{t("HERA_CONTENT")}</p>
            {/* <div className="banner_buttons">
              <a href="https://hupp.tech/contact-us/">{t("CONTACT_US")}</a>
              <a href="https://hupp.tech/portfolio/">{t("PORTFOLIO")}</a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
