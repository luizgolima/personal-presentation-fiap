import Link from 'next/link'
import Image from "next/image";
import homePic from "../public/homePic.jpg";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center h-screen w-screen">
            <Image src={homePic}
                   alt="Luiz Lima's photo"
                   height={300} width={300}
                   title="Looking for something?"
                   className="mb-8 rounded-full hover:scale-105"/>
            <h1 className="text-5xl font-bold mb-6 text-center">Luiz Lima</h1>
            <p className="mb-4 text-center px-4">
                Hey there and welcome to my portfolio!
            </p>
            <p className="mb-8 text-center px-4">
                I'm a Software Developer with a passion for building things that live on the internet.
            </p>
            <nav>
                <ul className="sm:flex">
                    <li className="mb-2 sm:mr-6 text-center">
                        <Link
                            href="/about"
                            title="Let's go!"
                            className="text-blue-500 hover:text-blue-400 hover:underline">
                            Get to know me
                        </Link>
                    </li>
                    <li className="mb-2 sm:mr-6 text-center">
                        <Link
                            href="/"
                            title="Alright!"
                            className="text-blue-500 hover:text-blue-400 hover:underline">
                            Get in touch
                        </Link>
                    </li>
                </ul>
            </nav>
        </main>
    )
}
