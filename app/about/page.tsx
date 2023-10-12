import { Header } from '@/app/shared'
import Image from "next/image";
import aboutMePage from "../../public/aboutMePagePic.jpg";
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            <Header/>
            <main className="flex flex-col items-center justify-center mb-8">
                <Image src={aboutMePage}
                       alt="Luiz Lima's photo"
                       height={300} width={300}
                       title="Got impressed?"
                       className="mt-32 mb-8 rounded-full hover:scale-105"/>
                <h1 className="text-4xl font-bold text-center mb-2">First things first!</h1>
                <h3 className="w-4/5 text-2xl text-center mb-4">How about a little introduction?</h3>
                <p className="w-4/5 text-center mb-2">
                    My name is Luiz Lima. I am a developer with two years of experience in web and mobile
                    development. I have a generalist profile and enjoy taking on new challenges. My main skills involve
                    TypeScript (Angular and Next.js) and Java (Spring Boot). Additionally, I am studying native mobile
                    development with Swift and Kotlin. Currently, I am completing my undergraduate degree in Internet
                    Systems at FIAP (in Brazil) and I constantly seek to update and enhance my skills through reading,
                    courses, and other forms of training.
                </p>
                <p className="w-4/5 text-center mb-2">
                    In my personal life? Let's say I'm into traveling, radical sports, music, cooking, and art (hell
                    yeah! I like drawing and playing music). I'm also a vegetarian and love pets!
                </p>
                <p className="w-4/5 text-center mb-8">
                    Now, let's get serious! How about getting to know my professional history?
                </p>
                <nav>
                    <ul className="flex gap-4">
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
                                Go to my experiences!
                            </Link>
                        </li>
                    </ul>
                </nav>
            </main>
        </>
    )
}
