"use client";

import { usePathname } from "next/navigation";
import { TimeToRead, WordCounter } from "@/app/hooks/TimeToRead";
import { blogs } from "@/app/portfolioData";
import { CopyBlock, nord } from "react-code-blocks";
import { motion } from "framer-motion";
import { container, item } from "@/app/lib/framerMotion";

export default function IndividualBlogPost() {
    const pathname = usePathname();

    // get blog name
    const slug = pathname.split("/")[2].replaceAll("%20", " ");

    // find blog in blogs
    const blog = blogs.find((blog) => blog.title?.toLowerCase() === slug.toLocaleLowerCase());

    // find the total number of words
    const words = WordCounter(blog);

    // calculate how long it will take to read
    const timeToRead = TimeToRead(words);

    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="my-14 md:my-16 lg:my-20"
        >
            <motion.h1 variants={item} className="text-heading font-Lora">
                {blog?.title}
            </motion.h1>
            <motion.aside variants={item} className="flex gap-2 text-subText text-zinc-400">
                <p className="capitalize">{blog?.dateWritten}</p>
                <p>{timeToRead} min read</p>
            </motion.aside>
            <section className="mt-10 text-zinc-300">
                {blog?.textContent.map((content, index) => (
                    <article key={index} className="my-5 md:my-10">
                        <motion.p variants={item}>{content.string}</motion.p>
                        <motion.pre variants={item}>
                            {content.code && (
                                <CopyBlock
                                    text={content.code}
                                    theme={nord}
                                    customStyle={{ marginTop: "40px" }}
                                    language="javascript"
                                    showLineNumbers
                                    codeBlock
                                />
                            )}
                        </motion.pre>
                    </article>
                ))}
            </section>
        </motion.section>
    );
}
