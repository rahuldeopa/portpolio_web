import React from "react";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Certifications from "./Components/Certifications";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
      <div class="relative h-full w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>
      </div>
      <div className="container mx-auto px-8">
        <Navigation/>
        <Hero/>
        <Technologies/>
        <Projects/>
        <Experience/>
        <Certifications/>
        <Contact/>
         
      </div>
      <footer className="text-center py-6 border-t border-gray-800">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Rahul Deopa. All rights reserved.
        </p>
      </footer>

    </div>
  );
};

export default App;