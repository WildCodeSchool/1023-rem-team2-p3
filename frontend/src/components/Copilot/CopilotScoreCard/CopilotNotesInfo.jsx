/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";

export default function CopilotNotesInfo() {
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
    <div className="grid grid-cols-4 gap-4 m-10">
      {notes.length === 0 ? (
        <>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white h-16 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
            <span className="text-[10px]">Note physique</span>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, numquam! Labore enim voluptatibus esse accusamus
            laudantium debitis reprehenderit
          </p>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
            <span className="text-[10px]">Note vitesse</span>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, numquam! Labore enim voluptatibus esse accusamus
            laudantium debitis reprehenderit
          </p>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
            <span className="text-[10px]">Note passe</span>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, numquam! Labore enim voluptatibus esse accusamus
            laudantium debitis reprehenderit
          </p>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
            <span className="text-[10px]">Note tir</span>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, numquam! Labore enim voluptatibus esse accusamus
            laudantium debitis reprehenderit
          </p>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
            <span className="text-[10px]">Note dribble</span>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, numquam! Labore enim voluptatibus esse accusamus
            laudantium debitis reprehenderit
          </p>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
            <span className="text-[10px]">Note vista</span>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, numquam! Labore enim voluptatibus esse accusamus
            laudantium debitis reprehenderit
          </p>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
            <span className="text-[10px]">Note cf</span>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, numquam! Labore enim voluptatibus esse accusamus
            laudantium debitis reprehenderit
          </p>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
            <span className="text-[10px]">Note plongeon</span>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, numquam! Labore enim voluptatibus esse accusamus
            laudantium debitis reprehenderit
          </p>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
            <span className="text-[10px]">Note dega</span>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, numquam! Labore enim voluptatibus esse accusamus
            laudantium debitis reprehenderit
          </p>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
            <span className="text-[10px]">Note pied faible</span>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, numquam! Labore enim voluptatibus esse accusamus
            laudantium debitis reprehenderit
          </p>
        </>
      ) : (
        notes.map((note, index) => (
          <>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_physique || "0"}
                </span>
                <span className="text-[10px]">Note physique</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium, numquam! Labore enim voluptatibus esse accusamus
                laudantium debitis reprehenderit
              </p>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_vitesse || "0"}
                </span>
                <span className="text-[10px]">Note vitesse</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium, numquam! Labore enim voluptatibus esse accusamus
                laudantium debitis reprehenderit
              </p>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_passe || "0"}
                </span>
                <span className="text-[10px]">Note passe</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium, numquam! Labore enim voluptatibus esse accusamus
                laudantium debitis reprehenderit
              </p>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_tir || "0"}
                </span>
                <span className="text-[10px]">Note tir</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium, numquam! Labore enim voluptatibus esse accusamus
                laudantium debitis reprehenderit
              </p>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_dribble || "0"}
                </span>
                <span className="text-[10px]">Note dribble</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium, numquam! Labore enim voluptatibus esse accusamus
                laudantium debitis reprehenderit
              </p>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_vista || "0"}
                </span>
                <span className="text-[10px]">Note vista</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium, numquam! Labore enim voluptatibus esse accusamus
                laudantium debitis reprehenderit
              </p>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_cf || "0"}
                </span>
                <span className="text-[10px]">Note cf</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium, numquam! Labore enim voluptatibus esse accusamus
                laudantium debitis reprehenderit
              </p>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_plongeon || "0"}
                </span>
                <span className="text-[10px]">Note plongeon</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium, numquam! Labore enim voluptatibus esse accusamus
                laudantium debitis reprehenderit
              </p>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_dega || "0"}
                </span>
                <span className="text-[10px]">Note dega</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium, numquam! Labore enim voluptatibus esse accusamus
                laudantium debitis reprehenderit
              </p>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_pied_faible || "0"}
                </span>
                <span className="text-[10px]">Note pied faible</span>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium, numquam! Labore enim voluptatibus esse accusamus
                laudantium debitis reprehenderit
              </p>
            </React.Fragment>
          </>
        ))
      )}
    </div>
  );
}
