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

const pixelSnowProps = {
  className: "ambient-snow",
  color: "#9b87ff",
  flakeSize: 0.01,
  minFlakeSize: 1.2,
  pixelResolution: 190,
  speed: 0.48,
  depthFade: 8,
  farPlane: 20,
  brightness: 0.9,
  density: 0.22,
  direction: 125,
  variant: "square",
};

export default function App() {
  if (window.location.pathname.replace(/\/+$/, "") === "/playground") {
    return (
      <main className="relative">
        <div className="ambient-sections">
          <PixelSnow {...pixelSnowProps} />
          <div className="ambient-content">
            <Playground />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative">
      <Navbar/>
      <div className="ambient-sections">
        <PixelSnow {...pixelSnowProps} />
        <div className="ambient-content max-w-7xl mx-auto">
          <Hero/>
          <About/>
          <Experience/>
          <Tech/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </main>
  )
}
