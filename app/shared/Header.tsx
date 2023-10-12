import Link from 'next/link'

export default function Header() {
  return (
        <header className="flex justify-around items-center h-20 w-screen mb-16">
            <Link href="/" className="text-2xl font-bold mb-4 text-center">
                Luiz Lima
            </Link>
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <Link
                            href="/about"
                            className="text-blue-500 hover:text-blue-400 hover:underline">
                            About me
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/experience"
                            className="text-blue-500 hover:text-blue-400 hover:underline">
                            Experience
                        </Link>
                    </li>
                </ul>
            </nav>
            <Link
                href="/contact"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
                Get in touch
            </Link>
        </header>
  )
}
