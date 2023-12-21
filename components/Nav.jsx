import Link from "next/link";


export default function Nav() {
    return (
        <div className="navbar mt-3">
            <div className="flex-1 justify-center">
                <p className="text-5xl font-bold select-none font-theme tracking-wider">Sun Ahn</p>
            </div>
            <div className="flex-none">
                <Link href='/blog/intro' className="btn btn-ghost font-theme tracking-wider">Blog</Link>
                <Link href='/portfolio' className="btn btn-ghost font-theme tracking-wider">Portfolio</Link>
                <Link href='/about' className="btn btn-ghost font-theme tracking-wider">About</Link>
            </div>
        </div>
    )

}