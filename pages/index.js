
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { useTheme } from "next-themes";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Home = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  setTheme('light');
  return (
    <>
      <Head>
        <title>Yuliia Dymura Consulting</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Header />
      <ScrollUp />
      <Hero />
      <Service />
      <Blog />
      <Features />
      <Video />
      <Brands />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;


export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;
  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}
