/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";

export default function CopilotNoteGen() {
  const [noteGen, setNoteGen] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mynote`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const totalNotes = data.reduce((acc, note) => acc + note.note_gen, 0);
        const moyenne = totalNotes / data.length;
        setNoteGen(moyenne.toFixed(2));
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="font-primary-font text-center p-4 text-2xl">
        <span>Ma note générale</span>
      </div>
      {noteGen !== null ? (
        <div className="rounded-xl border-2 border-white bg-background-color-second text-white w-52 h-52 flex justify-center items-center flex-col">
          <span className="text-4xl font-bold">{noteGen}</span>
        </div>
      ) : (
        <div className="rounded-xl bg-background-color-second text-white w-52 h-52 flex justify-center items-center flex-col">
          <span className="text-4xl font-bold">00.00</span>
        </div>
      )}
    </div>
  );
}
