import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-blue-300 text-bold text-black-700 py-9 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p>© {new Date().getFullYear()} Paul Petnga Ndingue. Tous droits réservés.</p>
        <div className="flex flex-wrap justify-center md:justify-end items-center space-x-4">
          <Link
            href="https://www.linkedin.com/in/paulndingue"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
            aria-label="LinkedIn"
          >
            <Linkedin size={30} className="inline-block mr-2" /> LinkedIn
          </Link>
          <Link
            href="https://github.com/Paul-Ndingue"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
            aria-label="GitHub" >
            <Github size={30} className="inline-block mr-2" /> GitHub
          </Link>

          <Link href="/contact" className="hover:text-blue-800">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
