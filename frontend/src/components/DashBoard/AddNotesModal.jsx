/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";

Modal.setAppElement("#root"); // Cette ligne est nécessaire pour des raisons d'accessibilité

export default function AddEventModal({ isOpen, onRequestClose }) {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedCharacteristic, setSelectedCharacteristic] = useState("");
  const [note, setNote] = useState("");
  const [eventUsers, setEventUsers] = useState([]);

  // Récupérez les utilisateurs lors du chargement initial
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // Récupérez les événements lors du chargement initial
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

  // Récupérez les utilisateurs inscrits à l'événement sélectionné
  useEffect(() => {
    // if (selectedEvent) {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/stockEvent`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
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
    // }
  }, [selectedEvent]);

  const handleChange = (event) => {
    setNote(event.target.value);
  };
  // Envoyer les données du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedUser || !selectedCharacteristic || !note) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify({
        user_id: selectedUser,
        characteristic: selectedCharacteristic,
        note,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.info("Success:", data);
        // Réinitialisez les états après l'envoi des données
        setSelectedUser("");
        setSelectedCharacteristic("");
        setNote("");
        onRequestClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleEventChange = (e) => {
    setSelectedEvent(e.target.value);
    setSelectedUser("");
    // Videz eventUsers lorsque l'événement est changé
    setEventUsers([]);
  };

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleCharacteristicChange = (e) => {
    setSelectedCharacteristic(e.target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Ajouter des notes"
      className="absolute top-1/4 left-[30rem] transform w-[50rem] text-[8px] text-center bg-[#281f31] text-white p-4 m-8 rounded-lg font-secondary-font"
    >
      <button className="flex " onClick={onRequestClose}>
        <ImCross />
      </button>
      <h2 className="text-2xl font-bold mb-4">Ajouter des notes</h2>
      <label>
        <p className="text-lg mb-4">
          Sélectionnez un événement pour lequel vous souhaitez attribuer les
          notes aux participants:
        </p>
        <span className="text-white text-[20px] font-secondary-font">
          Evénement:
          <select
            className="w-80 m-8 text-background-color-second"
            onChange={handleEventChange}
          >
            <option value="">Sélectionnez un événement</option>
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.city} {new Date(event.date).toLocaleDateString("fr-FR")}{" "}
                {event.address}
              </option>
            ))}
          </select>
        </span>
      </label>
      <hr className="mb-4" />
      <label>
        <p className="text-lg mb-4">
          Sélectionnez un participant à qui vous souhaitez attribuer les notes :
        </p>
        <span className="text-white text-[20px] font-secondary-font">
          Participant:
          <select
            className="w-80 m-8 text-background-color-second"
            onChange={handleUserChange}
            value={selectedUser}
          >
            <option value="">Sélectionnez un participant</option>
            {eventUsers.map((user) => (
              <option key={user.id} value={user.id}>
                {user.lastname} {user.firstname} {user.email}
              </option>
            ))}
          </select>
        </span>
      </label>
      <hr className="mb-4" />
      <label>
        <p className="text-lg mb-4">
          Sélectionnez la caractéristique à laquelle vous souhaitez attribuer la
          note :
        </p>
        <span className="text-white text-[20px] font-secondary-font">
          Caractéristique:
          <select
            className="w-80 m-8 text-background-color-second"
            onChange={handleCharacteristicChange}
            value={selectedCharacteristic}
          >
            <option value="">Sélectionnez une caractéristique</option>
            <option value="note_physique">Note physique</option>
            <option value="note_vitesse">Note vitesse</option>
            <option value="note_passe">Note passe</option>
            <option value="note_tir">Note tir</option>
            <option value="note_dribble">Note dribble</option>
            <option value="note_vista">Note vista</option>
            <option value="note_cf">Note cf</option>
            <option value="note_plongeon">Note plongeon </option>
            <option value="note_arrets">Note arrets</option>
            <option value="note_dega">Note dega</option>
            <option value="note_faible<">Note pied faible</option>
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
          name="note"
          placeholder="Note"
          value={note}
          onChange={handleChange}
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
