'use client'
import { Download } from 'lucide-react'
import Link from 'next/link'

export default function AproposSection() {
    return (
        <div className="px-6 py-16 max-w-7xl mx-auto text-gray-800">
            {/* Titre + bouton */}
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl font-bold text-blue-900 border-b-3 border-blue-400 inline-block">
                    Professional Resume
                </h1>
                <Link href="/Paul_Petnga.pdf" // Remplace par ton vrai fichier dans /public
                    download className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600 transition">
                    <Download size={18} />
                    Télécharger le CV
                </Link>
            </div>

            {/* Sous-titre */}
            <p className="text-gray-600 mb-12">
                Découvrez mon parcours professionnel et académique dans le domaine de la Technologie de l'Information.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Colonne gauche */}

                <div className="space-y-8">
                    {/* Résumé */}
                    <h2 className="text-xl font-bold mb-2 ">Résumé</h2>
                    <section className="border-l-4 pl-6 border-blue-400">

                        <p className="font-bold text-blue-800 ">PAUL PETNGA NDINGUE</p>
                        <p className="text-gray-700 italic">
                            Professionnel en informatique avec une formation en programmation et une spécialisation en électronique.
                            Expérience en développement web (React, Node.js, Tailwind CSS) et en analyse de données, avec des compétences
                            en conception d’applications et automatisation.
                        </p>
                        <ul className="mt-2 text-sm text-gray-600 space-y-1">
                            <li>📍 Gatineau, Canada</li>
                            <li>📞 +1 (819) 319-1920</li>
                            <li>📧 paulpetnga023@gmail.com</li>
                        </ul>
                    </section>

                    {/* Éducation */}
                    <section>
                        <h2 className="text-xl font-bold mb-2">Éducation</h2>

                        <div className="border-l-4 pl-6 border-blue-400 space-y-6">
                            <div>
                                <p className="font-semibold">DEC en Programmation Informatique</p>
                                <p className="text-sm italic text-gray-600">LA Cité Collègiale Ottawa, Ontario — 2023 - 2025</p>
                                <ul className="list-disc pl-5 text-sm mt-1 text-gray-700 space-y-1">
                                    <li>Formation polyvalente en programmation permettant de concevoir des applications web, mobiles et autonomes
                                        avec plusieurs langages (ReactJs, NextJs, Java, Python, C#, TailwindCss, etc.) et technologies
                                        (bases de données, intelligence artificielle, gestionnaires de version).</li>
                                    <li>Acquisition de compétences pratiques pour créer, tester, maintenir et optimiser des applications
                                        distribuées via Internet ou réseaux locaux, tout en intégrant des principes d’écoresponsabilité.</li>
                                    {/* <li>Développement de qualités transversales comme la créativité, l’initiative, l’engagement 
                                    et la capacité bilingue, valorisées dans tous les programmes de La Cité.</li> */}
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold">AEC en Soutien Technique Informatique</p>
                                <p className="text-sm italic text-gray-600">LA Cité Collègiale Ottawa, Ontario — 2023</p>
                                <ul className="list-disc pl-5 text-sm mt-1 text-gray-700 space-y-1">
                                    <li>Formation axée sur la gestion des systèmes informatiques, incluant les composantes matérielles,
                                        logicielles et les périphériques, en environnement autonome ou en réseau.</li>
                                    <li>Apprentissage pratique de l'installation, de l'optimisation et de l'utilisation des outils de la
                                        suite Microsoft Office (Word, Excel, PowerPoint, Access).</li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold">Licence en Informatique</p>
                                <p className="text-sm italic text-gray-600">Université de Douala, (Cameroon) — 2018 - 2022</p>
                                <ul className="list-disc pl-5 text-sm mt-1 text-gray-700 space-y-1">
                                    <li>Formation complète en génie informatique couvrant la programmation, les réseaux, les systèmes et
                                        les bases de données, avec une spécialisation au cours de la dernière année.</li>
                                    <li>Spécialisation pratique en électronique appliquée, incluant des projets concrets utilisant des technologies comme Arduino.</li>
                                    <li>Réalisation d’un projet final sur le contrôle des panneaux de signalisation routière, combinant électronique
                                        et informatique pour des applications en automatisation et systèmes embarqués.</li>
                                </ul>
                            </div>

                        </div>
                    </section>
                </div>

                {/* Colonne droite */}
                <div className="space-y-8">
                    <section>
                        <h2 className="text-xl font-bold mb-2">Expérience Professionnelle</h2>

                        <div className="border-l-4 pl-4 border-blue-400 space-y-6">
                            <div>
                                <p className="font-semibold">Développeur Fullstack</p>
                                <p className="text-sm italic text-gray-600">Clinique ABC — 2023 - présent</p>
                                <ul className="list-disc pl-5 text-sm mt-1 text-gray-700 space-y-1">
                                    <li>Création d'une plateforme de gestion des rendez-vous et horaires médicaux.</li>
                                    <li>Stack : React, Next.js, Tailwind, Node.js, PostgreSQL.</li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold"> Stagiaire Analyse de données Informatique</p>
                                <p className="text-sm italic text-gray-600">NEPTUNE OIL SA Cameroun — 2022, 6mois </p>
                                <ul className="list-disc pl-5 text-sm mt-1 text-gray-700 space-y-1">
                                    <li>Participation active à la collecte, la transformation et l’organisation des données issues de bases de données pour les rendre exploitables.</li>
                                    <li>Contribution à des analyses descriptives et à des projets de modélisation prédictive aux côtés des analystes.</li>
                                    <li>Implication dans des réunions avec les parties prenantes et documentation rigoureuse des processus d’analyse de données.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
