import { useState } from 'react';
import { Exercise } from '../data/exercises';
import { ExerciseCard } from './ExerciseCard';

interface ExerciseListProps {
  exercises: Exercise[];
  onToggleComplete: (id: string) => void;
}

export function ExerciseList({ exercises, onToggleComplete }: ExerciseListProps) {
  const [recommendedExerciseId, setRecommendedExerciseId] = useState<string | null>(null);

  const filteredExercises = exercises;

  const handleExerciseToggle = (id: string) => {
    onToggleComplete(id);

    const currentIndex = filteredExercises.findIndex(ex => ex.id === id);
    const nextIncomplete = filteredExercises.find((ex, index) =>
      index > currentIndex && !ex.completed && ex.id !== id
    );

    setRecommendedExerciseId(nextIncomplete?.id || null);
  };

  return (
    <div>
      {filteredExercises.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          exercise={exercise}
          onToggleComplete={() => handleExerciseToggle(exercise.id)}
          isRecommended={exercise.id === recommendedExerciseId}
        />
      ))}
    </div>
  );
}
