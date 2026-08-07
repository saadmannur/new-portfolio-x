"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// A thin gradient line fixed at the very top of the page that fills left
// to right as you scroll down — sits above the navbar, like aswincloud.com.
export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 300,
        damping: 40,
        restDelta: 0.001,
    });

    return (
        <motion.div
            style={{ scaleX }}
            className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-emerald-400 to-primary"
        />
    );
}