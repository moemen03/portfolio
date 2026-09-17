import About from "./sections/About";
import PixelSnow from "./components/PixelSnow";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Tech from "./sections/Tech";
import Playground from "./sections/Playground";

export default function App() {
  if (window.location.pathname.replace(/\/+$/, "") === "/playground") {
    return <Playground />;
  }

  return (
    <main className="relative">
      <Navbar/>
      <div className="ambient-sections">
        <PixelSnow
          className="ambient-snow"
          color="#9b87ff"
          flakeSize={0.01}
          minFlakeSize={1.2}
          pixelResolution={190}
          speed={0.48}
          depthFade={8}
          farPlane={20}
          brightness={0.9}
          density={0.22}
          direction={125}
          variant="square"
        />
        <div className="ambient-content max-w-7xl mx-auto">
          <Hero/>
          <About/>
          <Experience/>
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <Tech/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  )
}
