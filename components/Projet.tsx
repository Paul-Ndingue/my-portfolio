'use client'

import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Portfolio Web',
    description:
      "Solution domotique abordable permettant de contrôler à distance les lumières, volets, capteurs et caméras à l'aide d'une interface web simple et responsive.",
    image: '/portfolio.png',
    tags: ['NextJs', 'TailwindCSS'],
    repo: 'https://github.com/Paul-Ndingue/My-Portfolio/tree/main/Desktop/Portfolio/my-portfolio',
    // demo: 'https://domotihome.vercel.app'
  },
  {
    title: 'Even Room',
    description:
      "Application web qui crée un site web intuitif et performant pour la gestion des événements dans une salle de spectacle. Le site permet aux administrateurs de planifier, organiser et gérer les événements, tout en offrant une expérience utilisateur fluide aux visiteurs.",
    image: '/Even.png',
    tags: ['Next.js', 'Node.js', 'React.Js', "Css"],
    repo: 'https://github.com/urngniaba/evenements-salle-spectacle',
    demo: 'https://projet-next-js-web-avance.onrender.com/'
  },
  {
    title: 'Rendez-vous Médicaux',
    description:
      "Application web pour la gestion des horaires et des rendez-vous médicaux. Permet aux médecins d'organiser leur agenda, de recevoir des réservations, et aux patients de prendre rendez-vous en ligne.",
    image: '/clinic.png',
    tags: ['Next.js', 'TailwindCSS', 'Node.js', 'MongoDB'],
    repo: 'https://github.com/urngniaba/my-health-clinic',
    // demo: 'https://rendez-vous-app.vercel.app'
  },
  {
    title: 'DomotiHome',
    description:
      "Solution domotique abordable permettant de contrôler à distance les lumières, volets, capteurs et caméras à l'aide d'une interface web simple et responsive.",
    image: '/progress.png',
    tags: ['React', 'Next.js', 'TailwindCSS'],
    repo: 'https://github.com/ton-profil/domotihome',
    // demo: 'https://domotihome.vercel.app'
  }
]

export default function ProjectsPage() {
  return (
    <section className="bg-gray-100 text-white py-15 px-6 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 inline-block border-b-3 border-blue-600 mb-9">
          Mes Projets
        </h1>
        <p className="mb-10 text-gray-700">
          Voici une sélection de projets que j&apos;ai réalisés avec passion. Chaque réalisation reflète mes compétences techniques,
          ma rigueur et ma créativité. Qu&apos;il s&apos;agisse de développement web, d&apos;interfaces utilisateurs ou d&apos;applications fonctionnelles,
          ces projets témoignent de mon évolution et de mon engagement à toujours apprendre et innover.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 p-4 rounded-xl shadow-lg border border-zinc-800 hover:scale-[1.01] transition" >

              <div className="rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500} height={300} className="rounded-xl w-full object-cover border-4 border-blue-500"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-zinc-800 text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  <Github className="hover:text-purple-400 transition" />
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="hover:text-purple-400 transition" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
