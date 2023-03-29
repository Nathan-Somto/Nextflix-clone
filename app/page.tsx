import Image from 'next/image'
import Nav from './components/Nav'
import Hero from './components/Hero'
import HomeSection from './components/HomeSection';
import FAQ from './components/FAQ';

export async function getData(){
  let data = await import('./data/homeSection.json');
  return data;
}
export default async function Home() {
  let {data,faq} =  await getData();
  return (
    <>
    <Nav/>
    <Hero/>
   <main>
  {/*   <h1 className='text-3xl font-bold text-primary-red text-center'>Let's Build Netflix </h1> */}
  {
    data.map((item, index)=>(
      <HomeSection h2={item.h2} h3={item.h3} index={index} key={index}/>
    ))
  }
  <FAQ data={faq}/>

   </main>
   </>
  )
}
