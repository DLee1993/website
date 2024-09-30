"use client";

import Image from "next/image";
import profile from "@/public/heroDevImage.webp";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="bg-background/50 customWidth h-14 flex justify-between items-center font-light px-4 mt-5 backdrop-blur-sm rounded-lg transition-all">
            <Link href="/">
                <Image
                    src={profile}
                    alt="profileImage"
                    width={1000}
                    height={1000}
                    className="size-12 rounded-full"
                />
            </Link>
            <ul className="flex gap-3 sm:gap-6 md:gap-9 transition-all">
                <li>
                    <Link
                        href="/selectedWork"
                        className={
                            pathname === "/selectedWork" ? "text-foreground" : "text-foreground/50"
                        }
                    >
                        selected work
                    </Link>
                </li>
                <li>
                    <Link
                        href="/personalBlog"
                        className={
                            pathname === "/personalBlog" ? "text-foreground" : "text-foreground/50"
                        }
                    >
                        blog
                    </Link>
                </li>
                <li>
                    <Link
                        href="/resume"
                        className={
                            pathname === "/resume" ? "text-foreground" : "text-foreground/50"
                        }
                    >
                        resume
                    </Link>
                </li>
            </ul>
        </header>
    );
};
export default Header;
