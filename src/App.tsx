/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Values from "./components/Values";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent/30 bg-charcoal">
      {/* Grain Overlay */}
      <div className="fixed inset-0 grain-overlay z-[100]" />

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Values />
      <Contact />
      <Footer />
    </div>
  );
}
