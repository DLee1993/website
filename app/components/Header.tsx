"use client";

import Image from "next/image";
import profile from "@/public/heroDevImage.webp";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 font-light bg-gradient-to-b from-zinc-900 to-zinc-900/30 backdrop-blur-sm border-b-[1px] border-zinc-800 transition-all">
            <div className="customWidth h-20 flex justify-between items-center">
                <Link href="/">
                    <Image
                        src={profile}
                        alt="profileImage"
                        width={1000}
                        height={1000}
                        priority
                        className="size-10 aspect-square rounded-full transition-all"
                    />
                </Link>
                <ul className="flex sm:gap-1 transition-all">
                    {pathname !== "/" && (
                        <li>
                            <Link href="/" className="customLinkHover">
                                home
                            </Link>
                        </li>
                    )}
                    <li>
                        <Link href="/selectedWork" className="customLinkHover">
                            work
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume" className="customLinkHover">
                            resume
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};
export default Header;
