export interface Exercise {
  id: string;
  level: number;
  title: string;
  description: string;
  objective: string;
  instructions: string;
  format: string;
  criteria: string[];
  completed: boolean;
  order: number;
}

export const exercises: Exercise[] = [
  // Niveau 1
  {
    id: "n1-ex1",
    level: 1,
    title: "Formulation de question simple",
    description: "Apprendre à formuler une question claire qui génère une réponse précise.",
    objective: "Apprendre à formuler une question claire qui génère une réponse précise.",
    instructions: "Rédigez un prompt pour obtenir une explication simple sur un sujet de votre choix (par exemple : \"Qu'est-ce que l'intelligence artificielle ?\"). Puis, améliorez ce prompt en le rendant plus spécifique pour obtenir une réponse plus ciblée.",
    format: "Version 1 (basique) : [Votre prompt initial]\nVersion 2 (améliorée) : [Votre prompt amélioré]",
    criteria: [
      "Clarté et précision de la formulation",
      "Capacité à améliorer un prompt basique",
      "Pertinence du contexte ajouté",
      "Efficacité du prompt à générer la réponse souhaitée"
    ],
    completed: false,
    order: 1
  },
  {
    id: "n1-ex2",
    level: 1,
    title: "Instruction directe",
    description: "Maîtriser la formulation d'instructions claires pour obtenir un résultat précis.",
    objective: "Maîtriser la formulation d'instructions claires pour obtenir un résultat précis.",
    instructions: "Rédigez un prompt sous forme d'instruction pour demander à l'IA de générer une liste de 5 idées sur un sujet de votre choix. Puis, améliorez ce prompt en précisant le format et le niveau de détail souhaités.",
    format: "Version 1 (basique) : [Votre prompt initial]\nVersion 2 (améliorée) : [Votre prompt amélioré]",
    criteria: [
      "Clarté et précision de la formulation",
      "Capacité à améliorer un prompt basique",
      "Pertinence du contexte ajouté",
      "Efficacité du prompt à générer la réponse souhaitée"
    ],
    completed: false,
    order: 2
  },
  {
    id: "n1-ex3",
    level: 1,
    title: "Définition du contexte",
    description: "Comprendre l'importance du contexte dans un prompt.",
    objective: "Comprendre l'importance du contexte dans un prompt.",
    instructions: "Rédigez un prompt qui inclut un contexte minimal pour obtenir des conseils sur un sujet de votre choix. Puis, améliorez ce prompt en enrichissant le contexte pour obtenir des conseils plus personnalisés et pertinents.",
    format: "Version 1 (contexte minimal) : [Votre prompt initial]\nVersion 2 (contexte enrichi) : [Votre prompt amélioré]",
    criteria: [
      "Clarté et précision de la formulation",
      "Capacité à améliorer un prompt basique",
      "Pertinence du contexte ajouté",
      "Efficacité du prompt à générer la réponse souhaitée"
    ],
    completed: false,
    order: 3
  },
  
  // Niveau 2
  {
    id: "n2-ex1",
    level: 2,
    title: "Cadrage avec persona",
    description: "Apprendre à utiliser un persona pour cadrer la réponse de l'IA.",
    objective: "Apprendre à utiliser un persona pour cadrer la réponse de l'IA.",
    instructions: "Rédigez un prompt qui demande à l'IA de répondre en adoptant un persona spécifique (par exemple : \"Réponds comme un professeur d'université\" ou \"Réponds comme un chef cuisinier\"). Le prompt doit inclure une question ou une demande claire sur un sujet de votre choix.",
    format: "Prompt avec persona : [Votre prompt]\nJustification : [Expliquez pourquoi vous avez choisi ce persona et comment il influence la réponse attendue]",
    criteria: [
      "Pertinence du persona choisi",
      "Clarté des contraintes",
      "Efficacité du prompt à générer la réponse dans le format souhaité",
      "Justification cohérente des choix effectués"
    ],
    completed: false,
    order: 4
  },
  {
    id: "n2-ex2",
    level: 2,
    title: "Utilisation d'exemples",
    description: "Maîtriser l'utilisation d'exemples pour guider la réponse de l'IA.",
    objective: "Maîtriser l'utilisation d'exemples pour guider la réponse de l'IA.",
    instructions: "Rédigez un prompt qui inclut un ou plusieurs exemples du type de réponse que vous souhaitez obtenir. Par exemple, si vous voulez générer des idées de titres d'articles, fournissez quelques exemples de titres que vous aimez.",
    format: "Prompt avec exemples : [Votre prompt incluant des exemples]\nJustification : [Expliquez comment vos exemples orientent la réponse de l'IA]",
    criteria: [
      "Pertinence des exemples choisis",
      "Clarté des contraintes",
      "Efficacité du prompt à générer la réponse dans le format souhaité",
      "Justification cohérente des choix effectués"
    ],
    completed: false,
    order: 5
  },
  {
    id: "n2-ex3",
    level: 2,
    title: "Contraintes de format et de style",
    description: "Apprendre à définir des contraintes précises de format et de style.",
    objective: "Apprendre à définir des contraintes précises de format et de style.",
    instructions: "Rédigez un prompt qui spécifie clairement le format et le style de réponse souhaités. Par exemple, demandez une réponse sous forme de liste à puces, de tableau, de paragraphes courts, ou dans un style particulier (formel, informel, poétique, etc.).",
    format: "Prompt avec contraintes : [Votre prompt incluant des contraintes de format et de style]\nJustification : [Expliquez pourquoi ces contraintes sont importantes pour votre objectif]",
    criteria: [
      "Clarté des contraintes de format et de style",
      "Efficacité du prompt à générer la réponse dans le format souhaité",
      "Justification cohérente des choix effectués"
    ],
    completed: false,
    order: 6
  },
  
  // Niveau 3
  {
    id: "n3-ex1",
    level: 3,
    title: "Prompt à plusieurs étapes",
    description: "Apprendre à structurer un prompt qui guide l'IA à travers plusieurs étapes de réflexion.",
    objective: "Apprendre à structurer un prompt qui guide l'IA à travers plusieurs étapes de réflexion.",
    instructions: "Rédigez un prompt qui demande à l'IA d'analyser un problème en suivant une séquence d'étapes précises. Par exemple, pour analyser un concept, demandez d'abord une définition, puis des exemples, puis des applications pratiques, et enfin une conclusion.",
    format: "Prompt multi-étapes : [Votre prompt structuré en étapes]\nExplication de la structure : [Justifiez l'ordre et la nature des étapes choisies]",
    criteria: [
      "Structure logique et cohérente des étapes",
      "Clarté et précision des instructions",
      "Efficacité du prompt à générer une réponse structurée"
    ],
    completed: false,
    order: 7
  },
  {
    id: "n3-ex2",
    level: 3,
    title: "Chaînage de pensée (Chain of Thought)",
    description: "Maîtriser la technique du chaînage de pensée pour obtenir des réponses plus réfléchies.",
    objective: "Maîtriser la technique du chaînage de pensée pour obtenir des réponses plus réfléchies.",
    instructions: "Rédigez un prompt qui demande explicitement à l'IA de \"penser à voix haute\" ou de \"raisonner étape par étape\" avant de donner sa réponse finale. Choisissez un problème qui nécessite une réflexion approfondie (par exemple, un problème logique, une analyse de situation, ou une prise de décision).",
    format: "Prompt avec chaînage de pensée : [Votre prompt]\nJustification : [Expliquez pourquoi cette approche est pertinente pour le problème choisi]",
    criteria: [
      "Efficacité du chaînage de pensée pour améliorer la qualité de la réponse",
      "Clarté et précision des instructions",
      "Pertinence de l'approche pour le problème choisi"
    ],
    completed: false,
    order: 8
  },
  {
    id: "n3-ex3",
    level: 3,
    title: "Optimisation pour une tâche spécifique",
    description: "Apprendre à optimiser un prompt pour une tâche précise et spécialisée.",
    objective: "Apprendre à optimiser un prompt pour une tâche précise et spécialisée.",
    instructions: "Choisissez une tâche spécifique (par exemple : résumé d'article, génération de code, création de plan de cours, etc.) et rédigez un prompt hautement optimisé pour cette tâche. Votre prompt doit inclure des instructions précises, des contraintes, et éventuellement des exemples.",
    format: "Tâche choisie : [Nom de la tâche]\nPrompt optimisé : [Votre prompt]\nÉléments d'optimisation : [Listez les éléments spécifiques que vous avez inclus pour optimiser le prompt]",
    criteria: [
      "Pertinence des éléments d'optimisation pour la tâche spécifique",
      "Clarté et précision des instructions",
      "Efficacité du prompt pour la tâche choisie"
    ],
    completed: false,
    order: 9
  },
  
  // Niveau 4
  {
    id: "n4-ex1",
    level: 4,
    title: "Structure de base d'un prompt système",
    description: "Maîtriser la structure fondamentale d'un prompt système pour créer un assistant IA.",
    objective: "Maîtriser la structure fondamentale d'un prompt système pour créer un assistant IA.",
    instructions: "Rédigez un prompt système de base qui définit :\n1. Le rôle et l'identité de l'assistant\n2. Ses compétences principales\n3. Son style de communication\n4. Ses limites ou restrictions\n\nChoisissez un type d'assistant simple (par exemple : assistant pour l'apprentissage d'une langue, coach sportif, assistant de productivité).",
    format: "Type d'assistant : [Nom et description brève]\nPrompt système :\n\"\"\"\n[Votre prompt système complet]\n\"\"\"\nExplication des composants : [Détaillez chaque section de votre prompt et son objectif]",
    criteria: [
      "Structure complète et cohérente du prompt système",
      "Définition claire du rôle et des compétences",
      "Cohérence du style de communication",
      "Pertinence des limites définies"
    ],
    completed: false,
    order: 10
  },
  {
    id: "n4-ex2",
    level: 4,
    title: "Personnalité et comportement avancés",
    description: "Apprendre à définir une personnalité complexe et des comportements spécifiques.",
    objective: "Apprendre à définir une personnalité complexe et des comportements spécifiques.",
    instructions: "Rédigez un prompt système qui crée un assistant avec une personnalité distinctive et des comportements spécifiques. Votre prompt doit inclure :\n1. Des traits de caractère précis\n2. Un ton et un style de communication détaillés\n3. Des règles de comportement dans différentes situations\n4. Des exemples de réponses typiques",
    format: "Concept de personnalité : [Description de la personnalité visée]\nPrompt système :\n\"\"\"\n[Votre prompt système complet]\n\"\"\"\nJustification des choix : [Expliquez comment chaque élément contribue à la personnalité]",
    criteria: [
      "Définition claire de la personnalité et des comportements",
      "Cohérence des traits de caractère et du style de communication",
      "Pertinence des règles de comportement",
      "Qualité des exemples de réponses"
    ],
    completed: false,
    order: 11
  },
  {
    id: "n4-ex3",
    level: 4,
    title: "Assistant spécialisé multi-plateforme",
    description: "Créer un prompt système adaptable à différentes plateformes d'IA (ChatGPT, Hugging Face, Poe).",
    objective: "Créer un prompt système adaptable à différentes plateformes d'IA (ChatGPT, Hugging Face, Poe).",
    instructions: "Concevez un prompt système pour un assistant hautement spécialisé dans un domaine de votre choix. Votre prompt doit :\n1. Être adaptable aux différentes plateformes (avec des variantes si nécessaire)\n2. Inclure des connaissances spécifiques au domaine\n3. Définir des capacités et des limites précises\n4. Intégrer des instructions pour gérer les requêtes hors domaine",
    format: "Domaine de spécialisation : [Domaine choisi]\nPrompt système pour ChatGPT :\n\"\"\"\n[Votre prompt système]\n\"\"\"\nAdaptations pour Hugging Face :\n\"\"\"\n[Modifications nécessaires]\n\"\"\"\nAdaptations pour Poe :\n\"\"\"\n[Modifications nécessaires]\n\"\"\"\nStratégie d'adaptation : [Expliquez votre approche pour adapter le prompt aux différentes plateformes]",
    criteria: [
      "Adaptabilité aux différentes plateformes",
      "Pertinence des connaissances et capacités pour le domaine choisi",
      "Efficacité des instructions pour gérer les cas limites",
      "Cohérence de la stratégie d'adaptation"
    ],
    completed: false,
    order: 12
  }
];

export const levels = [
  {
    id: 1,
    title: "Prompts Basiques",
    description: "Comprendre les principes fondamentaux des prompts, apprendre à formuler des questions claires et précises, et maîtriser la structure d'un prompt simple."
  },
  {
    id: 2,
    title: "Prompts Intermédiaires",
    description: "Utiliser des techniques de cadrage et de contexte, incorporer des exemples et des contraintes, et orienter le format et le style de réponse."
  },
  {
    id: 3,
    title: "Prompts Avancés",
    description: "Créer des prompts à plusieurs étapes, utiliser des techniques de chaînage de pensée, et optimiser les prompts pour des tâches spécifiques."
  },
  {
    id: 4,
    title: "Prompts Système",
    description: "Comprendre la structure des prompts système, définir des personnalités et des comportements, et créer des assistants personnalisés type GPT."
  }
];
