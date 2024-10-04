"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects, blogs } from "./portfolioData";
import Arrow from "./components/Arrow";
import ContactForm from "./components/ContactForm";
import { container, item } from "./lib/framerMotion";

export default function Home() {
    const featuredProjects = projects.filter((project) => project.featured);
    const featuredBlogs = blogs.filter((blog) => blog.featured);

    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="my-14 md:my-16 lg:my-20"
        >
            <motion.h1 variants={item} className="text-heading font-Lora font-semibold">
                I&apos;m David Lee, a detail-orientated frontend developer specialising in creating
                engaging, user-friendly experiences.
            </motion.h1>
            <motion.p variants={item} className="text-zinc-300 mt-8">
                I enjoy building; finding a project that challenges my present way of thinking
                allows me to grow and develop more effectively. My current obsession is
                accessibility; I want everyone to have a consistent experience while visiting my
                websites. I also create blog posts to strengthen my ability to communicate train of
                thought.
                <br />
                <br />
                Welcome to my digital personality.
            </motion.p>
            <section className="my-14 md:my-16 lg:my-20 flex flex-col gap-24">
                {/* Projects */}
                <motion.section variants={item} id="featuredProjects">
                    <aside className="flex justify-between items-center">
                        <h2 className="font-medium text-subHeading">Featured Work</h2>
                        <Link
                            href="/selectedWork"
                            className="text-subText font-medium text-zinc-300 hover:text-white tracking-wide transition-all duration-150"
                        >
                            view all projects
                        </Link>
                    </aside>
                    <ul className="text-base flex flex-col gap-2 mt-5 sm:mt-7 md:mt-9 lg:mt-12">
                        {featuredProjects.map((project, index) => (
                            <li key={index} className="group">
                                <Link
                                    href={`/selectedWork/${project.projectName}`}
                                    className="text-zinc-300 hover:bg-zinc-800/40 border-2 border-zinc-800 px-2 sm:px-4 py-4 flex justify-between items-center rounded-md transition-all duration-200"
                                >
                                    <article className="w-11/12">
                                        <p className="font-medium">{project.title}</p>
                                        <p className="text-subText max-w-lg hidden min-[465px]:block">
                                            {project.descriptionSnippet}
                                        </p>
                                    </article>
                                    <Arrow />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.section>

                {/* Blogs */}
                <motion.section variants={item} id="featuredBlogs">
                    <aside className="flex justify-between items-center">
                        <h2 className="font-medium text-subHeading">Personal blogs</h2>
                        <Link
                            href="/personalBlog"
                            className="text-subText font-medium text-zinc-300 hover:text-white tracking-wide transition-all duration-150"
                        >
                            view all posts
                        </Link>
                    </aside>
                    <ul className="text-base flex flex-col mt-5 sm:mt-7 md:mt-9 lg:mt-12">
                        {featuredBlogs.map((blog, index) => (
                            <li key={index} className="group">
                                <Link
                                    href={`/selectedWork/${blog.blogName}`}
                                    className={`border-b-2 ${
                                        index === featuredProjects.length - 1 && "border-b-0"
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
            </section>
            <ContactForm />
        </motion.section>
    );
}
