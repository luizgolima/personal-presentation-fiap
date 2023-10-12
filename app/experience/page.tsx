import Image from "next/image"
import Link from "next/link"
import { Header } from '@/app/shared'
import experiencePagePic from "@/public/experiencePagePic.jpg"
import professionalExperience from "@/app/utils/professionalExperience.json"
import { ProfessionalExperience } from "@/app/model/professionalExperience"

export default function ExperiencePage() {
  return (
    <>
      <Header />
        <main className="flex flex-col items-center justify-center h-screen w-screen">
            <Image src={experiencePagePic}
                   alt="Luiz Lima's photo"
                   height={400} width={400}
                   title="Booooo! 👻"
                   className="mb-8 rounded-full hover:scale-105"/>
            <h1 className="text-6xl font-bold mb-3 text-center">Professional experience</h1>
            <h3 className="text-3xl font-bold mb-6 text-center">
                Software Developer
            </h3>
            {professionalExperience.map((experience: ProfessionalExperience, index: number) => (
                <div key={index} className="w-1/2 mb-8">
                    <p className="text-2xl mb-2">
                        {experience.position} | {experience.company} | {experience.date}
                    </p>
                    <ul className="list-disc">
                        {experience.responsibilities.map((responsibility: string, i: number) => (
                            <li key={i}>{responsibility}</li>))}
                    </ul>
                </div>
            ))}
            <p className="mb-8 text-center px-4 w-1/2">
                How about getting to know my projects?
            </p>
            <nav>
                <ul className="flex">
                    <li className="mb-2 sm:mr-6 text-center">
                        <Link
                            href="/about"
                            title="Okay then!"
                            className="text-blue-500 hover:text-blue-400 hover:underline">
                            Go back to about page!
                        </Link>
                    </li>
                    <li className="mb-2 sm:mr-6 text-center">
                        <Link
                            href="/contact"
                            title="Cool!"
                            className="text-blue-500 hover:text-blue-400 hover:underline">
                            Get in touch!
                        </Link>
                    </li>
                </ul>
            </nav>
        </main>
    </>
  )
}
