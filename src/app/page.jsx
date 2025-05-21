import About from "@/components/home/about/about";
import Contact from "@/components/home/contact/contact";
import Hero from "@/components/home/hero/hero";
import Projects from "@/components/home/project/project";
import Skills from "@/components/home/skills/skills";
import Header from "@/components/layout/navbar/navbar";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
