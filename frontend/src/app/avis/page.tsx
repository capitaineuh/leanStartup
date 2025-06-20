'use client';

export default function AvisPage() {
  // Ces données seront plus tard récupérées depuis le backend
  const profileData = {
    firstName: "Maria",
    role: "Maître Restaurateur en Céramique",
    stats: {
      currentProjects: 3,
      pendingRequests: 5,
      monthlyEarnings: "4,500 €",
      rating: "4.9"
    }
  };

  const reviews = [
    {
      id: 1,
      client: "Fondation du patrimoine",
      project: "Mécanisme d'horloge de l'époque victorienne",
      rating: 5,
      date: "12 janvier 2024",
      comment: "Un savoir-faire exceptionnel et une grande attention aux détails. L'horloge est magnifique !"
    },
    {
      id: 2,
      client: "Collectionneur privé",
      project: "Cadre de miroir ancien",
      rating: 5,
      date: "20 décembre 2023",
      comment: "Service professionnel et travail de restauration magnifique. Je recommande vivement !"
    },
    {
      id: 3,
      client: "Collectionneur privé",
      project: "Cadre de miroir ancien",
      rating: 5,
      date: "20 décembre 2023",
      comment: "Service professionnel et travail de restauration magnifique. Je recommande vivement !"
    },
    {
      id: 4,
      client: "Collectionneur privé",
      project: "Cadre de miroir ancien",
      rating: 5,
      date: "20 décembre 2023",
      comment: "Service professionnel et travail de restauration magnifique. Je recommande vivement !"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${index < rating ? 'text-orange-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête */}
      <div className="bg-white px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">Bonjour à toi, {profileData.firstName}</h1>
          <p className="text-gray-600">{profileData.role}</p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white p-4 rounded-xl shadow-sm border">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Projets en cours</p>
                  <p className="text-xl font-bold">{profileData.stats.currentProjects}</p>
                </div>
                <span className="text-orange-500">🔧</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Demandes en attente</p>
                  <p className="text-xl font-bold">{profileData.stats.pendingRequests}</p>
                </div>
                <span className="text-gray-400">⏰</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Ce mois-ci</p>
                  <p className="text-xl font-bold">{profileData.stats.monthlyEarnings}</p>
                </div>
                <span className="text-green-500">$</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Évaluation</p>
                  <p className="text-xl font-bold">{profileData.stats.rating}</p>
                </div>
                <span className="text-red-500">♥</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex">
            <a href="/apercu" className="px-6 py-4 text-gray-600 hover:text-gray-900">Aperçu</a>
            <a href="/projet" className="px-6 py-4 text-gray-600 hover:text-gray-900">Projet</a>
            <a href="/demandes" className="px-6 py-4 text-gray-600 hover:text-gray-900">Demandes</a>
            <a href="/messages" className="px-6 py-4 text-gray-600 hover:text-gray-900">Messages</a>
            <a href="/avis" className="px-6 py-4 text-orange-500 border-b-2 border-orange-500">Avis</a>
            <a href="/profile" className="px-6 py-4 text-gray-600 hover:text-gray-900">Profile</a>
          </nav>
        </div>
      </div>

      {/* Contenu principal - Avis */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Avis des clients</h2>
          <div className="flex items-center gap-2">
            <StarRating rating={5} />
            <span className="text-xl font-bold">{profileData.stats.rating}</span>
            <span className="text-gray-500 text-sm">(24 Avis)</span>
          </div>
        </div>

        {/* Liste des avis */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">{review.client}</h3>
                  <p className="text-sm text-gray-600">{review.project}</p>
                </div>
                <div className="flex items-center gap-2">
                  <StarRating rating={review.rating} />
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 