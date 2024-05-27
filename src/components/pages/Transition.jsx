import React from "react";
import { motion } from "framer-motion";

const Transition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      duration={2}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
