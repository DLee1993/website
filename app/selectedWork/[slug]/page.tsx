"use client";

import { notFound } from "next/navigation";
import { usePathname } from "next/navigation";
import { projects } from "../../portfolioData";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { item, container } from "@/app/lib/framerMotion";
import Arrow from "@/app/components/Arrow";

export default function IndividualProject() {
    const pathname = usePathname();

    // get project name
    const slug = pathname.split("/")[2];

    // find project in projects
    const project = projects.find((project) => project.projectName?.toLowerCase() === slug);

    // get the project index
    const projectIndex = projects.indexOf(project!);

    //find the next project in the list
    let nextProject = null;

    if (projectIndex === projects.length - 1) {
        nextProject = projects[0];
    } else {
        nextProject = projects[projectIndex + 1];
    }

    if (!project) return notFound();

    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="my-14 md:my-16 lg:my-20"
        >
            <section id="projectDetails">
                <motion.h1
                    variants={item}
                    className="text-heading font-Lora leading-none font-medium"
                >
                    {project?.title}
                </motion.h1>
                <motion.p variants={item} className="mt-5 text-zinc-300">
                    {project?.fullDescription}
                </motion.p>
                <motion.ul
                    variants={item}
                    className="flex flex-wrap items-end mt-10 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
                >
                    <li>
                        <article className="flex flex-col gap-2">
                            <p className="font-medium">Project Type</p>
                            <p className="text-zinc-300">{project?.projectType}</p>
                        </article>
                    </li>
                    <li>
                        <article className="flex flex-col gap-2">
                            <p className="font-medium">Tech Stack</p>
                            <ul className="flex gap-2 text-zinc-300 capitalize">
                                {project?.techStack.map((item, index) => (
                                    <li key={index}>{item},</li>
                                ))}
                            </ul>
                        </article>
                    </li>
                    <li className="flex gap-5 min-[510px]:ml-auto">
                        <Link
                            href={project?.liveSite}
                            target="_blank"
                            className="h-fit text-zinc-300 hover:text-white underline text-right"
                        >
                            Live site
                        </Link>
                        <Link
                            href={project?.codeRepository}
                            target="_blank"
                            className="h-fit text-zinc-300 hover:text-white underline text-right"
                        >
                            Code
                        </Link>
                    </li>
                </motion.ul>
                <motion.figure variants={item} className="overflow-hidden rounded-xl mt-10">
                    <Image
                        src={project!.screenshot1}
                        alt={`${project?.title} screenshot`}
                        width={1000}
                        height={1000}
                        loading="lazy"
                        className="w-full h-full rounded-xl group-hover:scale-110 transition-transform duration-300"
                    />
                </motion.figure>
                <motion.p variants={item} className="my-10">
                    {project?.textSnippet1}
                </motion.p>
                <motion.section variants={item} className="flex flex-col sm:flex-row gap-3">
                    <figure className="overflow-hidden rounded-xl">
                        <Image
                            src={project!.screenshot2}
                            alt={`${project?.title} screenshot`}
                            width={1000}
                            height={1000}
                            loading="lazy"
                            className="w-full h-full rounded-xl"
                        />
                    </figure>
                    <figure className="overflow-hidden rounded-xl">
                        <Image
                            src={project!.screenshot3}
                            alt={`${project?.title} screenshot`}
                            width={1000}
                            height={1000}
                            loading="lazy"
                            className="w-full h-full rounded-xl"
                        />
                    </figure>
                </motion.section>
                <motion.p variants={item} className="my-10">
                    {project?.textSnippet2}
                </motion.p>
                <motion.section variants={item} className="flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <figure className="overflow-hidden rounded-xl">
                            <Image
                                src={project!.screenshot4}
                                alt={`${project?.title} screenshot`}
                                width={1000}
                                height={1000}
                                loading="lazy"
                                className="w-full h-full rounded-xl"
                            />
                        </figure>
                        <figure className="overflow-hidden rounded-xl">
                            <Image
                                src={project!.screenshot5}
                                alt={`${project?.title} screenshot`}
                                width={1000}
                                height={1000}
                                loading="lazy"
                                className="w-full h-full rounded-xl"
                            />
                        </figure>
                    </div>
                    <figure className="overflow-hidden rounded-xl">
                        <Image
                            src={project!.laptopImage}
                            alt={`${project?.title} screenshot`}
                            width={1000}
                            height={1000}
                            loading="lazy"
                            className="w-full h-full rounded-xl"
                        />
                    </figure>
                </motion.section>
                <motion.p variants={item} className="my-10">
                    {project?.textSnippet3}
                </motion.p>
                <motion.section variants={item} id="next_project" className="my-20">
                    <Link
                        href={`/selectedWork/${nextProject?.projectName}`}
                        className="hover:bg-zinc-800/40 border-2 border-zinc-800 px-2 sm:px-4 py-4 flex justify-between items-center rounded-md transition-all duration-200 group"
                    >
                        <aside>
                            <h2 className="text-heading font-Lora font-medium">Next Project</h2>
                            <h3 className="text-subHeading font-medium mt-3">
                                {nextProject.title}
                            </h3>
                            <p className="text-subText text-zinc-300">
                                {nextProject.descriptionSnippet}
                            </p>
                        </aside>
                        <Arrow />
                    </Link>
                </motion.section>
            </section>
        </motion.section>
    );
}
