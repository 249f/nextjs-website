import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50 bg-black/90 backdrop-blur-sm border-b-2 border-white">
        <Link href="/" className="text-xl font-bold tracking-tighter uppercase transition-opacity hover:opacity-70">
          B&amp;W Studio
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
          <Link href="#services" className="link-underline">Services</Link>
          <Link href="#about" className="link-underline">About</Link>
          <Link href="#contact" className="link-underline">Contact</Link>
        </div>
        <button className="md:hidden text-sm font-bold uppercase tracking-widest">Menu</button>
      </nav>

      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-6 md:px-10 min-h-[80vh] flex flex-col justify-center">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter fade-in-up">
              We engineer<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>attention.</span>
            </h1>
            <p className="mt-10 text-xl md:text-3xl max-w-3xl font-medium fade-in-up delay-100">
              Not just another marketing agency. We build digital dominance through stark contrasts, brutal honesty, and calculated execution.
            </p>
            <div className="mt-16 fade-in-up delay-200">
              <Link href="#contact" className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold uppercase tracking-widest hover-invert border-brutal transition-all text-lg">
                Dominate your market
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="border-t-2 border-white border-brutal border-l-0 border-r-0 border-b-0 mt-12 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-white">

            {/* Service 1 */}
            <div className="p-10 md:p-16 hover-invert group flex flex-col justify-between min-h-[450px]">
              <div>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">01<br />Strategy</h3>
                <p className="text-lg md:text-xl font-medium opacity-90 group-hover:opacity-100 leading-relaxed">
                  Data-driven market positioning that annihilates competition. No fluff, just pure analytical execution.
                </p>
              </div>
              <div className="mt-12">
                <span className="font-bold uppercase tracking-widest border-b-2 border-current pb-1 hidden group-hover:inline-block">Read More</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-10 md:p-16 hover-invert group flex flex-col justify-between min-h-[450px]">
              <div>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">02<br />Creative</h3>
                <p className="text-lg md:text-xl font-medium opacity-90 group-hover:opacity-100 leading-relaxed">
                  High-converting visual assets and brutalist digital experiences designed to demand and hold absolute attention.
                </p>
              </div>
              <div className="mt-12">
                <span className="font-bold uppercase tracking-widest border-b-2 border-current pb-1 hidden group-hover:inline-block">Read More</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-10 md:p-16 hover-invert group flex flex-col justify-between min-h-[450px]">
              <div>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">03<br />Growth</h3>
                <p className="text-lg md:text-xl font-medium opacity-90 group-hover:opacity-100 leading-relaxed">
                  Relentless performance marketing scales. Paid acquisition loops engineered for maximum measurable ROI.
                </p>
              </div>
              <div className="mt-12">
                <span className="font-bold uppercase tracking-widest border-b-2 border-current pb-1 hidden group-hover:inline-block">Read More</span>
              </div>
            </div>

          </div>
        </section>

        {/* Marquee or Bold Statement */}
        <section className="bg-white text-black p-10 md:p-16 overflow-hidden flex items-center border-y-2 border-white hover-invert hover:border-white cursor-default transition-none">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter whitespace-nowrap opacity-90">
            NO EXCUSES. &nbsp;&nbsp; PURE EXECUTION. &nbsp;&nbsp; NO EXCUSES. &nbsp;&nbsp; PURE EXECUTION.
          </h2>
        </section>

        {/* Contact/Footer */}
        <section id="contact" className="p-6 md:p-10 min-h-[60vh] flex flex-col justify-center">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 py-16">
            <div>
              <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-10">
                Lets Talk<br />Business.
              </h2>
              <a href="mailto:hello@bwstudio.com" className="text-2xl md:text-5xl font-bold link-underline pb-2 inline-block">
                hello@bwstudio.com
              </a>
            </div>
            <div className="flex flex-col items-start md:items-end justify-end gap-6 text-xl font-bold uppercase tracking-widest">
              <a href="#" className="link-underline">Instagram</a>
              <a href="#" className="link-underline">LinkedIn</a>
              <a href="#" className="link-underline">Twitter</a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto w-full mt-auto pt-10 border-t-2 border-white flex flex-col md:flex-row justify-between items-center gap-4 font-bold text-sm uppercase tracking-widest">
            <span>&copy; {new Date().getFullYear()} B&amp;W Studio</span>
            <span>All rights reserved.</span>
          </div>
        </section>
      </main>
    </div>
  );
}
