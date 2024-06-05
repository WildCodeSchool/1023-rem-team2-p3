/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import physique from "../../../assets/icon_the_lab/physique.svg";
import vitesse from "../../../assets/icon_the_lab/vitesse.svg";
import tir from "../../../assets/icon_the_lab/tir.svg";
import arret from "../../../assets/icon_the_lab/arret.svg";
import dribble from "../../../assets/icon_the_lab/dribble.svg";
import degagement from "../../../assets/icon_the_lab/degagement.svg";
import piedFaible from "../../../assets/icon_the_lab/pied_faible.svg";
import vision from "../../../assets/icon_the_lab/vision.svg";
import coupf from "../../../assets/icon_the_lab/coupf.svg";
import passe from "../../../assets/icon_the_lab/passe.svg";
import plongeon from "../../../assets/icon_the_lab/plongeon.svg";

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
    <div className="grid grid-cols-4 lg:grid-cols-6 gap-8 m-2">
      {notes.length === 0 ? (
        <>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white h-16 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
          </div>
          <div className="flex flex-col  items-center pl-3">
            <span className="text-[20px]">Physique</span>
            <img src={physique} alt="physique" className="w-20 h-20" />
          </div>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
          </div>
          <div className="flex flex-col  items-center">
            <span className="text-[20px]">Vitesse</span>
            <img src={vitesse} alt="vitesse" className="w-20 h-20" />
          </div>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
          </div>
          <div className="flex flex-col  items-center">
            <span className="text-[20px]">Passe</span>
            <img src={passe} alt="passe" className="w-20 h-20" />
          </div>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
          </div>
          <div className="flex flex-col  items-center">
            <span className="text-[20px]">Tir</span>
            <img src={tir} alt="tir" className="w-20 h-20" />
          </div>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
          </div>
          <div className="flex flex-col  items-center">
            <span className="text-[20px]">Dribble</span>
            <img src={dribble} alt="dribble" className="w-20 h-20" />
          </div>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
          </div>
          <div className="flex flex-col  items-center">
            <span className="text-[20px]">Vision de jeu</span>
            <img src={vision} alt="vision" className="w-20 h-20" />
          </div>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
          </div>
          <div className="flex flex-col  items-center">
            <span className="text-[20px]">Coup Franc</span>
            <img src={coupf} alt="coupf" className="w-20 h-20" />
          </div>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
          </div>
          <div className="flex flex-col  items-center">
            <span className="text-[20px]">Plongeon</span>
            <img src={plongeon} alt="plongeon" className="w-20 h-20" />
          </div>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
          </div>
          <div className="flex flex-col  items-center">
            <span className="text-[20px]">Arrêt</span>
            <img src={arret} alt="arret" className="w-20 h-20" />
          </div>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
          </div>
          <div className="flex flex-col  items-center">
            <span className="text-[20px]">Dégagement</span>
            <img src={degagement} alt="degagement" className="w-20 h-20" />
          </div>
          <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
            <span className="text-[20px] font-bold">0</span>
          </div>
          <div className="flex flex-col  items-center">
            <span className="text-[20px]">Pied faible</span>
            <img src={piedFaible} alt="pied_faible" className="w-20 h-20" />
          </div>
        </>
      ) : (
        notes.map((note, index) => (
          <>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_physique || "0"}
                </span>
              </div>
              <div className="flex flex-col  items-center pl-3">
                <span className="text-[20px]">Physique</span>
                <img src={physique} alt="physique" className="w-20 h-20" />
              </div>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_vitesse || "0"}
                </span>
              </div>
              <div className="flex flex-col  items-center">
                <span className="text-[20px]">Vitesse</span>
                <img src={vitesse} alt="vitesse" className="w-20 h-20" />
              </div>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_passe || "0"}
                </span>
              </div>
              <div className="flex flex-col  items-center">
                <span className="text-[20px]">Passe</span>
                <img src={passe} alt="passe" className="w-20 h-20" />
              </div>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_tir || "0"}
                </span>
              </div>
              <div className="flex flex-col  items-center">
                <span className="text-[20px]">Tir</span>
                <img src={tir} alt="tir" className="w-20 h-20" />
              </div>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_dribble || "0"}
                </span>
              </div>
              <div className="flex flex-col  items-center">
                <span className="text-[20px]">Dribble</span>
                <img src={dribble} alt="dribble" className="w-20 h-20" />
              </div>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_vista || "0"}
                </span>
              </div>
              <div className="flex flex-col  items-center">
                <span className="text-[20px]">Vision de jeu</span>
                <img src={vision} alt="vision" className="w-20 h-20" />
              </div>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_cf || "0"}
                </span>
              </div>
              <div className="flex flex-col  items-center">
                <span className="text-[20px]">Coup Franc</span>
                <img src={coupf} alt="coupf" className="w-20 h-20" />
              </div>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_plongeon || "0"}
                </span>
              </div>
              <div className="flex flex-col  items-center">
                <span className="text-[20px]">Plongeon</span>
                <img src={plongeon} alt="plongeon" className="w-20 h-20" />
              </div>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_arrets || "0"}
                </span>
              </div>
              <div className="flex flex-col  items-center">
                <span className="text-[20px]">Arrêt</span>
                <img src={arret} alt="arret" className="w-20 h-20" />
              </div>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_dega || "0"}
                </span>
              </div>
              <div className="flex flex-col  items-center">
                <span className="text-[20px]">Dégagement</span>
                <img src={degagement} alt="degagement" className="w-20 h-20" />
              </div>
            </React.Fragment>
            <React.Fragment key={index}>
              <div className="rounded-full border-white border-2 bg-background-color-second text-white w-20 h-20 md:w-28 md:h-28 flex justify-center items-center flex-col">
                <span className="text-[20px] font-bold">
                  {note.note_pied_faible || "0"}
                </span>
              </div>
              <div className="flex flex-col  items-center">
                <span className="text-[20px]">Pied faible</span>
                <img src={piedFaible} alt="pied_faible" className="w-20 h-20" />
              </div>
            </React.Fragment>
          </>
        ))
      )}
    </div>
  );
}
