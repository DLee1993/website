import Link from "next/link";
import { resume } from "../portfolioData";

export default function ResumePage() {
    return (
        <main>
            <section
                id="resumeHero"
                className="bg-foreground/5 rounded-b-3xl py-10 sm:py-12 px-8 sm:px-10 md:px-16 md:py-16"
            >
                <article className="flex flex-col gap-7">
                    <h1 className="-text--hero leading-[110%] max-w-[350px] md:max-w-[439px] lg:max-w-[500px] font-bold">
                        Change is inevitable, growth is optional.
                    </h1>
                    <p className="max-w-2xl leading-[151%] tracking-none font-medium">
                        I am a detail-oriented and motivated developer who build responsive modern
                        web apps. I seek a role that challenges me and lets me contribute to
                        exciting projects, nurturing my growth in Frontend Development.
                    </p>
                    <Link
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="block w-fit px-5 py-3 bg-foreground text-background text-sm rounded-md"
                    >
                        Download Resume as PDF
                    </Link>
                </article>
            </section>
            <section id="resumeContent" className="py-10 sm:py-12 md:py-16 px-8 sm:px-10 md:px-16">
                {resume.map((item, index) => (
                    <section key={index} className="mb-12">
                        <h2 className="-text--subHeading font-medium">{item.title}</h2>
                        {item.courses
                            ? item.courses?.map((course, index) => (
                                  <article key={index} className="my-5 ml-4">
                                      <h3 className="font-bold mb-2.5">{course.courseProvider}</h3>
                                      <ul className="list-disc ml-8">
                                          {course.courseTitles.map((course, index) => (
                                              <li key={`course-${index}`}>{course}</li>
                                          ))}
                                      </ul>
                                  </article>
                              ))
                            : item.keynotes.map((note, index) => (
                                  <article key={index} className="my-5 ml-4">
                                      <ul className="list-disc ml-8">
                                          <li>{note}</li>
                                      </ul>
                                  </article>
                              ))}
                    </section>
                ))}
            </section>
        </main>
    );
}
