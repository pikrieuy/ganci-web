import React from "react";
import { ArrowDownRight } from "lucide-react"; 
import { Button } from "@/components/ui/button";
  
export function HeroSection04() {
  return (
    <section className="min-h-screen overflow-hidden relative py-20 bg-gradient-to-br from-pink-50 via-white to-pink-100 text-slate-900">
      <div className="mx-auto max-w-7xl relative z-20 px-6">
        <div className="relative mt-12 md:mt-24">
          <p className="text-sm absolute -top-4 left-0 md:left-20 font-medium tracking-wider text-pink-500">
            EST. 2024
          </p>
          <h1
            className="z-20 text-slate-900 relative font-extrabold text-center tracking-[-4px] md:tracking-[-7px] text-5xl sm:text-7xl md:text-8xl xl:tracking-[-1rem] xl:text-[10rem] uppercase leading-none"
          >
            KRIYA CUSTOM
          </h1>
          <p className="text-2xl sm:text-4xl hidden xl:block absolute -bottom-10 right-24 font-light tracking-[4px] text-pink-600">
            HANDCRAFTED KEYCHAIN
          </p>
          <p className="text-xl sm:text-3xl absolute xl:hidden -bottom-8 left-4 md:left-24 font-light tracking-[4px] text-pink-600">
            HANDCRAFTED KEYCHAIN
          </p>
        </div>

        <div className="mt-16 md:mt-24 relative z-30 flex flex-col items-center pb-20">
          <p className="mx-auto max-w-2xl font-sans text-center text-lg md:text-xl text-slate-700 font-medium tracking-wide leading-relaxed">
            KAMI MENGUBAH MEMORI BERHARGA ANDA MENJADI
            <br className="hidden md:block" />
            KARYA SENI GANTUNGAN KUNCI YANG PERSONAL DAN 
            <br className="hidden md:block" />
            DIBUAT SEPENUH HATI.
          </p>
          <div className="flex justify-center pt-10">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-10 py-6 text-lg font-bold shadow-xl shadow-pink-300/50 transition-all hover:scale-105">
              Pesan Sekarang
            </Button>
          </div>
        </div>
      </div>
      
      {/* Soft gradient decorative blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pink-300/30 blur-[100px] z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-300/20 blur-[120px] z-0 pointer-events-none" />
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-rose-200/40 blur-[80px] z-0 pointer-events-none" />
      
      {/* Grid Pattern overlay matching shadcn hero style but softer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f472b6 1px, transparent 1px),
            linear-gradient(to bottom, #f472b6 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)",
        }}
      />
    </section>
  );
}
