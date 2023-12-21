import path from "path";
import fs from "fs";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "/posts")

async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}

export default async function Page({params}) {
    const postData = await getPostData(params.id)
    return (
        <article className="prose">
            <h1>
                {postData.title}
            </h1>
            {postData.date}
            <br />
            <p dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    )
}

