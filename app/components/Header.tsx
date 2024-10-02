import Image from "next/image";
import profile from "@/public/heroDevImage.webp";
import Link from "next/link";

const Header = () => {
    return (
        <header className="sticky top-0 font-light bg-gradient-to-b from-background to-background/30 backdrop-blur-sm border-b-[1px] border-zinc-800 transition-all">
            <div className="customWidth h-20 flex justify-between items-center">
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
                        <Link href="/selectedWork" className="customLinkHover">
                            work
                        </Link>
                    </li>
                    <li>
                        <Link href="/personalBlog" className="customLinkHover">
                            blog
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
