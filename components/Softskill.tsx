'use client'

import { JSX } from 'react';
import { Search, BrainCircuit, ClipboardList, MessageCircle, Handshake, Share2Icon, UserPlusIcon, Puzzle, MessageSquareHeart, ClipboardCheck } from 'lucide-react'

const skillsData: Record<string, (string | { section: string; icon: JSX.Element; items: string[] })[]> = {
  "Raisonnement & Esprit analytique": [
    {
      section: "Raisonnement",
      icon: <BrainCircuit size={18} className="inline-block text-blue-600 mr-2" />,
      items: ["Pensée logique et analytique", "Esprit critique pour l’optimisation du code"]
    },
    {
      section: "Esprit analytique",
      icon: <Search size={18} className="inline-block text-blue-600 mr-2" />,
      items: ["Diagnostic rapide et efficace", "Analyse des problèmes matériels/logiciels"]
    }
  ],
  "Communication & Relation client": [
    {
      section: "Communication",
      icon: < MessageCircle className="inline mr-2 text-blue-600" size={18} />,
      items: ["Participation aux réunions de projet", "Rédaction de documentation claire", "Communication technique avec les collègues"]
    },
    {
      section: "Relation client",
      icon: < Handshake className="inline mr-2 text-blue-600" size={18} />,
      items: ["Sens du service à la clientèle", "Écoute active et vulgarisation", "Patience avec les utilisateurs"]
    },

  ],
  "Travail d'équipe & Collaboration": [
    {
      section: "Travail d'équipe",
      icon: <Share2Icon className="inline mr-2 text-blue-600" size={18} />,
      items: ["Travail d’équipe sur site ou à distance", "Soutien aux utilisateurs et collègues"]
    },
    {
      section: "Collaboration",
      icon: <UserPlusIcon className="inline mr-2 text-blue-600" size={18} />,
      items: ["Intégration dans des projets collectifs", "Coopération avec techniciens et autres départements"]
    },
  ],
  "Organisation & Autonomie": [
    {
      section: "Organisation",
      icon: <ClipboardList size={18} className="inline-block text-blue-600 mr-2" />,
      items: ["Gestion des priorités multiples", "Autonomie dans la gestion de projets"]
    },
    {
      section: "Autonomie",
      icon: <Puzzle size={18} className="inline-block text-blue-600 mr-2" />,
      items: ["Suivi méthodique des procédures", "Autonomie dans la gestion de projets",
        "Respect des échéances et des spécifications",
        "Capacité à apprendre de nouveaux outils", "Polyvalence dans les environnements techniques"]

    }


  ]
}

const icons: Record<string, JSX.Element> = {
  "Raisonnement & Esprit analytique": <BrainCircuit size={40} className="mx-auto mb-2" />,
  "Communication & Relation client": <MessageSquareHeart size={40} className="mx-auto mb-2" />,
  "Travail d'équipe & Collaboration": <Handshake size={40} className="mx-auto mb-2" />,
  "Organisation & Autonomie": <ClipboardCheck size={40} className="mx-auto mb-2" />
}

export default function SoftSkill() {
  return (
    <section className="bg-blue-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-blue-400 mb-4">Compétences Professionnelles</h2>
        <p className="text-gray-600 mb-12">
        Passez la souris sur chaque carte pour voir les compétences connexes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Object.keys(skillsData).map((category) => (
            <div key={category} className="relative h-90">
              <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">

                {/* Face avant */}
                <div className="absolute inset-0 bg-blue-500 text-white rounded-xl py-10 px-4 flex flex-col items-center justify-center backface-hidden">
                  {icons[category]}
                  <p className="font-semibold text-center">{category}</p>
                </div>

                {/* Face arrière */}
                <div className="absolute inset-0 bg-white text-blue-800 rounded-xl p-4 flex flex-col justify-center items-start [transform:rotateY(180deg)] backface-hidden overflow-y-auto">

                  {skillsData[category].map((group, idx) => {
                    if (typeof group === 'string') {
                      return (
                        <ul key={idx} className="text-sm text-gray-700 pl-4 list-disc">
                          <li>{group}</li>
                        </ul>
                      )
                    } else {
                      return (
                        <div key={idx} className="mb-3">
                          <h4 className="font-semibold text-black mb-1 flex items-center">
                            {group.icon} {group.section}
                          </h4>
                          <ul className="text-sm text-gray-700 pl-4 list-disc">
                            {group.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    }
                  })}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
