/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";

Modal.setAppElement("#root"); // This line is needed for accessibility reasons

export default function AddEventModal({ isOpen, onRequestClose }) {
  const [formData, setFormData] = useState({
    name: "",
    color: "",
    img: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const file = name === "img" ? files[0] : null;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "img" ? file : value,
    }));
  };

  console.info("formData", formData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    console.info("formDataToSend", formDataToSend);
    // Send a POST request to your API
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/products`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        console.info("Success:", data);
        // Reset the form and close the modal
        setFormData({
          name: "",
          color: "",
          img: "",
        });

        onRequestClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Ajouter un produit"
      className="absolute top-1/2 left-1/2 right-auto bottom-auto mr-[-50%] transform -translate-x-1/2 -translate-y-1/2 md:w-[25rem] lg:w-[40rem] text-[8px] text-center bg-[#281f31] text-white p-4 rounded-lg font-secondary-font"
    >
      <button className="flex " onClick={onRequestClose}>
        <ImCross />
      </button>
      <h2 className="text-2xl font-bold mb-4">Ajouter un produit</h2>
      <p className="text-xs mb-4">Veuillez remplir les champs suivants :</p>
      <hr className="mb-4" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between items-center text-black gap-4"
      >
        <input
          type="file"
          name="img"
          onChange={handleChange}
          className="w-[200px] p-2 rounded-lg text-sm text-white"
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Nom"
          onChange={handleChange}
          className="w-[200px] p-2 rounded-lg text-sm"
        />
        <input
          type="text"
          name="color"
          placeholder="Couleur"
          value={formData.color}
          onChange={handleChange}
          className="w-[200px] p-2 rounded-lg text-sm"
        />

        <button
          type="submit"
          className="bg-[#544b5d] hover:bg-gray-300 w-[60px] h-[30px] text-base rounded-lg text-white"
        >
          Ajouter
        </button>
      </form>
    </Modal>
  );
}
