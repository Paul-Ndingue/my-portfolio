'use client'

import { JSX } from 'react';
import { Database, Settings, ClipboardList, Code2Icon, NetworkIcon, CloudyIcon } from 'lucide-react'

const skillsData: Record<string, (string | { section: string; icon: JSX.Element; items: string[] })[]> = {
  "Programming Languages & Frameworks": [
    {
        section: "Langages",
        icon: < Code2Icon className="inline mr-2 text-blue-600" size={18} />,
        items: ["C#","React", "Nextjs","Python", "Html/CSS", "JavaScript", "Tailwind CSS"]
      },
      {
        section: "IDE",
        icon: < Code2Icon className="inline mr-2 text-blue-600" size={18} />,
        items: ["Github","Visual Code","Visual Studio code"]
      },
      {
        section: "Backend",
        icon: < Database className="inline mr-2 text-blue-600" size={18} />,
        items: ["API REST"]
      },
    
  ],
  "Cloud & IT Support": [
    {
        section: "Clouds", 
        icon: < Code2Icon className="inline mr-2 text-blue-600" size={18} />,
        items: ["Azure Deploiement", "Notions réseau (API, client-serveur)"],
    },
    {
        section: "IT Support", 
        icon: < NetworkIcon className="inline mr-2 text-blue-600" size={18} />,
        items: ["VMware", "Active Directory", "Dépannage matériel et logiciel", "Support technique aux utilisateurs","Installation et configuration de postes", "Configuration réseau (routeurs, switches)"]  
    },
    
  ],
  "Databases": [
    {
      section: "Databases",
      icon: <Database className="inline mr-2 text-blue-600" size={18} />,
      items: ["MySQL", "MongoDB","Requêtes simples, diagnostic de base"]
    },

  ],
  "Methodologies & OS": [
    {
        section: "Methodologies",
        icon: <ClipboardList size={18} className="inline-block text-blue-600 mr-2" />,
        items: ["UML","Agile/Scrum","Tests unitaires et fonctionnels"]
    },
    {
        section: "Operating System",
        icon: <span className="inline-block mr-2 text-blue-600">🪟</span>,
        items: ["Ubuntu","Windows"]
    }
    
    
  ]
}

const icons : Record<string, JSX.Element>= {
  "Programming Languages & Frameworks": <Code2Icon size={40} className="mx-auto mb-2" />,
  "Cloud & IT Support": <CloudyIcon size={40} className="mx-auto mb-2" />,
  "Databases": <Database size={40} className="mx-auto mb-2" />,
  "Methodologies & OS": <Settings size={40} className="mx-auto mb-2" />
}

export default function TechnicalSkill() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Compétences Techniques</h2>
        <p className="text-gray-600 mb-12">
        Passez la souris sur chaque carte pour voir les compétences associées.
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
