import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SmartScroll({ children }) {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) {
      setShow(true); // Enter
    } else {
      setShow(false); // Exit
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
