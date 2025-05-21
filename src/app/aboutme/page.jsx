import Education from "@/components/aboutme/education/education";
import Experience from "@/components/aboutme/experience/experience";
import Hero from "@/components/aboutme/hero/hero";
import Header from "@/components/layout/navbar/navbar";

export default function aboutme() {
  return (
    <>
      <Header />
      <Hero />
      <Education />
      <Experience />
    </>
  );
}
