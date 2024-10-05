"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { TimeToRead, WordCounter } from "@/app/hooks/TimeToRead";
import { blogs } from "@/app/portfolioData";
import CodeSnippet from "@/public/ray-so-export.png";

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
        <section className="my-14 md:my-16 lg:my-20">
            <article>
                <h1 className="text-heading font-Lora mb-2">{blog?.title}</h1>
                <aside className="flex gap-2 text-subText text-zinc-400">
                    <p className="capitalize">{blog?.dateWritten}</p>
                    <p>{timeToRead} min read</p>
                </aside>
                <section className="mt-10 md:mt-16 text-zinc-300">
                    <p>{blog?.textContent.descriptionSnippet}</p>
                    <figure className="my-10 md:my-16">
                        <Image
                            src={CodeSnippet}
                            alt="code screenshot"
                            width={1000}
                            height={1000}
                            loading="lazy"
                            className="w-3/4 h-full mx-auto rounded-xl"
                        />
                    </figure>
                    <p>{blog?.textContent.textSnippet1}</p>
                    <figure className="my-10 md:my-16">
                        <Image
                            src={CodeSnippet}
                            alt="code screenshot"
                            width={1000}
                            height={1000}
                            loading="lazy"
                            className="w-3/4 h-full mx-auto rounded-xl"
                        />
                    </figure>
                    <p>{blog?.textContent.textSnippet2}</p>
                    <figure className="my-10 md:my-16">
                        <Image
                            src={CodeSnippet}
                            alt="code screenshot"
                            width={1000}
                            height={1000}
                            loading="lazy"
                            className="w-3/4 h-full mx-auto rounded-xl"
                        />
                    </figure>
                    <p>{blog?.textContent.textSnippet3}</p>
                </section>
            </article>
        </section>
    );
}
