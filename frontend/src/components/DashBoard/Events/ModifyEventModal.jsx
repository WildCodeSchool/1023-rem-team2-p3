/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";

Modal.setAppElement("#root"); // This line is needed for accessibility reasons

export default function EditEventModal({
  isOpen,
  onRequestClose,
  eventData,
  onUpdateEvent,
}) {
  const [formData, setFormData] = useState(eventData || {});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateEvent(formData);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modifier un événement"
      className="absolute top-1/3 left-[20rem] transform w-[50rem] text-[8px] text-center bg-[#281f31] text-white p-4 m-8 rounded-lg font-secondary-font"
    >
      <button className="flex " onClick={onRequestClose}>
        <ImCross />
      </button>
      <h2 className="text-2xl font-bold mb-4">Modifier un événement</h2>
      <p className="text-xs mb-4">Veuillez modifier les champs suivants :</p>
      <hr className="mb-4" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between items-center text-black gap-4"
      >
        <input
          type="text"
          name="city"
          placeholder="Ville"
          value={formData.city}
          onChange={handleChange}
          className="w-[200px] p-2 rounded-lg text-sm"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-[200px] p-2 rounded-lg text-sm"
        />
        <input
          type="text"
          name="address"
          placeholder="Adresse"
          value={formData.address}
          onChange={handleChange}
          className="w-[200px] p-2 rounded-lg text-sm"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantité"
          value={formData.quantity}
          onChange={handleChange}
          className="w-[200px] p-2 rounded-lg text-sm"
        />
        <button
          type="submit"
          className="bg-[#544b5d] hover:bg-gray-300 w-[90px] h-[30px] text-base rounded-lg text-white"
        >
          Enregistrer
        </button>
      </form>
    </Modal>
  );
}

EditEventModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  eventData: PropTypes.shape({
    city: PropTypes.string,
    date: PropTypes.string,
    address: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  onUpdateEvent: PropTypes.func.isRequired,
};
