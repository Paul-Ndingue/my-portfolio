import Image from 'next/image'
import { Mail } from 'lucide-react'
import Link from 'next/link'

export default function AcceuilSection() {
    return (
        <section className="bg-[#1e1f2b] text-white py-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Texte à gauche */}
                <div className="max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Bonjour,<br />
                        je suis <span className="text-blue-400">Paul Petnga Ndingue</span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        Deux fois diplomé, l&apos;un en <span className="text-2xl font-bold">Programmation Informatique </span>
                        et en <span className="text-2xl font-bold">Soutien Technique Informatique</span> à La Cité collégiale je recherche un stage professionnel pour mieux démarrer une carrière dans le domaine de l&apos;IT
                        <br />
                        avec de multiples projet qui ont boostés mon experience, utilisant React<br />
                        et Node.js. Contactez-moi si vous avez besoin de mes services.
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                       
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-blue-400 text-black px-4 py-2 rounded-md font-medium shadow-md hover:bg-blue-500 transition">
                            <Mail size={18} />
                            Contactez-moi
                        </Link>
                    </p>
                </div>
                {/* Image à droite */}
                <div className="relative w-74 h-74 md:w-80 md:h-80">
                    <div className="absolute inset-0 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-lg border-4 border-blue-400">
                        <Image src="/image.png" // Remplace par ton image dans /public
                            alt="Photo de Paul" fill className="object-cover"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
