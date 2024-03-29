import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => (
    <motion.ul variants={variants} className="side-ul">
        {itemIds.map(i => (
            <MenuItem i={i} key={i} value={itemValues} />
        ))}
    </motion.ul>
);

const itemIds = [0, 1, 2];
const itemValues = ['Pricing', 'Log In', 'Start Free Trial']