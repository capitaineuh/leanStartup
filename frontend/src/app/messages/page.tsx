'use client';

import { useState } from 'react';

export default function MessagesPage() {
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

  const conversations = [
    {
      id: 1,
      name: "Musée de la Vie Romantique",
      lastMessage: "Pourriez-vous fournir une mise à jour sur la restauration du vase ?",
      timestamp: "Il y a 2 heures",
      unread: true
    },
    {
      id: 2,
      name: "Sarah Johnson",
      lastMessage: "Merci pour le devis détaillé. Quand pouvons-nous commencer ?",
      timestamp: "Il y a 1 jour",
      unread: false
    }
  ];

  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [showConversation, setShowConversation] = useState(false);

  const messages = [
    {
      id: 1,
      sender: "Musée de la Vie Romantique",
      content: "Pourriez-vous fournir une mise à jour sur la restauration du vase ?",
      timestamp: "Il y a 2 heures",
      isMe: false
    },
    {
      id: 2,
      sender: "Maria",
      content: "La restauration progresse bien. J'ai terminé les réparations des fissures et je travaille maintenant sur l'ajustement des couleurs pour les parties manquantes.",
      timestamp: "Il y a 1 heure",
      isMe: true
    }
  ];

  // Version Mobile
  const MobileView = () => (
    <div className="flex flex-col h-screen bg-white">
      {/* En-tête Mobile */}
      <div className="p-4 border-b">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-xl font-bold">Memento</h1>
            <span className="text-sm text-gray-600">Artisan</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold">Bonjour à toi, {profileData.firstName}</h2>
          <p className="text-gray-600">{profileData.role}</p>
        </div>

        {/* Stats Cards Mobile */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Projets en cours</p>
                <p className="text-2xl font-bold">{profileData.stats.currentProjects}</p>
              </div>
              <span className="text-orange-500 text-2xl">🔧</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Demandes en attente</p>
                <p className="text-2xl font-bold">{profileData.stats.pendingRequests}</p>
              </div>
              <span className="text-2xl">⏰</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Ce mois-ci</p>
                <p className="text-2xl font-bold">{profileData.stats.monthlyEarnings}</p>
              </div>
              <span className="text-green-500 text-2xl">💰</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Evaluation</p>
                <p className="text-2xl font-bold">{profileData.stats.rating}</p>
              </div>
              <span className="text-red-500 text-2xl">⭐️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Section Mobile */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        <div className="space-y-4">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => {
                setSelectedConversation(conv);
                setShowConversation(true);
              }}
              className="bg-white p-4 rounded-xl border border-gray-200"
            >
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium">{conv.name}</h3>
                <div className="flex items-center gap-2">
                  {conv.unread && <div className="w-2 h-2 bg-orange-500 rounded-full" />}
                  <span className="text-xs text-gray-500">{conv.timestamp}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{conv.lastMessage}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Conversation Modal Mobile */}
      {showConversation && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="flex flex-col h-full">
            <div className="p-4 border-b flex items-center gap-4">
              <button
                onClick={() => setShowConversation(false)}
                className="text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h2 className="text-lg font-semibold">{selectedConversation.name}</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-xl ${
                      message.isMe
                        ? 'bg-orange-100 text-gray-900'
                        : 'bg-gray-100'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <span className="text-xs text-gray-500 mt-1 block">
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tapez votre message..."
                  className="w-full p-4 pr-12 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Version Desktop (existante)
  const DesktopView = () => (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête */}
      <div className="bg-white shadow-sm border-b px-4 py-6">
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
                <span className="text-2xl">🔧</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Demandes en attente</p>
                  <p className="text-xl font-bold">{profileData.stats.pendingRequests}</p>
                </div>
                <span className="text-2xl">⏰</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Ce mois-ci</p>
                  <p className="text-xl font-bold">{profileData.stats.monthlyEarnings}</p>
                </div>
                <span className="text-2xl">💰</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Evaluation</p>
                  <p className="text-xl font-bold">{profileData.stats.rating}</p>
                </div>
                <span className="text-2xl">⭐️</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto">
          <nav className="flex">
            <a href="/apercu" className="px-6 py-4 text-gray-600 hover:text-gray-900">Aperçu</a>
            <a href="/projet" className="px-6 py-4 text-gray-600 hover:text-gray-900">Projet</a>
            <a href="/demandes" className="px-6 py-4 text-gray-600 hover:text-gray-900">Demandes</a>
            <a href="/messages" className="px-6 py-4 text-orange-500 border-b-2 border-orange-500">Messages</a>
            <a href="/avis" className="px-6 py-4 text-gray-600 hover:text-gray-900">Avis</a>
            <a href="/profile" className="px-6 py-4 text-gray-600 hover:text-gray-900">Profile</a>
          </nav>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="flex gap-6">
          {/* Liste des conversations */}
          <div className="w-1/3 bg-white rounded-xl shadow-sm border p-4">
            <h2 className="text-lg font-semibold mb-4">Conversations</h2>
            <div className="space-y-4">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv)}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedConversation.id === conv.id
                      ? 'bg-orange-50'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium">{conv.name}</h3>
                    <span className="text-xs text-gray-500">{conv.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Conversation active */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border p-4">
            <h2 className="text-lg font-semibold mb-4">{selectedConversation.name}</h2>
            
            {/* Messages */}
            <div className="space-y-4 mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-4 rounded-xl ${
                      message.isMe
                        ? 'bg-orange-100 text-gray-900'
                        : 'bg-gray-100'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <span className="text-xs text-gray-500 mt-1 block">
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input de message */}
            <div className="relative">
              <input
                type="text"
                placeholder="Tapez votre message..."
                className="w-full p-4 pr-12 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-500 hover:text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Version Mobile */}
      <div className="md:hidden">
        <MobileView />
      </div>

      {/* Version Desktop */}
      <div className="hidden md:block">
        <DesktopView />
      </div>
    </>
  );
} 