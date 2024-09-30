"use client";

import Image from "next/image";
import profile from "@/public/heroDevImage.webp";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="bg-background/50 customWidth h-14 flex justify-between items-center font-light mt-5 backdrop-blur-sm rounded-lg transition-all">
            <Link href="/">
                <Image
                    src={profile}
                    alt="profileImage"
                    width={1000}
                    height={1000}
                    className="size-10 rounded-full transition-all"
                />
            </Link>
            <ul className="flex sm:gap-1 transition-all">
                <li>
                    <Link
                        href="/selectedWork"
                        className={`${
                            pathname === "/selectedWork" ? "text-foreground" : "text-foreground/50"
                        } customLinkHover`}
                    >
                        selected work
                    </Link>
                </li>
                <li>
                    <Link
                        href="/personalBlog"
                        className={`${
                            pathname === "/personalBlog" ? "text-foreground" : "text-foreground/50"
                        } customLinkHover`}
                    >
                        blog
                    </Link>
                </li>
                <li>
                    <Link
                        href="/resume"
                        className={`${
                            pathname === "/resume" ? "text-foreground" : "text-foreground/50"
                        } customLinkHover`}
                    >
                        resume
                    </Link>
                </li>
            </ul>
        </header>
    );
};
export default Header;
