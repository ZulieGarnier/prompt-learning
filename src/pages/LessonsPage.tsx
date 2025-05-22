import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Flashcard from "../components/FlashcardFlip";
import actif from '../assets/images/actif.png';
import ethique from '../assets/images/ethique.png';
import prompt from '../assets/images/prompt.png';
import astuce from '../assets/images/astuce.png';
import typesIa from '../assets/images/typesIa.png';
import eco from '../assets/images/eco.png';

const flashcards = [
  {
    title: "Comprendre un bon prompt",
    image: prompt,
    content:
      "Un prompt est une commande structurée adressée à une IA.\n\nIl doit être clair, précis et contextualisé. Formule des objectifs, précise les contraintes et précise le rôle de l'IA si besoin. Plus c'est guidé, plus c'est efficace."
  },
  {
    title: "La méthode ACTIF",
    image: actif,
    content:
      "A - Action : ce que tu demandes à l'IA\nC - Contexte : pour qui, dans quel but\nT - Tonalité : professionnelle, drôle, bienveillante...\nI - Identité : qui est l'IA ? Coach, formateur, etc.\nF - Format : liste, tableau, texte long...\n\nEx : Rédige (action) un email professionnel (format) bienveillant (tonalité) destiné à un recruteur (contexte), écrit par un coach carrière (identité)."
  },
  {
    title: "Astuces pour des prompts efficaces",
    image: astuce,
    content:
      "• Décompose les actions : une demande = un prompt.\n• Ajoute des exemples ou des contre-exemples.\n• Ajuste avec des suites de prompt : un pour écrire, un pour reformuler, un pour corriger.\n• Demande à l'IA si elle a compris ta demande avant qu'elle agisse."
  },
  {
    title: "Types d’IA génératives",
    image: typesIa,
    content:
      "• Texte : ChatGPT, Claude, Gemini\n→ rédaction, synthèse, planification, conversation.\n\n• Image : Midjourney, DALL-E, Ideogram\n→ illustration, BD, concept visuel, affiche.\n\n• Vidéo : Runway, Kling, Pika\n→ animation, clips, storyboard.\n\n• Audio : Suno, Eleven Labs\n→ musique, effets, voix off, sound design."
  },
  {
    title: "Prompt éco-responsable",
    image: eco,
    content:
      "• Réduis le nombre d'appels à l'IA : fais plusieurs essais sur un même prompt plutôt que tout recommencer.\n• Regroupe les actions et les prompts dans une logique de réutilisation.\n• Utilise un agent si besoin pour automatiser proprement sans consommer trop inutilement."
  },
  {
    title: "Réflexions éthiques",
    image: ethique,
    content:
      "• Est-ce fiable ? Les IA hallucinent parfois, vérifie les infos.\n• D’où viennent les données ? Pas toujours explicite.\n• Quels biais ? Les IA peuvent reproduire des stéréotypes.\n• Quelle place pour l’humain ? L'IA est un outil, pas une fin.\n• Ai-je le droit d’utiliser ça ? Renseigne-toi sur le droit d’auteur et les données personnelles."
  }
];

export default function LessonsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center border-b">
          <h1 className="text-xl font-bold text-gray-900">🌟 Formation IA</h1>
          <nav className="space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              🏠 Accueil
            </Link>
            <Link to="/lessons" className="text-gray-700 hover:text-blue-600">
              📘 Leçons rapides
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-block text-sm text-blue-600 hover:underline"
        >
          ← Retour à la page précédente
        </button>

        <h2 className="text-3xl font-bold mb-6">✨ Leçons rapides</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flashcards.map((card, index) => (
            <Flashcard
              key={index}
              title={card.title}
              content={card.content}
              image={card.image}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
