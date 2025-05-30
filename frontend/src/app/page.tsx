'use client';

import { useState } from 'react';

export default function Home() {
  const [location, setLocation] = useState('');
  const [metier, setMetier] = useState('');

  // Liste fictive d'appels d'offres
  const appelsOffres = [
    {
      id: 1,
      titre: "Rénovation complète d'appartement",
      description: "Rénovation complète d'un appartement de 80m² à Paris",
      metier: "Maçonnerie",
      localisation: "Paris",
      budget: "50 000€ - 70 000€",
      date: "2024-03-20"
    },
    {
      id: 2,
      titre: "Installation électrique",
      description: "Mise aux normes électrique d'une maison individuelle",
      metier: "Électricité",
      localisation: "Lyon",
      budget: "8 000€ - 12 000€",
      date: "2024-03-19"
    },
    {
      id: 3,
      titre: "Rénovation salle de bain",
      description: "Rénovation complète d'une salle de bain de 6m²",
      metier: "Plomberie",
      localisation: "Marseille",
      budget: "15 000€ - 20 000€",
      date: "2024-03-18"
    },
    {
      id: 4,
      titre: "Peinture intérieure",
      description: "Peinture complète d'une maison de 120m²",
      metier: "Peinture",
      localisation: "Bordeaux",
      budget: "5 000€ - 7 000€",
      date: "2024-03-17"
    }
  ];

  // Filtrage des appels d'offres
  const appelsOffresFiltres = appelsOffres.filter(appel => {
    const matchLocation = !location || appel.localisation.toLowerCase().includes(location.toLowerCase());
    const matchMetier = !metier || appel.metier.toLowerCase().includes(metier.toLowerCase());
    return matchLocation && matchMetier;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Trouvez les meilleurs artisans pour vos projets
          </h1>
          
          {/* Filtres */}
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="metier" className="block text-sm font-medium text-gray-700 mb-1">
                Métier
              </label>
              <input
                type="text"
                id="metier"
                value={metier}
                onChange={(e) => setMetier(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ex: Maçonnerie, Électricité..."
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Localisation
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ex: Paris, Lyon..."
              />
            </div>
          </div>
        </div>

        {/* Liste des appels d'offres */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {appelsOffresFiltres.map((appel) => (
            <div key={appel.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{appel.titre}</h3>
                <p className="text-gray-600 mb-4">{appel.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p><span className="font-medium">Métier:</span> {appel.metier}</p>
                  <p><span className="font-medium">Localisation:</span> {appel.localisation}</p>
                  <p><span className="font-medium">Budget:</span> {appel.budget}</p>
                  <p><span className="font-medium">Date:</span> {new Date(appel.date).toLocaleDateString('fr-FR')}</p>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Voir les détails
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
