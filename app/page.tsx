import Nav from "@/components/layout/Nav";
import Scene from "@/components/layout/Scene";
import TunnelIntro from "@/components/sections/Intro/TunnelIntro";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Journey from "@/components/sections/Journey/LightJourney";
import DesignStack from "@/components/sections/Stack/DesignStack";
import Work from "@/components/sections/Work/Work";
import Experience from "@/components/sections/Experience/Experience";
import Certifications from "@/components/sections/Certifications/Certifications";
import Gallery from "@/components/sections/Gallery/Gallery";
import Connect from "@/components/sections/Connect/Connect";
import Footer from "@/components/layout/Footer/Footer";

/*
 * THE STACK.
 *
 * Every frame is a Scene: a runway that owns scroll distance, holding a
 * sticky full-screen stage. Scenes are painted in ascending order, so the
 * next one rises from the bottom of the viewport and COVERS the one before
 * it — the previous frame stays put behind it rather than scrolling away.
 * Native sticky does the work, so the movement is exactly scrubbable: stop
 * halfway and the incoming frame stays halfway across.
 *
 * `runway` is the extra scroll length a scene needs for its interior to play
 * (tunnel travel, chapters, the card arc, the decks, the drift wall). A scene
 * with no runway is a single held frame that the next one covers straight
 * away.
 *
 * Connect is last and deliberately NOT a Scene: it is taller than the
 * viewport and ends the page, so it rises over the Gallery and then scrolls
 * naturally into the footer.
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* keepOnMobile: these three fill one screen at any size, so they stay
            cinematic frames on phones too. The rest release into normal flow —
            their mobile layouts are tall and a fixed frame would clip them. */}
        <Scene order={1} runway={1.3} id="intro" keepOnMobile>
          <TunnelIntro />
        </Scene>

        <Scene order={2} id="hero">
          <Hero />
        </Scene>

        <Scene order={3} id="about">
          <About />
        </Scene>

        <Scene order={4} runway={6} id="journey" keepOnMobile>
          <Journey />
        </Scene>

        <Scene order={5} id="stack">
          <DesignStack />
        </Scene>

        <Scene order={6} runway={4.5} id="work">
          <Work />
        </Scene>

        <Scene order={7} runway={6.8} id="experience">
          <Experience />
        </Scene>

        <Scene order={8} runway={3.0} id="credentials">
          <Certifications />
        </Scene>

        <Scene order={9} runway={1.6} id="gallery" keepOnMobile>
          <Gallery />
        </Scene>

        <Scene order={10} runway={0.8} id="contact">
          <Connect />
        </Scene>

        {/* the footer frame rises over the connect scene and covers it */}
        <div className="finalFrame">
          <Footer />
        </div>
      </main>
    </>
  );
}
