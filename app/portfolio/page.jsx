import Image from "next/image"
export default function Portfolio() {

    return (
        <div className='p-3'>
            <h1 className='text-4xl font-bold'>Professional Experience</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="h-5 w-5">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2021</time>
                        <div className="text-lg font-black">
                            Game Development Intern @ <a href="https://www.simcoachgames.com/" className='underline'>Simcoach
                            Games</a>
                        </div>
                        Given six weeks, a group of interns and I converted two original game ideas
                        into playable mock-ups utilizing Unity Game Engine, Autodesk Maya, and other
                        modern game development tools.
                    </div>
                    <hr/>
                </li>
                <li>
                    <hr/>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="h-5 w-5">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">2023 - current</time>
                        <div className="text-lg font-black">
                            Undergraduate Teaching Assistant @ <a href='https://www.purdue.edu' className="underline">Purdue
                            University</a>
                        </div>
                        Currently, as an undergraduate teaching assistant for CS24000: Programming in C, my main
                        responsibility is
                        holding laboratory sessions to aid students with homework, upcoming exams, and general
                        questions. In addition,
                        I answer students' questions on the class's online discussion platform, as well as grading
                        students' homework
                        submissions.
                    </div>
                    <hr/>
                </li>
                <li>
                    <hr/>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="h-5 w-5">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2024</time>
                        <div className="text-lg font-black">
                            Software Engineer Co-op @ <a href="https://www.collinsaerospace.com/" className='underline'>Collins
                            Aerospace</a>
                        </div>
                        This summer/fall, I'll be working at Collins Aerospace in the Missions System Division. The team
                        I'll be working on primarily develops Java software applications that run on Linux workstations
                        to support mission planning, execution, and debrief for Navy & Air Force Air Combat Training
                        Exercises.
                    </div>
                    <hr/>
                </li>
                <li>
                    <hr/>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="h-5 w-5">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">?</time>
                        <div className="text-lg font-black">What's Next?</div>
                        I hope to intern again in the summer before my senior year of college. After graduation,
                        I hope to work as a full-time software engineer.
                    </div>
                    <hr/>
                </li>
            </ul>
            <h1 className='text-4xl font-bold'>Personal Projects</h1>
            <div className="flex flex-wrap justify-evenly gap-5">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <Image src="/bettercsplan.png"
                               alt="bettercsplan.png"
                               width={300}
                               height={200}
                             className="rounded-xl"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">MyBetterCSPlan</h2>
                        <p>A comprehensive 4-year planner for Purdue CS students. Better than MyPurduePlan.</p>
                        <div className="card-actions">
                            <button className="btn">
                                <a href="https://github.com/ahn132/bettercsplan" target="_blank" rel="noreferrer">
                                    Repo
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <Image src="/realtimemarketplace.png"
                               alt="realtimemarketplace.png"
                               width={300}
                               height={200}
                               className="rounded-xl"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Real-Time Marketplace</h2>
                        <p>Digital marketplace where sellers and buyers can interact in real-time transactions</p>
                        <div className="card-actions">
                            <button className="btn">Private Repo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}