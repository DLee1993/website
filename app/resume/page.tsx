"use client";

import Link from "next/link";
import { resume } from "../portfolioData";
import SocialLinks from "../components/SocialLinks";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { item, container } from "../lib/framerMotion";

export default function ResumePage() {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-20 my-14 md:my-16 lg:my-20"
        >
            <motion.section variants={item} className="flex flex-col gap-7">
                <h1 className="text-heading leading-[110%] font-bold font-Lora">
                    Change is inevitable, growth is optional.
                </h1>
                <p className="leading-[151%] tracking-none font-medium text-zinc-300 text-subText sm:text-base">
                    I am a detail-oriented and motivated developer who build responsive modern web
                    apps. I seek a role that challenges me and lets me contribute to exciting
                    projects, nurturing my growth in Frontend Development.
                </p>
                <aside className="flex flex-col min-[500px]:flex-row justify-between max-[500px]:items-start gap-y-6">
                    <Link
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="flex justify-evenly items-center customLinkHover max-w-40 text-subText ring-[1px] ring-zinc-300/10 group"
                    >
                        Download Resume
                    </Link>
                    <SocialLinks />
                </aside>
            </motion.section>
            <motion.section variants={item}>
                {resume.map((item, index) => (
                    <section key={index} className="mb-12">
                        <h2 className="text-subHeading font-medium underline underline-offset-2">
                            {item.title}
                        </h2>
                        {item.courses
                            ? item.courses?.map((course, index) => (
                                  <article key={index} className="my-6 ml-4">
                                      <h3 className="font-bold mb-2.5 text-subHeading">
                                          {course.courseProvider}
                                      </h3>
                                      <ul className="list-disc md:ml-8 space-y-2 text-zinc-300">
                                          {course.courseTitles.map((course, index) => (
                                              <li key={`course-${index}`}>{course}</li>
                                          ))}
                                      </ul>
                                  </article>
                              ))
                            : item.keynotes.map((note, index) => (
                                  <article key={index} className="my-6 ml-4">
                                      <ul className="list-disc md:ml-8">
                                          <li>{note}</li>
                                      </ul>
                                  </article>
                              ))}
                    </section>
                ))}
            </motion.section>
            <ContactForm />
        </motion.section>
    );
}
