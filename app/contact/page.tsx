import { Header } from '@/app/shared'
import Image from "next/image";
import homePic from "@/public/homePagePic.jpg";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <Header />
        <main className="flex flex-col items-center justify-center h-screen w-screen">
            <Image src={homePic}
                   alt="Luiz Lima's photo"
                   height={400} width={400}
                   title="Looking for something?"
                   className="mb-8 rounded-full hover:scale-105"/>
            <h1 className="text-6xl font-bold mb-3 text-center">Contact me!</h1>
            <h3 className="text-3xl font-bold mb-6 text-center">
                Pick one!
            </h3>
            <p className="mb-8 text-center px-4">
                I'm a Software Developer with a passion for building things that live on the internet.
            </p>
            <nav>
                <ul className="flex">
                    <li className="mb-2 sm:mr-6 text-center">
                        <Link
                            href="/about"
                            title="Let's go!"
                            className="text-blue-500 hover:text-blue-400 hover:underline">
                            Go back!
                        </Link>
                    </li>
                </ul>
            </nav>
        </main>
    </>
  )
}
