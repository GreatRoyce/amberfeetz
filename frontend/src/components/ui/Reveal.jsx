import { motion as Motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

function Reveal({
  children,
  className = "w-fit",
  btn = "w-fit",
  delay = 0.30, // allow custom delay per usage
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [inView, mainControls, slideControls]);

  return (
    <Motion.div ref={ref} className={`${btn} relative overflow-hidden`}>
      {/* CONTENT */}
      <Motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay }}
        className={className}
      >
        {children}
      </Motion.div>

      {/* SLIDE OVERLAY */}
      <Motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-0 bottom-0 left-0 right-0 bg-black z-20"
      />
    </Motion.div>
  );
}

export default Reveal;
