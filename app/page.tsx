import Nav from "./components/Nav";
import Hero from "./components/Hero";
import HomeSection from "./components/HomeSection";
import FAQ from "./components/FAQ";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

export async function getData() {
  let data = await import("./data/homeSection.json");
  return data;
}
export default async function Home() {
  let { data, faq } = await getData();
  return (
    <>
      <Nav />
      <Hero>
        <div className="text-center top-[50%] left-[50%] mt-[5%] absolute -translate-x-[50%] -translate-y-[50%] flex flex-col space-y-6 z-[8] py-6 w-[90%]">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">
            Unlimited Movies, Tv shows and more.
          </h1>
          <h2 className="text-xl font-semibold lg:text-2xl mb-3">
            Watch anywhere. Cancel anytime.
          </h2>
          <GetStarted />
        </div>
      </Hero>
      <main>
        {data.map((item, index) => (
          <HomeSection h2={item.h2} h3={item.h3} index={index} key={index} />
        ))}
        <FAQ data={faq} />
        <section className="text-center mt-7 space-y-4 w-[80%] mx-auto">
          <GetStarted />
        </section>
        <br className="h-[25px]" />
      </main>
      <Footer />
    </>
  );
}
