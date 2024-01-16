/**
 * File: \src\component\Header\animation.js
 * Created Date: Thursday, November 16th 2023
 * Author: NathanCoquelin
 * -----
 * Last Modified: Fri Nov 17 2023
 * Modified By: NateCo_001
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.017 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};
