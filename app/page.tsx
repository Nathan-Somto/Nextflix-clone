import Nav from "./components/Nav";
import HomeSection from "./components/HomeSection";
import FAQ from "./components/FAQ";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import AnimatedHero from "./components/AnimatedHero";

export async function getData() {
  let data = await import("./data/homeSection.json");
  return data;
}
export default async function Home() {
  let { data, faq } = await getData();
  return (
    <>
      <Nav />
     <AnimatedHero homepage/>
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
