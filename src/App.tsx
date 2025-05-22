import { useEffect, useRef, useState } from 'react';
import { Exercise, exercises as initialExercises } from './data/exercises';
import { ExerciseList } from './components/ExerciseList';
import { LevelSelector } from './components/LevelSelector';
import { theoryByLevel } from './data/theoryByLevel';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';


function getLevelLabel(level: number): string {
  switch (level) {
    case 1: return 'débutant';
    case 2: return 'intermédiaire';
    case 3: return 'avancé';
    case 4: return 'expert';
    default: return 'inconnu';
  }
}

export default function App() {
  const [exercises, setExercises] = useState<Exercise[]>(initialExercises);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [completedCount, setCompletedCount] = useState<number>(0);
  const [animatingProgress, setAnimatingProgress] = useState<boolean>(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const previousCompletedCountRef = useRef<number>(0);

  const uniqueLevels = Array.from(
    new Map(
      exercises.map(ex => [ex.level, `Niveau ${ex.level} : ${getLevelLabel(ex.level)}`])
    )
  ).map(([id, name]) => ({ id, name }));

  const filteredExercises = selectedLevel
    ? exercises.filter(ex => ex.level === selectedLevel)
    : exercises;

  function animateProgressBar(startValue: number, endValue: number) {
    setAnimatingProgress(true);
    const duration = 400;
    const frameRate = 1000 / 60;
    const totalFrames = duration / frameRate;
    const increment = (endValue - startValue) / totalFrames;
    let current = startValue;
    let frame = 0;

    const interval = setInterval(() => {
      current += increment;
      frame++;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${Math.min(current, 100)}%`;
      }

      if (frame >= totalFrames) {
        clearInterval(interval);
        setAnimatingProgress(false);
      }
    }, frameRate);
  }

  function handleToggleComplete(id: string) {
    setExercises(prev => {
      const newExercises = prev.map(ex =>
        ex.id === id ? { ...ex, completed: !ex.completed } : ex
      );

      const previousCount = prev.filter(ex => ex.completed && (!selectedLevel || ex.level === selectedLevel)).length;
      const newCount = newExercises.filter(ex => ex.completed && (!selectedLevel || ex.level === selectedLevel)).length;

      const startValue = (previousCount / filteredExercises.length) * 100;
      const endValue = (newCount / filteredExercises.length) * 100;

      animateProgressBar(startValue, endValue);
      return newExercises;
    });
  }

  useEffect(() => {
    const completed = filteredExercises.filter(ex => ex.completed).length;

    if (completed !== previousCompletedCountRef.current && !animatingProgress) {
      const startValue = previousCompletedCountRef.current / filteredExercises.length * 100;
      const endValue = completed / filteredExercises.length * 100;
      animateProgressBar(startValue, endValue);
    }

    previousCompletedCountRef.current = completed;
    setCompletedCount(completed);
  }, [exercises, selectedLevel, animatingProgress]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center border-b">
          <h1 className="text-xl font-bold text-gray-900">🌟 Formation IA</h1>
          <nav className="space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600">🏠 Accueil</Link>
            <Link to="/lessons" className="text-gray-700 hover:text-blue-600">📘 Leçons rapides</Link>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Apprentissage de Création de Prompts</h1>
          <p className="mt-2 text-gray-600">
            Apprenez à créer des prompts efficaces pour les IA textuelles, des plus simples aux plus complexes.
          </p>

          <div className="mt-4">
            <LevelSelector selectedLevel={selectedLevel} onSelect={setSelectedLevel} levels={uniqueLevels} />
          </div>

          {selectedLevel && theoryByLevel[selectedLevel] && (
            <div className="bg-white border-l-4 border-blue-600 p-4 mt-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">
                {theoryByLevel[selectedLevel].title}
              </h2>
              <div className="text-sm text-gray-700 whitespace-pre-line">
                <ReactMarkdown>{theoryByLevel[selectedLevel].content}</ReactMarkdown>
              </div>
              <div className="mt-4 text-green-700 text-sm bg-green-50 p-3 rounded">
                <ReactMarkdown>{theoryByLevel[selectedLevel].ecoTips}</ReactMarkdown>
              </div>
            </div>
          )}

          <div className="mt-4 bg-blue-50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-sm text-gray-700">
                Progression : {completedCount} exercice{completedCount !== 1 ? 's' : ''} complété{completedCount !== 1 ? 's' : ''} sur {filteredExercises.length} — {((completedCount / (filteredExercises.length || 1)) * 100).toFixed(1)}%
              </span>
              {completedCount === filteredExercises.length && filteredExercises.length > 0 && (
                <span className="text-green-600 text-sm font-semibold ml-4">🎉 Bravo, tout est complété !</span>
              )}
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                ref={progressBarRef}
                className="bg-blue-600 h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(completedCount / (filteredExercises.length || 1)) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <ExerciseList exercises={filteredExercises} onToggleComplete={handleToggleComplete} />
      </main>
    </div>
  );
}
