const Arrow = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-4 stroke-2 fill-none stroke-current opacity-50 group-hover:opacity-100 group-hover:stroke-foreground transition-all duration-300 ease-in-out"
        >
            <line
                x1="5"
                y1="12"
                x2="19"
                y2="12"
                className="translate-x-3 group-hover:translate-x-0 scale-x-0 group-hover:scale-x-110 transition-transform duration-300 ease-in-out"
            ></line>{" "}
            <polyline
                points="12 5 19 12 12 19"
                className="-translate-x-2 group-hover:translate-x-[2px] transition-transform duration-300 ease-in-out"
            ></polyline>
        </svg>
    );
};
export default Arrow;
