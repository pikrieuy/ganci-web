import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const HeroSection02 = () => {
  return (
    <div className={cn("flex flex-col items-center gap-4 w-full")}>
      <div className="w-full bg-gradient-to-br from-pink-50 via-white to-pink-100 overflow-hidden relative">
        {/* Soft decorative blobs */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pink-300/30 blur-[100px] z-0 pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-300/20 blur-[120px] z-0 pointer-events-none" 
        />

        <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 relative z-10">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
              >
                <p className="text-sm font-bold tracking-widest text-pink-500 uppercase mb-4">
                  A Hub for Memories & Art
                </p>
                <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.1]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">Handcrafted</span>
                  <br />Keychain
                </h1>
                <p className="max-w-lg mt-6 text-lg sm:text-xl font-medium text-slate-600 leading-relaxed">
                  Kami mengubah memori berharga Anda menjadi karya seni gantungan kunci yang personal dan dibuat sepenuh hati.
                </p>
                <div className="relative inline-flex items-center justify-start mt-8 sm:mt-10 group">
                  <div className="absolute transition-all duration-300 rounded-full -inset-px bg-gradient-to-r from-pink-400 to-rose-400 opacity-70 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-pink-300/50"></div>
                  <Link to="/catalog" className="relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-pink-500 rounded-full hover:bg-pink-600 transition-colors" role="button">
                    Pesan Sekarang
                  </Link>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="inline-flex items-center p-4 mt-8 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm"
                >
                  <Sparkles className="w-5 h-5 text-pink-500 shrink-0" />
                  <span className="ml-3 text-sm sm:text-base font-medium text-slate-700">Lebih dari <strong className="text-pink-600">500+</strong> karya dipesan bulan ini</span>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 3 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-none"
              >
                {/* Decorative background behind image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-300 to-purple-300 rounded-3xl blur-2xl opacity-30 -z-10"></div>
                <img 
                  className="w-full rounded-3xl shadow-2xl hover:rotate-0 transition-transform duration-500 border-[12px] border-white/80 backdrop-blur-md" 
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop" 
                  alt="Handcrafted Keychain Art" 
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
