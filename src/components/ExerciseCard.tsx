// ✅ ExerciseCard.tsx corrigé avec `level`
import { Exercise } from '../data/exercises';

interface ExerciseCardProps {
  exercise: Exercise;
  onToggleComplete: () => void;
  isRecommended: boolean;
}

function getLevelName(level: number): string {
  switch (level) {
    case 1: return 'Niveau 1 : débutant';
    case 2: return 'Niveau 2 : intermédiaire';
    case 3: return 'Niveau 3 : avancé';
    default: return 'Niveau inconnu';
  }
}

function getLevelColor(level: number): string {
  switch (level) {
    case 1: return 'text-green-600';
    case 2: return 'text-yellow-600';
    case 3: return 'text-red-600';
    default: return 'text-gray-500';
  }
}

export function ExerciseCard({ exercise, onToggleComplete, isRecommended }: ExerciseCardProps) {
  return (
    <div className={`border-2 rounded-lg p-5 mb-4 ${
      exercise.completed 
        ? 'border-green-500 bg-green-50' 
        : isRecommended 
          ? 'border-blue-500 bg-blue-50' 
          : 'border-gray-200'
    }`}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-bold">{exercise.title}</h3>
          <p className={`text-sm font-medium ${getLevelColor(exercise.level)}`}>
            {getLevelName(exercise.level)}
          </p>
        </div>
        <div className="flex items-center">
          {isRecommended && !exercise.completed && (
            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
              Recommandé
            </span>
          )}
          <label className="inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={exercise.completed} 
              onChange={onToggleComplete}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900">
              {exercise.completed ? 'Complété' : 'À faire'}
            </span>
          </label>
        </div>
      </div>
      
      <p className="text-gray-600 mb-3">{exercise.description}</p>
      
      <div className="mb-3">
        <h4 className="font-semibold mb-1">Objectif :</h4>
        <p>{exercise.objective}</p>
      </div>
      
      <div className="mb-3">
        <h4 className="font-semibold mb-1">Instructions :</h4>
        <p className="whitespace-pre-line">{exercise.instructions}</p>
      </div>
      
      <div className="mb-3">
        <h4 className="font-semibold mb-1">Format attendu :</h4>
        <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">{exercise.format}</pre>
      </div>
      
      <div>
        <h4 className="font-semibold mb-1">Critères d'évaluation :</h4>
        <ul className="list-disc list-inside">
          {exercise.criteria.map((criterion, index) => (
            <li key={index}>{criterion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
