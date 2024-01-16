/*
 * File: \src\component\Description\index.tsx
 * Created Date: Friday, November 17th 2023
 * Author: NathanCoquelin
 * -----
 * Last Modified: Mon Dec 25 2023
 * Modified By: NateCo_001
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import "./style.scss";
import { slideUp } from "./animation";

type Props = {
  text: string;
  containerStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  spanStyle?: React.CSSProperties;
  className?: string;
};

const Description = ({
  text,
  containerStyle,
  textStyle,
  spanStyle,
  className,
}: Props) => {
  const descriptionRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(descriptionRef);
  return (
    <div style={containerStyle && containerStyle} className="description">
      <p style={textStyle}>
        {text.split(" ").map((word, index) => {
          return (
            <span key={index} className="description__mask">
              <motion.span
                ref={descriptionRef}
                className={`description__word ${className}`}
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
                key={index}
                style={spanStyle && spanStyle}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default Description;
