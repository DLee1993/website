import Image from "next/image";
import profile from "@/public/heroDevImage.webp";
import Link from "next/link";

const Header = () => {
    return (
        <header className="h-20 sticky top-0 flex justify-between items-center font-light bg-background/85 backdrop-blur-md border-b-[1px] border-zinc-800 transition-all">
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
        </header>
    );
};
export default Header;
