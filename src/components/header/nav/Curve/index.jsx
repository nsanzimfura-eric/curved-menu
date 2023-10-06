import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

export default function Index() {
  const initialPath = `M150 0 L300 0 L300 ${window.innerHeight} L150 ${
    window.innerHeight
  } Q-100 ${window.innerHeight / 2} 100 0`;
  const targetPath = `M150 0 L200 0 L200 ${window.innerHeight} L150 ${
    window.innerHeight
  } Q100 ${window.innerHeight / 2} 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className={styles.svgCurve}>
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
