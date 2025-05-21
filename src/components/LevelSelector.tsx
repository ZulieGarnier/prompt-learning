interface Level {
  id: number;
  name: string;
}

interface LevelSelectorProps {
  selectedLevel: number | null;
  onSelect: (level: number | null) => void;
  levels: Level[];
}

export function LevelSelector({ selectedLevel, onSelect, levels }: LevelSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-full border text-sm font-medium ${
          selectedLevel === null
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
        }`}
      >
        Tous les niveaux
      </button>

      {levels.map(level => (
        <button
          key={level.id}
          onClick={() => onSelect(level.id)}
          className={`px-4 py-2 rounded-full border text-sm font-medium ${
            selectedLevel === level.id
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
          }`}
        >
          {level.name}
        </button>
      ))}
    </div>
  );
}
