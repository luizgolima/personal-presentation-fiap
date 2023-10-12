import Image from "next/image"
import Link from "next/link"
import { Header } from '@/app/shared'
import experiencePagePic from "@/public/experiencePagePic.jpg"
import professionalExperience from "@/app/utils/professionalExperience.json"
import { ProfessionalExperience } from "@/app/model/professionalExperience"

export default function ExperiencePage() {
  return (
      <>
          <Header/>
          <main className="flex flex-col items-center justify-center mb-8">
              <Image src={experiencePagePic}
                     alt="Luiz Lima's photo"
                     height={300} width={300}
                     title="Booooo! 👻"
                     className="mt-32 mb-8 rounded-full hover:scale-105"/>
              <h1 className="w-4/5 text-4xl font-bold text-center mb-2">Professional experience</h1>
              <h3 className="w-4/5 text-2xl text-center mb-4">Software Developer</h3>
              {professionalExperience.map((experience: ProfessionalExperience, index: number) => (
                  <div key={index} className="w-4/5 md:w-4/12 mb-8">
                      <p className="text-2xl mb-2">
                          {experience.position} | {experience.company} | {experience.date}
                      </p>
                      <ul className="list-disc">
                          {experience.responsibilities.map((responsibility: string, i: number) => (
                              <li key={i} className="mb-2">{responsibility}</li>))}
                      </ul>
                  </div>))}
              <p className="w-4/5 md:w-4/12 text-center px-4 mb-8">
                  Do you want to get in touch?
              </p>
              <nav>
                  <ul className="flex gap-4">
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
