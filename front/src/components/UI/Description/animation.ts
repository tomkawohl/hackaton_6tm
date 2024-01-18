/**
 * File: \src\component\Header\animation.js
 * Created Date: Thursday, November 16th 2023
 * Author: NathanCoquelin
 * -----
 * Last Modified: Wed Jan 17 2024
 * Modified By: Nathan Coquelin
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import { Variants } from 'framer-motion';

export const slideUp: Variants = {
  initial: {
    y: '100%',
  },
  open: (i) => ({
    y: '0%',
    transition: { duration: 0.5, delay: 0.017 * i },
  }),
  closed: {
    y: '100%',
    transition: { duration: 0.5 },
  },
};
