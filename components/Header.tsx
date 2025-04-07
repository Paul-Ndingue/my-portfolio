// components/Header.tsx
import Link from 'next/link'

export default function Header() {
    return (
        <header className="w-full p-9  shadow-md bg-blue-300">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-3xl font-bold">Paul Petnga Ndingue</div>
                <nav className="space-x-9 ">
                    <ul className="flex space-x-6 list-none">
                        <li>
                            <Link href="/" className="text-lg text-gray-700 hover:text-black">Accueil</Link>
                        </li>
                        <li>
                            <Link href="/apropos" className="text-lg text-gray-700 hover:text-black">À propos</Link>
                        </li>

                        <li>
                            <Link href="/projets" className="text-lg text-gray-700 hover:text-black">Projets</Link>
                        </li>

                        <li>
                            <Link href="/contact" className="text-lg text-gray-700 hover:text-black">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
