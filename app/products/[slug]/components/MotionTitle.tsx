'use client';

import { motion } from "framer-motion";

const MotionTitle = ({ title }: { title: string }) => (
    <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
        >
        {title}
    </motion.h1>
)

export default MotionTitle;