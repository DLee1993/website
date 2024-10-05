export const WordCounter = (
    blog:
        | {
              featured: boolean;
              dateWritten: string;
              title: string;
              screenshot1: string;
              screenshot2: string;
              screenshot3: string;
              textContent: {
                  descriptionSnippet: string;
                  textSnippet1: string;
                  textSnippet2: string;
              };
          }
        | undefined
) => {
    let wordCount = 0;
    const blogArray = Object.values(blog!.textContent);
    wordCount = blogArray.join().split(/\s+/).length;
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
