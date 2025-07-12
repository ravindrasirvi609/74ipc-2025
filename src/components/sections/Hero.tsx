"use client";
import { Calendar, MapPin, Users, ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// 6 high-quality photos of Bangalore tourist places
const slides = [
  "https://plus.unsplash.com/premium_photo-1697730407028-1c602ffb2e81?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Vidhana Soudha
  "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", // Bangalore Palace
  "https://images.unsplash.com/photo-1598084991519-c90900bc9df0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", // Lalbagh Botanical Garden
  "https://images.unsplash.com/photo-1633866122610-c59b6480ea1c?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Nandi Hills
  "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", // Bangalore cityscape
  "https://images.unsplash.com/photo-1615833487518-628c8210cd84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", // IT Park Bangalore
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const videoModalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate grid place-items-center min-h-[100dvh] overflow-hidden text-slate-100">
      {/* Image Slider */}
      <div className="absolute inset-0 -z-20">
        {slides.map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`Bangalore tourist place ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      {/* Liquid glass blobs (brand colours) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#e1681f]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#17840e]/20 rounded-full blur-[120px] animate-pulse [animation-delay:1s]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-24 md:py-32 grid gap-10 place-items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-lg">
          <span className="w-5 h-5 grid place-items-center rounded-full bg-[#e1681f] text-white font-bold text-xs">
            74
          </span>
          74th Indian Pharmaceutical Congress 2025
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.2rem,5vw+1rem,4.5rem)] font-black leading-none">
          AI & TECHNOLOGY{" "}
          <span className="block bg-gradient-to-r from-[#e1681f] to-[#17840e] bg-clip-text text-transparent">
            IN PHARMA:
          </span>
          <span className="block text-white/90 md:mt-2">
            Educate, Innovate, Empower
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="max-w-3xl text-lg md:text-xl text-slate-300">
          5 000+ pharmaceutical professionals, researchers & leaders converge at
          India’s most prestigious congress exploring AI & tech in healthcare.
        </p>

        {/* Key details */}
        <ul className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 text-slate-300">
          {[
            { icon: Calendar, text: "19–21 Dec 2025" },
            { icon: MapPin, text: "BIEC, Bangalore" },
            { icon: Users, text: "5 000+ Delegates" },
          ].map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2">
              <Icon className="w-5 h-5 text-[#e1681f]" />
              <span>{text}</span>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/registration"
            className="group relative isolate overflow-hidden rounded-full px-7 py-3 font-bold text-white bg-[#e1681f] shadow-lg hover:shadow-[#e1681f]/30 transition-all duration-300 ease-out hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Register Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[#17840e] to-[#e1681f] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>

          <button
            onClick={() => videoModalRef.current?.showModal()}
            className="group flex items-center gap-2 px-7 py-3 rounded-full font-bold border border-slate-600 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105"
          >
            <Play className="w-5 h-5 text-[#17840e] group-hover:text-white transition-colors" />
            Watch Promo
          </button>
        </div>

        {/* Stats */}
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 text-center">
          {[
            ["74th", "Edition"],
            ["100+", "Sessions"],
            ["200+", "Speakers"],
            ["50+", "Countries"],
          ].map(([num, label]) => (
            <div key={label} className="space-y-1">
              <dt className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#e1681f] to-[#17840e] bg-clip-text text-transparent">
                {num}
              </dt>
              <dd className="text-sm text-slate-400">{label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Scroll hint */}
      <button
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <div className="w-6 h-10 border-2 border-[#17840e] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#17840e] rounded-full mt-2 animate-pulse" />
        </div>
      </button>

      {/* Modal for promo video */}
      <dialog
        ref={videoModalRef}
        className="w-full max-w-3xl rounded-xl bg-transparent backdrop:bg-black/70"
      >
        <div className="relative aspect-video">
          <iframe
            src="https://www.youtube.com/embed/LV-2UHUaWPQ?si=h6xqWErnNlfM6kBy"
            title="IPC 2025 Promo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-xl"
          />
          <button
            onClick={() => videoModalRef.current?.close()}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-black transition"
          >
            ✕
          </button>
        </div>
      </dialog>
    </section>
  );
};

export default Hero;
