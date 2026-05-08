"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-2xl border border-pink-light/30 bg-white/95 shadow-lg shadow-pink-main/5 w-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300" key={i}>
                  <div className="font-sans text-gray-text leading-relaxed text-base italic mb-4">"{text}"</div>
                  <div className="flex items-center gap-4">
                    <img
                      width={48}
                      height={48}
                      src={image}
                      alt={name}
                      className="h-12 w-12 rounded-full border-2 border-pink-light/50 object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-sans font-bold text-purple-dark leading-tight text-lg">{name}</div>
                      <div className="font-sans text-sm text-pink-main font-medium">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
