type BlogTextContent = {
    string: string;
    code?: string;
};
type Blog =
    | {
          featured: boolean;
          dateWritten: string;
          title: string;
          textContent: BlogTextContent[];
      }
    | undefined;

export const WordCounter = (blog: Blog) => {
    let wordCount = 0;
    const blogArray: string[] = [];

    blog?.textContent.forEach((item) => blogArray.push(item.string));

    wordCount = blogArray.join().length;

    return wordCount;
};

export function TimeToRead(wordCount: number) {
    const readTime = Math.floor(wordCount / 200);

    if (readTime < 1) {
        return 1;
    } else {
        return readTime;
    }
}
