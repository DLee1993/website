export const projects = [
    {
        featured: true,
        projectName: "index",
        title: "Index: Your personal Organiser",
        descriptionSnippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        fullDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        projectType: "Full stack",
        liveSite: "www.youtube.com/youtubeChannel",
        codeRepository: "www.youtube.com/youtubeChannel",
        techStack: ["react", "next.js", "tailwind css"],
        textSnippet1:
            "This is where you add a brief description about the project and the reason for undertaking this project, keep it short and to the point. Do not blab on, it will only bore the reader!!",
        textSnippet2:
            "This is where you talk in depth about the technologies used and why you used them, do not be afraid to say you want to try something new and it did'nt work so you reverted back to a more familiar technology ( i.e. bootstrap to tailwind)",
        textSnippet3:
            "This is where you talk in depth about the potential for using different technology to what you used, this is going to show that you are capable of reflecting on whether your choice of framework or library is best suited to this project.",
        laptopImage: "/laptop.png",
        screenshot1: "/phone001.png",
        screenshot2: "/phone002.png",
        screenshot3: "/phone003.png",
        screenshot4: "/phone004.png",
        screenshot5: "/phone005.png",
        heroScreenShot: "/phone006.png",
    },
    {
        featured: true,
        projectName: "mydoctor",
        title: "My Doctor Healthcare app",
        descriptionSnippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        fullDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        projectType: "Full stack",
        liveSite: "www.youtube.com/youtubeChannel",
        codeRepository: "www.youtube.com/youtubeChannel",
        techStack: ["react", "next.js", "tailwind css"],
        textSnippet1:
            "This is where you add a brief description about the project and the reason for undertaking this project, keep it short and to the point. Do not blab on, it will only bore the reader!!",
        textSnippet2:
            "This is where you talk in depth about the technologies used and why you used them, do not be afraid to say you want to try something new and it did'nt work so you reverted back to a more familiar technology ( i.e. bootstrap to tailwind)",
        textSnippet3:
            "This is where you talk in depth about the potential for using different technology to what you used, this is going to show that you are capable of reflecting on whether your choice of framework or library is best suited to this project.",
        laptopImage: "/laptop.png",
        screenshot1: "/phone001.png",
        screenshot2: "/phone002.png",
        screenshot3: "/phone003.png",
        screenshot4: "/phone004.png",
        screenshot5: "/phone005.png",
        heroScreenShot: "/phone006.png",
    },
];

export const blogs = [
    {
        featured: true,
        dateWritten: "Oct 08, 2024",
        title: "Recursion in React",
        textContent: [
            {
                string: "This is a quick tutorial on how to create a recursive function in react. Recursion is valuable when it comes to the traversal of data structures. Most people would argue that recursion is slower and more time consuming than other techniques, however, it is a good place to start for a junior dev to understand how to traverse data structures.",
                code: `function FileSystemItem({ node }) {
    const [isOpen, setisOpen] = useState(false);

    return (
        <li key={node.name}>
            <span>
                {node.subNode && node.subNode.length > 0 && (
                    <button
                        style={{ transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)" }}
                        onClick={() => setisOpen(!isOpen)}
                    >
                        <ChevronIcon />
                    </button>
                )}
                {node.subNode ? (
                    <span style={{ marginLeft: node.subNode.length === 0 ? "30px" : "" }}>
                        <FolderIcon />
                    </span>
                ) : (
                    <span>
                        <FileIcon />
                    </span>
                )}
                {node.name}
            </span>

            {isOpen && (
                <ul style={{ marginLeft: "60px" }}>
                    {node.subNode?.map((node) => (
                        <FileSystemItem node={node} key={node.name} />
                    ))}
                </ul>
            )}  
        </li>
    );
}`,
            },
            {
                string: "This is where you add a brief description about the project and the reason for undertaking this project, keep it short and to the point. Do not blab on, it will only bore the reader!!",
                code: "",
            },
            {
                string: "This is where you talk in depth about the technologies used and why you used them, do not be afraid to say you want to try something new and it did'nt work so you reverted back to a more familiar technology ( i.e. bootstrap to tailwind )",
                code: "",
            },
            {
                string: " Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum",
                code: "",
            },
        ],
    },
    {
        featured: true,
        dateWritten: "Feb 08, 2024",
        title: "Testing my code",
        textContent: [
            {
                string: "This is a quick tutorial on how to create a recursive function in react. Recursion is valuable when it comes to the traversal of data structures. Most people would argue that recursion is slower and more time consuming than other techniques, however, it is a good place to start for a junior dev to understand how to traverse data structures.",
                code: "",
            },
            {
                string: "This is where you add a brief description about the project and the reason for undertaking this project, keep it short and to the point. Do not blab on, it will only bore the reader!!",
                code: "",
            },
            {
                string: "This is where you talk in depth about the technologies used and why you used them, do not be afraid to say you want to try something new and it did'nt work so you reverted back to a more familiar technology ( i.e. bootstrap to tailwind )",
                code: "",
            },
            {
                string: " Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum",
                code: "",
            },
            {
                string: "This is a quick tutorial on how to create a recursive function in react. Recursion is valuable when it comes to the traversal of data structures. Most people would argue that recursion is slower and more time consuming than other techniques, however, it is a good place to start for a junior dev to understand how to traverse data structures.",
                code: "",
            },
            {
                string: "This is where you add a brief description about the project and the reason for undertaking this project, keep it short and to the point. Do not blab on, it will only bore the reader!!",
                code: "",
            },
            {
                string: "This is where you talk in depth about the technologies used and why you used them, do not be afraid to say you want to try something new and it did'nt work so you reverted back to a more familiar technology ( i.e. bootstrap to tailwind )",
                code: "",
            },
            {
                string: " Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum",
                code: "",
            },
        ],
    },
];

export const resume = [
    {
        title: "Education",
        courses: [
            {
                courseProvider: "The Odin Project",
                courseTitles: ["Foundations Course", "Full Stack JavaScript Course"],
            },
            {
                courseProvider: "Udemy",
                courseTitles: [
                    "Mern Stack front to back",
                    "React front to back",
                    "The Web Developer Bootcamp",
                    "The Modern Flexbox, Grid, Sass & Animation Developer",
                    "GSAP animation library",
                    "JavaScript Developer bootcamp",
                    "Complete Node.js Developer",
                ],
            },
        ],
    },
    {
        title: "Technical Competence",
        keynotes: [
            "Proficient in the use of HTML, CSS, JavaScript",
            "Moderate understanding of React",
            "Experienced in using styling frameworks and UI Libraries ( Tailwind css, Shadcn ui, React Aria)",
            "Familiar with open-source database management system MongoDB",
            "Familiar with open-source Backend as a Service platform Appwrite",
            "Advancing my experience with TypeScript and Next.js",
        ],
    },
    {
        title: "Personal Qualities",
        keynotes: [
            "Logical thinker with a keen eye for detail",
            "Strong communicator, capable of articulating my thoughts in a concise manner ",
            "Altruistic team player",
            "Keen to stay ahead of the technological curve",
            "Receptive to feedback in all aspects of my development",
        ],
    },
    {
        title: "Personal Interests",
        keynotes: ["Kickboxing, I have found a sport that pushes me  beyond my limits"],
    },
];
