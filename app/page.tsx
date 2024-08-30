'use client'

import { Button } from "@nextui-org/button";
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import { title, subtitle } from "@/components/primitives";

const LottieAnimation = dynamic(() => import('@/components/LottieAnimation'), { ssr: false });

export default function Home() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-8 py-12 md:py-16 text-white"
    >
      <motion.h1 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={title({ color: "foreground" })}
      >
        Welcome to Coal Mine Solutions
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={subtitle({ className: "text-center max-w-2xl" })}
      >
        Providing innovative and safe solutions for the coal mining industry
      </motion.p>
      <LottieAnimation />
      <motion.div 
        className="flex gap-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Button color="primary" variant="shadow" size="lg">
          Our Services
        </Button>
        <Button color="default" variant="bordered" size="lg">
          Contact Us
        </Button>
      </motion.div>
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {[
            "State-of-the-art mining technology",
            "Commitment to safety and environmental responsibility",
            "Experienced team of mining professionals",
            "Efficient and cost-effective operations"
          ].map((item, index) => (
            <motion.li 
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <span className="text-primary">•</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
}
