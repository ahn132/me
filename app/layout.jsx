import Nav from "../components/Nav"
import './globals.css'

export default function RootLayout({ children})
{
    return (

        <html lang="en">
            <body>
                <Nav/>
                <div className="divider my-0"></div>
                {children}
            </body>
        </html>
    )
}
