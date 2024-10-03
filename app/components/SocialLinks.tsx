import Link from "next/link";
import { FaDiscord, FaGithub, FaLaptopCode } from "react-icons/fa";

export default function SocialLinks() {
    return (
        <ul className="flex justify-center items-center gap-5 w-fit">
            <li className="w-fit relative group">
                <Link
                    href="https://github.com/DLee1993"
                    target="_blank"
                    className="block"
                    aria-label="github profile"
                >
                    <FaGithub className="size-5" />
                </Link>
                <div
                    role="tooltip"
                    className="text-subText absolute -top-10 left-0 z-10 py-2 px-3 text-sm font-medium text-foreground bg-zinc-800 rounded-sm shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                >
                    Github
                </div>
            </li>
            <li className="w-fit relative group">
                <Link
                    href="https://discordapp.com/users/706100204960612443"
                    target="_blank"
                    className="block"
                    aria-label="Discord link"
                >
                    <FaDiscord className="size-6" />
                </Link>
                <div
                    role="tooltip"
                    className="text-subText absolute -top-10 left-0 z-10 py-2 px-3 text-sm font-medium text-foreground bg-zinc-800 rounded-sm shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                >
                    Discord
                </div>
            </li>
            <li className="w-fit relative group">
                <Link
                    href="https://www.frontendmentor.io/profile/DLee1993"
                    target="_blank"
                    className="block"
                    aria-label="Frontend mentor profile"
                >
                    <FaLaptopCode className="size-5" />
                </Link>
                <div
                    role="tooltip"
                    className="w-[137px] text-subText absolute -top-10 left-0 z-10 py-2 px-3 text-sm font-medium text-foreground bg-zinc-800 rounded-sm shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                >
                    Frontend mentor
                </div>
            </li>
        </ul>
    );
}
