/* eslint-disable react/no-array-index-key */
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
    <div className="flex flex-col justify-center items-center h-full">
      <h2 className="text-2xl font-primary-font mb-4">Mes notes</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {notes.length === 0 && (
          <div className="text-white font-secondary-font text-center text-xl">
            <p>Vous n'avez pas encore de notes 🥲</p>
          </div>
        )}
        {notes.map((note, index) => (
          <>
            <div
              key={index}
              className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col ge"
            >
              <span className="text-[16px] font-bold">
                {note.note_physique}
              </span>
              <span className="text-[8px]">Note physique</span>
            </div>
            <div
              key={index}
              className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col"
            >
              <span className="text-[16px] font-bold">{note.note_vitesse}</span>
              <span className="text-[8px]">Note vitesse</span>
            </div>
            <div
              key={index}
              className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col"
            >
              <span className="text-[16px] font-bold">{note.note_passe}</span>
              <span className="text-[8px]">Note passe</span>
            </div>
            <div
              key={index}
              className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col"
            >
              <span className="text-[16px] font-bold">{note.note_tir}</span>
              <span className="text-[8px]">Note tir</span>
            </div>
            <div
              key={index}
              className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col"
            >
              <span className="text-[16px] font-bold">{note.note_dribble}</span>
              <span className="text-[8px]">Note dribble</span>
            </div>
            <div
              key={index}
              className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col"
            >
              <span className="text-[16px] font-bold">{note.note_vista}</span>
              <span className="text-[8px]">Note vista</span>
            </div>
            <div
              key={index}
              className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col"
            >
              <span className="text-[16px] font-bold">{note.note_cf}</span>
              <span className="text-[8px]">Note cf</span>
            </div>
            <div
              key={index}
              className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col"
            >
              <span className="text-[16px] font-bold">
                {note.note_plongeon}
              </span>
              <span className="text-[8px]">Note plongeon</span>
            </div>
            <div
              key={index}
              className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col"
            >
              <span className="text-[16px] font-bold">{note.note_arrets}</span>
              <span className="text-[8px]">Note arrets</span>
            </div>
            <div
              key={index}
              className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col"
            >
              <span className="text-[16px] font-bold">{note.note_dega}</span>
              <span className="text-[8px]">Note dega</span>
            </div>
            <div
              key={index}
              className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col"
            >
              <span className="text-[16px] font-bold">
                {note.note_pied_faible}
              </span>
              <span className="text-[8px]">Note pied faible</span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
