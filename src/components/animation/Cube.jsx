"use client";

import { motion } from "framer-motion";

export default function Cube({ className = "", delay = 0 }) {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{
                y: [-8, 8, -8],
                rotate: [-2, 2, -2],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
            }}
            className={`relative h-20 w-20 ${className}`}
            whileHover={{
                scale: 1.08,
                rotate: 45,
            }}
        >
            <div
                className="absolute inset-0 rotate-45 rounded-2xl border border-border bg-card shadow-xl transition-all duration-300"
            />

            <div
                className="absolute inset-2 rotate-45 rounded-xl bg-gradient-to-br from-primary/40 via-background to-muted"
            />

            <div
                className="absolute inset-0 rotate-45 rounded-2xl ring-1 ring-primary/20"
            />
        </motion.div>
    );
}