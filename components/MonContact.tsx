'use client';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 text-blue-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold inline-block border-b-3 border-blue-400 mb-4">
          Contact
        </h1>
        <p className="mb-10 text-gray-700">
        Vous souhaitez collaborer avec moi, en savoir plus sur mes projets ou simplement échanger ? N&apos;hésitez 
        pas à me contacter via le formulaire ci-dessous. Je serai ravi de répondre à vos questions dans les plus brefs délais.
        Chaque message compte, alors ne soyez pas timide !

</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Infos contact */}
          <div className="bg-white shadow-lg p-6 rounded">
            <div className="flex items-start mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <MapPin className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Location:</h3>
                <p>Ottawa/Gatineau, Canada</p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Mail className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Email:</h3>
                <p>paulpetnga023@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Phone className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Call:</h3>
                <p>+1 (819)319-1920</p>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white shadow-lg p-6 rounded">
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Your Name</label>
                  <input type="text" className="w-full border border-gray-300 px-3 py-2 rounded" />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 text-sm">Your Email</label>
                  <input type="email" className="w-full border border-gray-300 px-3 py-2 rounded" />
                </div>
              </div>
              <div>
                <label className="block mb-1 text-sm">Message</label>
                <textarea rows={5} className="w-full border border-gray-300 px-3 py-2 rounded resize-y" />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
