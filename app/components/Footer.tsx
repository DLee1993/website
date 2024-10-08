import { scrollToTop } from "../hooks/ScrollToTop";
import SocialLinks from "./SocialLinks";
const Footer = () => {
    return (
        <footer className="customWidth min-h-32 flex flex-col justify-evenly">
            <section className="flex justify-between items-center">
                <SocialLinks />
                <button onClick={scrollToTop}>back to top</button>
            </section>
            <div className="h-[2px] w-full bg-zinc-800"></div>
            <p className="text-center text-zinc-400  text-subText">Copyright 2024 | David Lee</p>
        </footer>
    );
};
export default Footer;
