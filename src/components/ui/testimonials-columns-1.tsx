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
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-3xl border border-pink-light/50 bg-white shadow-lg shadow-pink-main/5 max-w-xs w-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300" key={i}>
                  <div className="font-sans text-gray-text leading-relaxed text-sm italic">"{text}"</div>
                  <div className="flex items-center gap-4 mt-6">
                    <img
                      width={48}
                      height={48}
                      src={image}
                      alt={name}
                      className="h-12 w-12 rounded-full border-2 border-pink-light object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-sans font-bold text-purple-dark leading-tight">{name}</div>
                      <div className="font-sans text-xs text-pink-main font-semibold">{role}</div>
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
