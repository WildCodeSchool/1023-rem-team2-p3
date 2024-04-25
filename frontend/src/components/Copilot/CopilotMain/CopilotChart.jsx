/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";

export default function CopilotChart() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mynote`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  // Fonction pour les couleurs de la barre en fonction des notes
  const getBarColor = (note) => {
    if (note >= 80) {
      return "bg-green-400";
    }
    if (note >= 31) {
      return "bg-yellow-400";
    }
    return "bg-red-400";
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h2 className="text-2xl font-primary-font mb-4">Mes performances</h2>
      <div className="flex flex-wrap justify-center gap-4 mx-10 relative">
        <div className="absolute hidden md:block top-0 bottom-0 left-[-40px] w-1 bg-white" />
        <div className="absolute  hidden md:block top-0 left-[-40px] mt-0.5 ml-3 text-xs text-white">
          100
        </div>
        <div className="absolute hidden md:block bottom-0left-[-40px] mb-0.5 ml-3 text-xs text-white">
          0
        </div>
        {notes.map((note, index) => (
          <div className="flex flex-col">
            <div key={index} className="flex items-center gap-8 md:gap-12">
              <div className="w-1 h-28 md:w-3 md:h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                <div
                  className={`w-full ${getBarColor(note.note_physique)} transition-all absolute bottom-0`}
                  style={{ height: `${note.note_physique}%` }}
                />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2">
                  {note.note_physique}
                </span>
              </div>

              <div className="w-1 h-28 md:w-3 md:h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                <div
                  className={`w-full ${getBarColor(note.note_vitesse)} transition-all absolute bottom-0`}
                  style={{ height: `${note.note_vitesse}%` }}
                />
                <span className=" absolute bottom-full left-1/2 transform -translate-x-1/2">
                  {note.note_vitesse}
                </span>
              </div>

              <div className="w-1 h-28 md:w-3 md:h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                <div
                  className={`w-full ${getBarColor(note.note_passe)} transition-all absolute bottom-0`}
                  style={{ height: `${note.note_passe}%` }}
                />
                <span className=" absolute bottom-full left-1/2 transform -translate-x-1/2">
                  {note.note_passe}
                </span>
              </div>

              <div className="w-1 h-28 md:w-3 md:h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                <div
                  className={`w-full ${getBarColor(note.note_tir)} transition-all absolute bottom-0`}
                  style={{ height: `${note.note_tir}%` }}
                />
                <span className=" absolute bottom-full left-1/2 transform -translate-x-1/2">
                  {note.note_tir}
                </span>
              </div>
              <div className="w-1 h-28 md:w-3 md:h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                <div
                  className={`w-full ${getBarColor(note.note_dribble)} transition-all absolute bottom-0`}
                  style={{ height: `${note.note_dribble}%` }}
                />
                <span className=" absolute bottom-full left-1/2 transform -translate-x-1/2">
                  {note.note_dribble}
                </span>
              </div>
              <div className="w-1 h-28 md:w-3 md:h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                <div
                  className={`w-full ${getBarColor(note.note_vista)} transition-all absolute bottom-0`}
                  style={{ height: `${note.note_vista}%` }}
                />
                <span className=" absolute bottom-full left-1/2 transform -translate-x-1/2">
                  {note.note_vista}
                </span>
              </div>
              <div className="w-1 h-28 md:w-3 md:h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                <div
                  className={`w-full ${getBarColor(note.note_cf)} transition-all absolute bottom-0`}
                  style={{ height: `${note.note_cf}%` }}
                />
                <span className=" absolute bottom-full left-1/2 transform -translate-x-1/2">
                  {note.note_cf}
                </span>
              </div>
              <div className="w-1 h-28 md:w-3 md:h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                <div
                  className={`w-full ${getBarColor(note.note_plongeon)} transition-all absolute bottom-0`}
                  style={{ height: `${note.note_plongeon}%` }}
                />
                <span className=" absolute bottom-full left-1/2 transform -translate-x-1/2">
                  {note.note_plongeon}
                </span>
              </div>
              <div className="w-1 h-28 md:w-3 md:h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                <div
                  className={`w-full ${getBarColor(note.note_dega)} transition-all absolute bottom-0`}
                  style={{ height: `${note.note_dega}%` }}
                />
                <span className=" absolute bottom-full left-1/2 transform -translate-x-1/2">
                  {note.note_dega}
                </span>
              </div>
              <div className="w-1 h-28 md:w-3 md:h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                <div
                  className={`w-full ${getBarColor(note.note_pied_faible)} transition-all absolute bottom-0`}
                  style={{ height: `${note.note_pied_faible}%` }}
                />
                <span className=" absolute bottom-full left-1/2 transform -translate-x-1/2">
                  {note.note_pied_faible}
                </span>
              </div>
            </div>
            <div className="flex text-violet-500">
              <span className="m-1 md:m-4 justify-center">PHY</span>
              <span className="m-1 md:m-4 justify-center">VIT</span>
              <span className="m-1 md:m-4 justify-center">PAS</span>
              <span className="m-1 md:m-4 justify-center">TIR</span>
              <span className="m-1 md:m-4 justify-center">DRI</span>
              <span className="m-1 md:m-4 justify-center">VIS</span>
              <span className="m-1 md:m-4 justify-center">CF</span>
              <span className="m-1 md:m-4 justify-center">PLO</span>
              <span className="m-1 md:m-4 justify-center">DEG</span>
              <span className="m-1 md:m-4 justify-center">BAF</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 p-4">
        <div className="w-8 h-2 bg-red-400 rounded-lg" />
        <span className="mt-2">0 - 30</span>
        <div className="w-8 h-2 bg-yellow-400 rounded-lg" />
        <span className="mt-2">31 - 79</span>
        <div className="w-8 h-2 bg-green-400 rounded-lg" />
        <span className="mt-2">80 - 100</span>
      </div>
    </div>
  );
}
