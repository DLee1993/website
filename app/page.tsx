"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "./portfolioData";
import ContactForm from "./components/ContactForm";
import { container, item } from "./lib/framerMotion";
import IndividualLink from "./components/IndividualLink";

export default function Home() {
    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="my-14 md:my-16 lg:my-20"
        >
            <motion.h1
                variants={item}
                className="text-heading leading-tight font-Lora font-semibold"
            >
                I&apos;m David Lee, a detail-orientated frontend developer specialising in creating
                engaging, user-friendly experiences.
            </motion.h1>
            <motion.p variants={item} className="text-zinc-300 mt-8 text-subText sm:text-base">
                I enjoy building; finding a project that challenges my present way of thinking
                allows me to grow and develop more effectively. My current obsession is
                accessibility; I want everyone to have a consistent experience while visiting my
                websites.
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
                            <IndividualLink
                                key={index}
                                details={project}
                                index={index}
                                type={"project"}
                            />
                        ))}
                    </ul>
                </motion.section>
            </section>
            <ContactForm />
        </motion.section>
    );
}
