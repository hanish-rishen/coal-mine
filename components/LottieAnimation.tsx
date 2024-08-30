'use client'

import React, { useRef, useEffect, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";

export default function LottieAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationData, setAnimationData] = useState<any>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    import("@/public/animations/coal mine.json").then((data) => setAnimationData(data.default));
  }, []);

  useEffect(() => {
    if (containerRef.current && animationData) {
      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: animationData
      });

      const handleComplete = () => {
        if (animRef.current) {
          animRef.current.setDirection(animRef.current.playDirection === 1 ? -1 : 1);
          animRef.current.play();
        }
      };

      animRef.current.addEventListener('complete', handleComplete);

      return () => {
        if (animRef.current) {
          animRef.current.removeEventListener('complete', handleComplete);
          animRef.current.destroy();
        }
      };
    }
  }, [animationData]);

  return <div ref={containerRef} style={{ width: 300, height: 225 }} />;
}