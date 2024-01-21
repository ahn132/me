import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";


const postsDirectory= path.join(process.cwd(), "/posts")

async function getSortedPostsData() {

    //get file names in posts folder
    const fileNames = fs.readdirSync(postsDirectory)

    //get [id] (file name), date, title, and content of each file
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf-8')
        const fileMatter = matter(fileContents)

        return {
            id,
            ...fileMatter.data,
        }
    })

    // @ts-ignore
    return allPostsData.sort((a, b) => {
        const date1 = new Date(a.date).getTime()
        const date2 = new Date(b.date).getTime()
        if (date1 < date2) {
            return 1
        }
        else {
            return -1
        }
    })
}

export default async function BlogLayout({children}) {
    const allPosts = await getSortedPostsData()

    return (
        <div className="flex p-3 justify-center gap-20">
            <div className="flex-0">
                {children}
            </div>
            <div className="flex-none">
                <ul className="menu bg-base-200 w-56 rounded-box">
                    <li>
                        <h2 className="menu-title">Posts</h2>
                        <ul>
                            {allPosts.map(({id, date, title}) => (
                                <li>
                                    <Link href={`/blog/${id}`} key={id}>
                                        {id}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
