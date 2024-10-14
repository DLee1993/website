import { useRef, useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import Arrow from "./Arrow";

type Details = {
    featured?: boolean;
    dateWritten?: string;
    projectName?: string;
    title?: string;
    descriptionSnippet?: string;
    fullDescription?: string;
    projectType?: string;
    liveSite?: string;
    codeRepository?: string;
    techStack?: string[];
    textSnippet1?: string;
    textSnippet2?: string;
    textSnippet3?: string;
    laptopImage?: string;
    screenshot1?: string;
    screenshot2?: string;
    screenshot3?: string;
    screenshot4?: string;
    screenshot5?: string;
    heroScreenShot?: string;
    textContent?: {
        string?: string;
        code?: string;
    }[];
};

type Props = {
    details: Details;
    index: number;
    type: string;
    dataLength?: number;
};

const IndividualLink = ({ details, index, type, dataLength }: Props) => {
    const offSetX = useMotionValue(-100);
    const offSetY = useMotionValue(-100);
    const border = useRef<HTMLDivElement>(null);
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offSetX}px ${offSetY}px, black, transparent)`;

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (!border.current) return;

            const borderRect = border.current?.getBoundingClientRect();

            offSetX.set(e.x - borderRect.x);
            offSetY.set(e.y - borderRect.y);
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    });

    return (
        <li key={index} className="relative group">
            {type === "project" && (
                <motion.div
                    ref={border}
                    className="hidden lg:block absolute inset-0 border-2 rounded-xl border-zinc-300/50 pointer-events-none"
                    style={{
                        maskImage: maskImage,
                        WebkitMaskImage: maskImage,
                    }}
                ></motion.div>
            )}

            {type === "project" ? (
                <Link
                    href={`/selectedWork/${details.projectName}`}
                    className="text-zinc-300 hover:bg-zinc-800/20 border-2 border-zinc-800 px-2 sm:px-4 py-4 flex justify-between items-center rounded-md transition-all duration-200"
                >
                    <article className="w-11/12">
                        <p className="font-medium">{details.title}</p>
                        <p className="text-subText max-w-lg hidden min-[465px]:block">
                            {details.descriptionSnippet}
                        </p>
                    </article>
                    <Arrow />
                </Link>
            ) : (
                <Link
                    href={`/personalBlog/${details.title}`}
                    className={`${
                        dataLength && dataLength - 1 === index ? "border-b-0" : "border-b-2"
                    } text-zinc-300 hover:bg-zinc-800/20 border-zinc-800 px-2 sm:px-4 py-4 flex justify-between items-center transition-all duration-200`}
                >
                    <article className="w-4/5">
                        <p className="font-medium">{details.title}</p>
                    </article>
                    <Arrow />
                </Link>
            )}
        </li>
    );
};
export default IndividualLink;
