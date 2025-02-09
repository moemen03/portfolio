import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

export default function App() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <div className="nav-li fixed top-[80px] left-0 z-50 rounded-xl bg-[#00012A] p-5 text-white text-center">
        still under coding
      </div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </main>
  )
}