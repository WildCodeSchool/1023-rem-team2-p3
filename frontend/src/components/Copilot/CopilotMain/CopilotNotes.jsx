import React, { useState, useEffect } from "react";

export default function CopilotNotes() {
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

  return (
    <div className="flex flex-col">
      <h1 className="font-primary-font text-lg text-center mt-2">Mes notes</h1>
      <div className="flex flex-row justify-around mx-2">
        {notes.map((note) => (
          <div
            key={note.id}
            className=" text-white p-1 flex justify-around my-3 gap-3"
          >
            <h1 className="text-xl rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 flex justify-center items-center flex-col">
              {note.note_physique}
            </h1>
            <h1 className="text-2xl rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 flex justify-center items-center flex-col">
              {note.note_vitesse}
            </h1>
            <h1 className="text-2xl rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 flex justify-center items-center flex-col">
              {note.note_passe}
            </h1>
            <h1 className="text-2xl rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 flex justify-center items-center flex-col">
              {note.note_tir}
            </h1>
            <h1 className="text-2xl rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 flex justify-center items-center flex-col">
              {note.note_dribble}
            </h1>
            <h1 className="text-2xl rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 flex justify-center items-center flex-col">
              {note.note_vista}
            </h1>
            <h1 className="text-2xl rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 flex justify-center items-center flex-col">
              {note.note_cf}
            </h1>
            <h1 className="text-2xl rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 flex justify-center items-center flex-col">
              {note.note_plongeon}
            </h1>
            <h1 className="text-2xl rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 flex justify-center items-center flex-col">
              {note.note_arrets}
            </h1>
            <h1 className="text-2xl rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 flex justify-center items-center flex-col">
              {note.note_dega}
            </h1>
            <h1 className="text-2xl rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 flex justify-center items-center flex-col">
              {note.note_pied_faible}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
