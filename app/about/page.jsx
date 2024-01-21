import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
export default async function About() {
    return (
        <div className="flex justify-evenly flex-wrap gap-10 p-3">
            <div className="flex-inital">
                <article className='prose'>
                    <h1 className='text-2xl '>Hi there! I'm Sun</h1>
                    <p>I&apos;m currently a student at Purdue University studying computer science.</p>
                    <p>I&apos;ve been passionate about computer science ever since 9th grade; that&apos;s when I took my first
                        computer science class and I fell in love with it. Since coming to college, I&apos;ve realized
                        the importance of creating my own coding side-projects; this website is one of them.</p>
                    <p>Nevertheless, computer science isn&apos;t everything. Besides coding, I like to:</p>
                    <ul>
                        <li>Work out, run, rock climb, play sports (except basketball), etc.</li>
                        <li>Binge k-dramas</li>
                        <li>Hang out with friends</li>
                    </ul>
                    <p>If you&apos;d like to get in touch for both professional and personal reasons,
                        feel free to email me at <a href="mailto:ahn132@purdue.edu">ahn132@purdue.edu</a> and/or
                        contact me through social media.
                    </p>

                </article>
            </div>
            <div className="flex-none self-center">
                <Image
                    src="/me.jpeg"
                    width={200}
                    height={200}
                    alt="me"
                    className="rounded-full"
                />
                <div className="flex justify-evenly mt-3">
                    <div className="flex-none">
                        <a href="https://www.linkedin.com/in/sun-ahn-b92431237/">
                            <FontAwesomeIcon icon={faLinkedin} className="w-12"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/sun.ahhhn/?hl=en">
                            <FontAwesomeIcon icon={faInstagram} className="w-12"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/ahn132">
                            <FontAwesomeIcon icon={faGithub} className="w-12"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}