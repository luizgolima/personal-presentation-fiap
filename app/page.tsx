import Link from 'next/link'
import Image from "next/image";
import homePic from "../public/homePagePic.jpg";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center h-screen w-screen">
            <Image src={homePic}
                   alt="Luiz Lima's photo"
                   height={300} width={300}
                   title="Looking for something?"
                   className="mb-8 rounded-full hover:scale-105"/>
            <h1 className="w-4/5 text-4xl font-bold text-center mb-2">Luiz Lima</h1>
            <h3 className="w-4/5 text-2xl text-center mb-4">
                Hey there and welcome to my portfolio!
            </h3>
            <p className="w-4/5 text-center mb-8">
                I'm a Software Developer with a passion for building things that live on the internet.
            </p>
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <Link
                            href="/about"
                            title="Let's go!"
                            className="text-blue-500 hover:text-blue-400 hover:underline">
                            Get to know me
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
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
