/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";

Modal.setAppElement("#root"); // This line is needed for accessibility reasons

export default function AddEventModal({ isOpen, onRequestClose }) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [formData, setFormData] = useState({
    note_physique: 0,
    note_vitesse: 0,
    note_passe: 0,
    note_tir: 0,
    note_dribble: 0,
    note_vista: 0,
    note_cf: 0,
    note_plongeon: 0,
    note_arrets: 0,
    note_dega: 0,
    note_pied_faible: 0,
    note_gen: 0,
  });

  // user
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

  // notes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to your API
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify({
        ...formData,
        user_id: selectedUser,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.info("Success:", data);
        // Réinitialisation des données et fermeture de la modal
        setFormData({
          /* Réinitialisation des données */
        });
        onRequestClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Ajouter des notes"
      className="absolute top-1/5 left-[20rem] transform w-[50rem] text-[8px] text-center bg-[#281f31] text-white p-4 m-8 rounded-lg font-secondary-font"
    >
      <button className="flex " onClick={onRequestClose}>
        <ImCross />
      </button>
      <h2 className="text-2xl font-bold mb-4">Ajouter des notes</h2>
      <label>
        <p className="text-xs mb-4">
          Selectionnez un participant à qui vous souhaitez attribuer les notes :
        </p>
        <span className="text-white text-[20px] font-secondary-font">
          Participant:
          <select className="w-80 m-8" onChange={handleUserChange}>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.lastname} {user.firstname} / {user.birthday} /{" "}
                {user.ville}
              </option>
            ))}
          </select>
        </span>
      </label>
      <hr className="mb-4" />
      <p className="text-xs mb-4">Veuillez remplir les champs suivants :</p>
      <hr className="mb-4" />
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 justify-between items-center text-black gap-4"
      >
        <span className="text-white text-[20px] font-secondary-font">
          Note physique:
        </span>
        <input
          type="text"
          name="note_physique"
          placeholder="Note physique"
          value={formData.note_physique}
          onChange={handleChange}
          className="w-[50px] p-2 rounded-lg text-sm"
        />
        <span className="text-white text-[20px] font-secondary-font">
          Note physique:
        </span>
        <input
          type="text"
          name="note_passe"
          placeholder="note_passe"
          value={formData.note_passe}
          onChange={handleChange}
          className="w-[50px] p-2 rounded-lg text-sm"
        />
        <span className="text-white text-[20px] font-secondary-font">
          Note physique:
        </span>
        <input
          type="text"
          name="note_tir"
          placeholder="note_tir"
          value={formData.note_tir}
          onChange={handleChange}
          className="w-[50px] p-2 rounded-lg text-sm"
        />
        <span className="text-white text-[20px] font-secondary-font">
          Note physique:
        </span>
        <input
          type="text"
          name="note_dribble"
          placeholder="note_dribble"
          value={formData.note_dribble}
          onChange={handleChange}
          className="w-[50px] p-2 rounded-lg text-sm"
        />
        <span className="text-white text-[20px] font-secondary-font">
          Note physique:
        </span>
        <input
          type="text"
          name="note_vista"
          placeholder="note_vista"
          value={formData.note_vista}
          onChange={handleChange}
          className="w-[50px] p-2 rounded-lg text-sm"
        />
        <span className="text-white text-[20px] font-secondary-font">
          Note physique:
        </span>
        <input
          type="text"
          name="note_cf"
          placeholder="note_cf"
          value={formData.note_cf}
          onChange={handleChange}
          className="w-[50px] p-2 rounded-lg text-sm"
        />
        <span className="text-white text-[20px] font-secondary-font">
          Note physique:
        </span>
        <input
          type="text"
          name="note_plongeon"
          placeholder="note_plongeon"
          value={formData.note_plongeon}
          onChange={handleChange}
          className="w-[50px] p-2 rounded-lg text-sm"
        />
        <span className="text-white text-[20px] font-secondary-font">
          Note physique:
        </span>
        <input
          type="text"
          name=" note_arrets"
          placeholder=" note_arrets"
          value={formData.note_arrets}
          onChange={handleChange}
          className="w-[50px] p-2 rounded-lg text-sm"
        />
        <span className="text-white text-[20px] font-secondary-font">
          Note physique:
        </span>
        <input
          type="text"
          name=" note_dega"
          placeholder="note_dega"
          value={formData.note_dega}
          onChange={handleChange}
          className="w-[50px] p-2 rounded-lg text-sm"
        />
        <span className="text-white text-[20px] font-secondary-font">
          Note physique:
        </span>
        <input
          type="text"
          name="note_pied_faible"
          placeholder="note_pied_faible"
          value={formData.note_pied_faible}
          onChange={handleChange}
          className="w-[50px] p-2 rounded-lg text-sm"
        />
        <span className="text-white text-[20px] font-secondary-font">
          Note physique:
        </span>
        <input
          type="text"
          name="note_gen"
          placeholder="note_gen"
          value={formData.note_gen}
          onChange={handleChange}
          className="w-[50px] p-2 rounded-lg text-sm"
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
