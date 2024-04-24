/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";

export default function CopilotNotesComponent() {
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
        {notes.length === 0 ? (
          <>
            <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
              <span className="text-[16px] font-bold">0</span>
              <span className="text-[8px]">Note physique</span>
            </div>
            <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
              <span className="text-[16px] font-bold">0</span>
              <span className="text-[8px]">Note vitesse</span>
            </div>
            <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
              <span className="text-[16px] font-bold">0</span>
              <span className="text-[8px]">Note passe</span>
            </div>
            <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
              <span className="text-[16px] font-bold">0</span>
              <span className="text-[8px]">Note tir</span>
            </div>
            <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
              <span className="text-[16px] font-bold">0</span>
              <span className="text-[8px]">Note dribble</span>
            </div>
            <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
              <span className="text-[16px] font-bold">0</span>
              <span className="text-[8px]">Note vista</span>
            </div>
            <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
              <span className="text-[16px] font-bold">0</span>
              <span className="text-[8px]">Note cf</span>
            </div>
            <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
              <span className="text-[16px] font-bold">0</span>
              <span className="text-[8px]">Note plongeon</span>
            </div>
            <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
              <span className="text-[16px] font-bold">0</span>
              <span className="text-[8px]">Note dega</span>
            </div>
            <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
              <span className="text-[16px] font-bold">0</span>
              <span className="text-[8px]">Note pied faible</span>
            </div>
          </>
        ) : (
          notes.map((note, index) => (
            <>
              <React.Fragment key={index}>
                <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
                  <span className="text-[16px] font-bold">
                    {note.note_physique || "0"}
                  </span>
                  <span className="text-[8px]">Note physique</span>
                </div>
              </React.Fragment>
              <React.Fragment key={index}>
                <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
                  <span className="text-[16px] font-bold">
                    {note.note_vitesse || "0"}
                  </span>
                  <span className="text-[8px]">Note vitesse</span>
                </div>
              </React.Fragment>
              <React.Fragment key={index}>
                <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
                  <span className="text-[16px] font-bold">
                    {note.note_passe || "0"}
                  </span>
                  <span className="text-[8px]">Note passe</span>
                </div>
              </React.Fragment>
              <React.Fragment key={index}>
                <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
                  <span className="text-[16px] font-bold">
                    {note.note_tir || "0"}
                  </span>
                  <span className="text-[8px]">Note tir</span>
                </div>
              </React.Fragment>
              <React.Fragment key={index}>
                <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
                  <span className="text-[16px] font-bold">
                    {note.note_dribble || "0"}
                  </span>
                  <span className="text-[8px]">Note dribble</span>
                </div>
              </React.Fragment>
              <React.Fragment key={index}>
                <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
                  <span className="text-[16px] font-bold">
                    {note.note_vista || "0"}
                  </span>
                  <span className="text-[8px]">Note vista</span>
                </div>
              </React.Fragment>
              <React.Fragment key={index}>
                <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
                  <span className="text-[16px] font-bold">
                    {note.note_cf || "0"}
                  </span>
                  <span className="text-[8px]">Note cf</span>
                </div>
              </React.Fragment>
              <React.Fragment key={index}>
                <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
                  <span className="text-[16px] font-bold">
                    {note.note_plongeon || "0"}
                  </span>
                  <span className="text-[8px]">Note plongeon</span>
                </div>
              </React.Fragment>
              <React.Fragment key={index}>
                <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
                  <span className="text-[16px] font-bold">
                    {note.note_dega || "0"}
                  </span>
                  <span className="text-[8px]">Note dega</span>
                </div>
              </React.Fragment>
              <React.Fragment key={index}>
                <div className="rounded-full border-white border-2 bg-background-color-second text-white w-16 h-16 md:w-20 md:h-20 flex justify-center items-center flex-col">
                  <span className="text-[16px] font-bold">
                    {note.note_pied_faible || "0"}
                  </span>
                  <span className="text-[8px]">Note pied faible</span>
                </div>
              </React.Fragment>
            </>
          ))
        )}
      </div>
    </div>
  );
}
