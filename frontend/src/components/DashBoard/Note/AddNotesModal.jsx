/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import Modal from "react-modal";
import { UserContext } from "../../../context/UserContext";

Modal.setAppElement("#root");

export default function AddEventModal({ isOpen, onRequestClose }) {
  const { token } = useContext(UserContext);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedCharacteristic, setSelectedCharacteristic] = useState("");
  const [note, setNote] = useState({});
  const [userNotes, setUserNotes] = useState([]);
  const [eventUsers, setEventUsers] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events`)
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setEvents(filtered);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/stockEvent`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const filteredUsers = data.filter(
          (user) => user.event_id === parseInt(selectedEvent, 10)
        );
        setEventUsers(filteredUsers);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [selectedEvent]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/note`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserNotes(data);
        console.info("data fetch get:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleNoteChange = (event) => {
    // Construire le corps de la requête
    // const body = {
    //   name: note[selectedCharacteristic],
    //   user_id: selectedUser,
    // };
    const { name, value } = event.target;
    setNote({ ...note, [name]: value, user_id: selectedUser });
  };
  console.info("note", note);
  // logique pour les notes
  const handleSubmit = (event) => {
    event.preventDefault();

    // console.info("note body:", body);
    console.info("selectedUser body:", selectedUser);
    console.info("userNotes", userNotes);

    //
    // for(let i = 0 ; i<userNotes.length ; i++) {
    // if(userNotes[i].user_id === selectedUser) {

    // }
    // }
    const filterNoteUser = userNotes.filter(
      (notess) => parseInt(notess.user_id, 10) === parseInt(selectedUser, 10)
    );
    console.info("filterNoteUser", filterNoteUser);
    //
    // Vérifier si l'utilisateur a déjà des notes
    if (!filterNoteUser.length) {
      console.info("note.length fetch post:", userNotes);
      // Si l'utilisateur n'a pas de notes, envoyer une requête POST
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/note/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(note),
      })
        .then((response) => response.json())
        .then((data) => {
          console.info("Data post:", data);
          console.info("body fetch post:", { note, user_id: selectedUser });
          console.info("userNotes fetch post:", userNotes);
          // Réinitialiser les champs et fermer le modal
          setSelectedUser("");
          setSelectedCharacteristic("");
          setNote("");
          onRequestClose();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      // Si l'utilisateur a déjà des notes, envoyer une requête PUT
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/note/${selectedUser}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(note),
      })
        .then((response) => response.json())
        .then((data) => {
          console.info("Data put:", data);
          console.info("selectedUser", selectedUser);
          console.info("body fetch put:", note, { user_id: selectedUser });
          console.info("body fetch put:", note, { user_id: selectedUser });
          console.info("userNotes fetch put:", userNotes);
          console.info("note.length fetch put:", note.length);
          console.info("selectedUser fetch put:", selectedUser);
          // Réinitialiser les champs et fermer le modal
          setSelectedUser("");
          setSelectedCharacteristic("");
          setNote("");
          onRequestClose();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const handleEventChange = (e) => {
    setSelectedEvent(e.target.value);
  };

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
    console.info("selectedUser:", selectedUser);
    console.info("e.target.value:", e.target.value);
  };

  const handleCharacteristicChange = (e) => {
    setSelectedCharacteristic(e.target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Ajouter des notes"
      className="absolute top-1/2 left-1/2 right-auto bottom-auto mr-[-50%] transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[25rem] lg:w-[40rem] text-[8px] text-center bg-[#281f31] text-white p-4 rounded-lg font-secondary-font"
    >
      <button className="flex " onClick={onRequestClose}>
        <ImCross />
      </button>
      <h2 className="text-2xl font-bold mb-4">Ajouter des notes</h2>
      <label>
        {/* <p className="text-lg mb-4">
          Sélectionnez un événement pour lequel vous souhaitez attribuer les
          notes aux participants:
        </p> */}
        <span className="text-white text-[20px] font-secondary-font">
          Evénement:
          <select
            className="w-72 md:w-80 m-8  text-background-color-second"
            onChange={handleEventChange}
          >
            <option value="">Sélectionnez un événement</option>
            {events.map((event) => (
              <option className="text-xs" key={event.id} value={event.id}>
                {event.city} {new Date(event.date).toLocaleDateString("fr-FR")}{" "}
                {event.address}
              </option>
            ))}
          </select>
        </span>
      </label>
      <hr className="mb-4" />
      <label>
        {/* <p className="text-lg mb-4">
          Sélectionnez un participant à qui vous souhaitez attribuer les notes :
        </p> */}
        <span className="text-white text-[20px] font-secondary-font">
          Participant:
          <select
            className="w-72 md:w-80 m-8 text-background-color-second"
            onChange={handleUserChange}
            value={selectedUser}
          >
            <option value="">Sélectionnez un participant</option>
            {eventUsers.map((user) => (
              <option className="text-xs" key={user.id} value={user.user_id}>
                {user.lastname} {user.firstname} {user.email}
              </option>
            ))}
          </select>
        </span>
      </label>
      <hr className="mb-4" />
      <label>
        {/* <p className="text-lg mb-4">
          Sélectionnez la caractéristique à laquelle vous souhaitez attribuer la
          note :
        </p> */}
        <span className="text-white text-[20px] font-secondary-font">
          Caractéristique:
          <select
            className="w-72 md:w-80 m-8 text-background-color-second"
            onChange={handleCharacteristicChange}
            value={selectedCharacteristic}
          >
            <option className="text-xs" value="">
              Sélectionnez une caractéristique
            </option>
            <option className="text-xs" value="note_physique">
              Note physique
            </option>
            <option className="text-xs" value="note_vitesse">
              Note vitesse
            </option>
            <option className="text-xs" value="note_passe">
              Note passe
            </option>
            <option className="text-xs" value="note_tir">
              Note tir
            </option>
            <option className="text-xs" value="note_dribble">
              Note dribble
            </option>
            <option className="text-xs" value="note_vista">
              Note vista
            </option>
            <option className="text-xs" value="note_cf">
              Note cf
            </option>
            <option className="text-xs" value="note_plongeon">
              Note plongeon
            </option>
            <option className="text-xs" value="note_arrets">
              Note arrets
            </option>
            <option className="text-xs" value="note_dega">
              Note dega
            </option>
            <option className="text-xs" value="note_pied_faible">
              Note pied faible
            </option>
          </select>
        </span>
      </label>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 text-black gap-4"
      >
        <span className="text-white text-[20px] font-secondary-font">
          Note :
        </span>
        <input
          type="text"
          name={selectedCharacteristic}
          placeholder="Note"
          value={note[selectedCharacteristic]}
          onChange={handleNoteChange}
          className="w-[70px] p-2 rounded-lg text-sm"
        />
        <button
          type="submit"
          className="bg-[#544b5d] hover:bg-gray-300 w-[80px] h-[30px] text-base rounded-lg text-white"
        >
          Ajouter
        </button>
      </form>
    </Modal>
  );
}

AddEventModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};
