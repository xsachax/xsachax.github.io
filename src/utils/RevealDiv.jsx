import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "../global.css";

function RevealDiv({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ ease: "easeIn", duration: 0.5 }}
        style={{
          position: "absolute",
          opacity: 0.5,
          borderRadius: 30,
          top: 4,
          left: 0,
          right: 0,
          bottom: 4,
          background: "var(--theme-gradient)",
        }}
      ></motion.div>
    </div>
  );
}
export default RevealDiv;
