"use client";

import { motion } from "framer-motion";
import Cube from "./Cube";


const cubes = [
    { x: 120, y: 0 },
    { x: 60, y: 60 },
    { x: 180, y: 60 },

    { x: 0, y: 120 },
    { x: 120, y: 120 },
    { x: 240, y: 120 },

    { x: 60, y: 180 },
    { x: 180, y: 180 },

    { x: 120, y: 240 },
];

export default function RubiksPuzzle() {
    return (
        <motion.div
            animate={{
                rotate: [0, 6, -6, 0],
            }}
            transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="relative mx-auto h-[260px] w-[360px]"
        >
            {cubes.map((cube, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{
                        left: cube.x,
                        top: cube.y,
                    }}
                >
                    <Cube delay={i * 0.2} />
                </div>
            ))}

            <div className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-3xl" />
        </motion.div>
    );
}