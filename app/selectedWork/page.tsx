"use client";

import Link from "next/link";
import { projects } from "../portfolioData";
import { motion } from "framer-motion";
import { item, container } from "../lib/framerMotion";
import IndividualLink from "../components/IndividualLink";

export default function SelectedWorkRootPage() {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="my-14 md:my-16 lg:my-20"
        >
            <motion.article variants={item}>
                <h1 className="text-heading font-medium">Selected Works</h1>
                <p className="text-zinc-300 mt-4 text-subText sm:text-base">
                    This is the accumulation of my learning, here you will find everything from full
                    stack apps, landing pages and responsive components.
                </p>
            </motion.article>
            <motion.section variants={item}>
                <ul className="text-base flex flex-col gap-2 mt-5 sm:mt-7 md:mt-9 lg:mt-12">
                    {projects.map((project, index) => (
                        <IndividualLink
                            key={index}
                            details={project}
                            index={index}
                            type={"project"}
                        />
                    ))}
                </ul>
                <Link
                    href="https://github.com/DLee1993"
                    target="_blank"
                    className="flex justify-evenly items-center gap-2 customLinkHover w-48 h-10 text-subText mt-12 mx-auto ring-[1px] ring-zinc-300/10 group"
                >
                    view more on github
                </Link>
            </motion.section>
        </motion.section>
    );
}
