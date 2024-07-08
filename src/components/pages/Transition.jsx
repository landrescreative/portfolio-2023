import React from "react";
import { motion } from "framer-motion";

const Transition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      duration={5}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
