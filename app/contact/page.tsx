import Link from "next/link";
import Image from "next/image";
import { Header } from '@/app/shared'
import homePic from "@/public/homePagePic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function ContactPage() {
    return (
        <>
            <Header/>
            <main className="flex flex-col items-center justify-center mb-8">
                <Image src={homePic}
                       alt="Luiz Lima's photo"
                       height={300} width={300}
                       title="Got impressed?"
                       className="mt-32 mb-8 rounded-full hover:scale-105"/>
                <h1 className="text-4xl font-bold text-center mb-2">Get in touch!</h1>
                <nav>
                    <ul className="flex flex-col md:flex-row gap-4">
                        <li className="text-center">
                            <Link
                                href="/"
                                title="Come on, stay!"
                                className="text-blue-500 hover:text-blue-400 hover:underline">
                                Back to home page!
                            </Link>
                        </li>
                        <li className="text-center">
                            <Link
                                href="/experience"
                                title="Yeah!"
                                className="text-blue-500 hover:text-blue-400 hover:underline">
                                Back to my experiences!
                            </Link>
                        </li>
                    </ul>
                </nav>
            </main>
        </>
    )
}
