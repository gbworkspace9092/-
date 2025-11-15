import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Solution from "./components/Solution";
import Portfolio from "./components/Portfolio";
import Review from "./components/Review";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-gray-100">
        <Hero />
        <About />
        <Solution />
        <Portfolio />
        <Review />
        <Contact />
      </main>
    </>
  );
}
