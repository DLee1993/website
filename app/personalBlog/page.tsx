"use client";

import { blogs } from "../portfolioData";
import { motion } from "framer-motion";
import { item, container } from "../lib/framerMotion";
import IndividualLink from "../components/IndividualLink";

export default function PersonalBlogRootPage() {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="my-14 md:my-16 lg:my-20"
        >
            <motion.article variants={item}>
                <h1 className="text-heading font-medium">My personal blog posts</h1>
                <p className="text-zinc-300 mt-4 text-subText sm:text-base">
                    Blogging offers me a creative platform for sharing my code while also honing my
                    abilities to communicate coherently about code and my thought process.
                </p>
            </motion.article>
            <motion.section variants={item}>
                <ul className="text-base flex flex-col mt-5 sm:mt-7 md:mt-9 lg:mt-12">
                    {blogs.map((blog, index) => (
                        <IndividualLink
                            key={index}
                            details={blog}
                            index={index}
                            type={"blog"}
                            dataLength={blogs.length}
                        />
                    ))}
                </ul>
            </motion.section>
        </motion.section>
    );
}
