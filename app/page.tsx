import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-5xl font-bold mb-4 text-center">Luiz Lima</h1>
      <p className="mb-8 text-center px-4">
        Developer with a passion for building things that live on the internet.
      </p>
      <nav>
        <ul className="sm:flex">
          <li className="mb-2 sm:mr-6 text-center">
            <Link
              href="/about"
              className="text-blue-500 hover:text-blue-400 hover:underline"
            >
              Get to know me
            </Link>
          </li>
          <li className="mb-2 sm:mr-6 text-center">
            <Link
              href="/"
              className="text-blue-500 hover:text-blue-400 hover:underline"
            >
              Get in touch
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
