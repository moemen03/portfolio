import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

export default function App() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  )
}