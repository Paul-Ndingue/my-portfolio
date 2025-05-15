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
                Découvrez mon parcours professionnel et académique dans le domaine de la Technologie de l&apos;Information.
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
                            en conception d&apos;applications et automatisation.
                        </p>
                        <ul className="mt-2 text-sm text-gray-600 space-y-1">
                            <li>📍 Canada</li>
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
                                        distribuées via Internet ou réseaux locaux, tout en intégrant des principes d&apos;écoresponsabilité.</li>
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
                                    <li>Apprentissage pratique de l&apos;installation, de l&apos;optimisation et de l&apos;utilisation des outils de la
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
                                    <li>Réalisation d&apos;un projet final sur le contrôle des panneaux de signalisation routière, combinant électronique
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
                                <p className="font-semibold">Analyse d&apos;Affaire/ Spécialiste OT Junior</p>
                                <p className="text-sm italic text-gray-600">PureLogic — 2025 </p>
                                <ul className="list-disc pl-5 text-sm mt-1 text-gray-700 space-y-1">
                                    <li>Collaborer à la gestion du changement et soutenir les utilisateurs lors de la mise en œuvre des solutions.</li>
                                    <li>Mettre à jour ou valider la documentation des processus.</li>
                                    <li>Analyser les solutions possibles et formuler des recommandations aux responsables.</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold">Stagiaire en support technique</p>
                                <p className="text-sm italic text-gray-600">Collège la Cité — 2023</p>
                                <ul className="list-disc pl-5 text-sm mt-1 text-gray-700 space-y-1">
                                    <li>Diagnostiqué et réparé des postes de travail, imprimantes, et équipements réseau.</li>
                                    <li>Géré les tickets de support avec un taux de résolution de 90 % en moins de 48h.</li>
                                    <li>Mis à jour et configuré des logiciels et systèmes d&apos;exploitation Windows.</li>

                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold">Analyse de données Informatique Junior</p>
                                <p className="text-sm italic text-gray-600">NEPTUNE OIL SA Cameroun — 2022 - 2023 </p>
                                <ul className="list-disc pl-5 text-sm mt-1 text-gray-700 space-y-1">
                                    <li>Participation active à la collecte, la transformation et l&apos;organisation des données issues de bases de données pour les rendre exploitables.</li>
                                    <li>Contribution à des analyses descriptives et à des projets de modélisation prédictive aux côtés des analystes.</li>
                                    <li>Implication dans des réunions avec les parties prenantes et documentation rigoureuse des processus d&apos;analyse de données.</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold">Technicien Support IT</p>
                                <p className="text-sm italic text-gray-600">Orange Cameroun — 2020 - 2021 </p>
                                <ul className="list-disc pl-5 text-sm mt-1 text-gray-700 space-y-1">
                                    <li>Support aux utilisateurs : Fournir une assistance de premier niveau par téléphone, courriel ou système de tickets. Accompagner les utilisateurs dans la résolution de problèmes liés aux logiciels, au matériel ou aux périphériques.</li>
                                    <li>Installation et configuration : Installer, configurer et maintenir les postes de travail, logiciels, imprimantes et autres équipements. S&apos;assurer de la conformité aux standards établis.</li>
                                    <li>Gestion des demandes : Suivre et documenter les interventions via un système de gestion des tickets (ex. : Jira, ServiceNow). Veiller au respect des délais et à la qualité du service..</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
