import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ResultComponent: React.FC<{ character: any }> = ({ character }) => {
  if (!character) {
    return null;
  }

  return (
    <div className="mt-4 p-4 border rounded shadow-sm max-w-screen-md w-full mx-auto text-white">
      <h3 className="font-bold text-left text-white mb-3">Details</h3>
      <div className="flex items-center gap-3">
        <p className="w-14 text-left font-semibold">Name:</p>
        <p className="text-left">{character.name}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="w-14 text-left font-semibold">Height:</p>
        <p className="text-left">{character.height}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="w-14 text-left font-semibold">Mass:</p>
        <p className="text-left">{character.mass}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="w-14 text-left font-semibold">Hair color:</p>
        <p className="text-left">{character.hair_color}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="w-14 text-left font-semibold">Skin color:</p>
        <p className="text-left">{character.skin_color}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="w-14 text-left font-semibold">Eye color:</p>
        <p className="text-left">{character.eye_color}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="w-14 text-left font-semibold">Birth year:</p>
        <p className="text-left">{character.birth_year}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="w-14 text-left font-semibold">Gender:</p>
        <p className="text-left">{character.gender}</p>
      </div>
    </div>
  );
};

export default ResultComponent;
