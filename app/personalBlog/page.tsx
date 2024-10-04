"use client";

import Link from "next/link";
import { blogs } from "../portfolioData";
import Arrow from "../components/Arrow";
import { motion } from "framer-motion";
import { item, container } from "../lib/framerMotion";

export default function PersonalBlogRootPage() {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="my-14 md:my-16 lg:my-20"
        >
            <motion.article variants={item}>
                <h1 className="text-subHeading font-medium">My personal blog posts</h1>
                <p className="text-zinc-300 mt-6 text-subText sm:text-base">
                    Blogging offers me a creative platform for sharing my code while also honing my
                    abilities to communicate coherently about code and my thought process.
                </p>
            </motion.article>
            <motion.section variants={item}>
                <aside className="mt-12 grid place-items-end">
                    <button className="flex justify-evenly items-center customLinkHover w-24 text-subText ring-[1px] ring-zinc-300/10 group">
                        filter
                    </button>
                </aside>
                <ul className="text-base flex flex-col mt-5 sm:mt-7 md:mt-9 lg:mt-12">
                    {blogs.map((blog, index) => (
                        <li key={index} className="group">
                            <Link
                                href={`/personalBlog/${blog.blogName}`}
                                className={`border-b-2 ${
                                    index === blogs.length - 1 && "border-b-0"
                                } text-zinc-300 hover:bg-zinc-800/40 border-zinc-800 px-2 sm:px-4 py-4 flex justify-between items-center transition-all duration-200`}
                            >
                                <article className="w-4/5">
                                    <p className="font-medium">{blog.title}</p>
                                </article>
                                <Arrow />
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.section>
        </motion.section>
    );
}
