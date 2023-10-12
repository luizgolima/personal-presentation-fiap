import {Header} from '@/app/shared'
import Image from "next/image";
import aboutMePage from "../../public/aboutMePage.jpg";
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            <Header/>
            <main className="my-16 flex flex-col items-center justify-center h-screen w-screen">
                <Image src={aboutMePage}
                       alt="Luiz Lima's photo"
                       height={400} width={400}
                       title="Got impressed?"
                       className="mb-8 rounded-full hover:scale-105"/>
                <h1 className="text-6xl font-bold mb-3 text-center">First things first!</h1>
                <h3 className="text-3xl font-bold mb-6 text-center">
                    How about a little introduction?
                </h3>
                <p className="mb-2 text-center px-4 w-1/3">
                    My name is Luiz Lima. I am a developer with two years of experience in web and mobile
                    development. I have a generalist profile and enjoy taking on new challenges. My main skills involve
                    TypeScript (Angular and Next.js) and Java (Spring Boot). Additionally, I am studying native mobile
                    development with Swift and Kotlin. Currently, I am completing my undergraduate degree in Internet
                    Systems at FIAP (in Brazil) and I constantly seek to update and enhance my skills through reading,
                    courses, and other forms of training.
                </p>
                <p className="mb-2 text-center px-4 w-1/3">
                    In my personal life? Let's say I'm into traveling, radical sports, music, cooking, and art (hell
                    yeah! I like drawing and playing music). I'm also a vegetarian and love pets!
                </p>
                <p className="mb-8 text-center px-4 w-1/3">
                    Now, let's get serious! How about getting to know my professional history?
                </p>
                <nav>
                    <ul className="flex">
                        <li className="mb-2 sm:mr-6 text-center">
                            <Link
                                href="/"
                                title="Come on, stay!"
                                className="text-blue-500 hover:text-blue-400 hover:underline">
                                Go back!
                            </Link>
                        </li>
                        <li className="mb-2 sm:mr-6 text-center">
                            <Link
                                href="/experience"
                                title="Yeah!"
                                className="text-blue-500 hover:text-blue-400 hover:underline">
                                Get to know my experiences
                            </Link>
                        </li>
                    </ul>
                </nav>
            </main>
        </>
    )
}
