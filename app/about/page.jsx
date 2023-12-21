import fs from "fs";
import {remark} from "remark";
import html from "remark-html"
import path from "path";
import matter from "gray-matter";



async function getAbout() {
    const fullPath = path.join(process.cwd(), "/public/about.md")
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const processedContent = await remark()
        .use(html)
        .process(fileContents);
    const contentHtml = processedContent.toString();
    return contentHtml
}

export default async function About() {
    const contentHtml = await getAbout()
    return (
        <article className="prose">
            <p dangerouslySetInnerHTML={{__html: contentHtml}}/>
        </article>
    )
}