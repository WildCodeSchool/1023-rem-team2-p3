/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";

Modal.setAppElement("#root"); // This line is needed for accessibility reasons

export default function EditUserModal({ isOpen, onRequestClose, userData }) {
  const [formData, setFormData] = useState({
    numero_de_telephone: userData.data.numero_de_telephone,
    ville: userData.data.ville,
    adresse_postale: userData.data.adresse_postale,
    pied_fort: userData.data.pied_fort,
    poste: userData.data.poste,
    sexe: userData.data.sexe,
    pointure: userData.data.pointure,
    poids: userData.data.poids,
    taille: userData.data.taille,
    // avatar: `${import.meta.env.VITE_BACKEND_URL}/${userData.data.img}`,
  });
  // const [selectedPied, setSelectedPied] = useState("");

  console.info("userData", userData);
  const handleChange = (event) => {
    // setSelectedPied(event.target.value);
    const { name, value, files } = event.target;
    console.info("files", files);
    if (name === "img") {
      if (files === null) {
        const file = `${import.meta.env.VITE_BACKEND_URL}/${formData.avatar}`;
        console.info("file", file);
        setFormData((prevFormData) => ({
          ...prevFormData,
        }));
      } else {
        const file = files[0];
        console.info("file", file);
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: file,
        }));
      }
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  console.info("formData", formData);

  const updateUserInfo = (updatedUserInfo) => {
    console.info("formData", formData);
    console.info("updatedProduct", updatedUserInfo);
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    console.info("formDataToSend", formDataToSend);
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/info`, {
      method: "PUT",
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      // body: JSON.stringify(formData),
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        console.info("Success:", data);
        setFormData(updatedUserInfo);
      })
      .catch((error) => {
        error.status(500).send({ message: "Error !" });
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateUserInfo(formData);
    onRequestClose();
  };
  console.info("formData", formData);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modifier mes informations"
      className="absolute top-1/2 left-1/2 right-auto h-auto  lg:h-[98%] bottom-auto mr-[-50%] transform -translate-x-1/2 -translate-y-1/2 md:w-[25rem] lg:w-[40rem] text-[8px] text-center bg-[#281f31] text-white p-4 rounded-lg font-secondary-font"
    >
      <button className="flex " onClick={onRequestClose}>
        <ImCross />
      </button>
      <h2 className=" font-bold mb-4">Modifier vos informations</h2>
      {/* <hr className="mb-4" /> */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between items-center gap-2 text-white"
      >
        <div className="flex flex-col items-center gap-2 ">
          <p> Numéro de téléphone :</p>
          <input
            type="text"
            name="numero_de_telephone"
            value={formData.numero_de_telephone}
            onChange={handleChange}
            className="w-80 text-black rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p>Ville :</p>
          <input
            type="text"
            name="ville"
            value={formData.ville}
            onChange={handleChange}
            className="w-80 text-black rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p>Adresse postale :</p>
          <input
            type="text"
            name="adresse_postale"
            value={formData.adresse_postale}
            onChange={handleChange}
            className="w-80 text-black rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p>Sexe :</p>
          <input
            type="text"
            name="sexe"
            value={formData.sexe}
            onChange={handleChange}
            className="w-80 text-black rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p>Taille :</p>
          <input
            type="text"
            name="taille"
            value={formData.taille}
            onChange={handleChange}
            className="w-80 text-black rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p>Poids :</p>
          <input
            type="text"
            name="poids"
            value={formData.poids}
            onChange={handleChange}
            className="w-80 text-black rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p>Poste</p>
          <input
            type="text"
            name="poste"
            value={formData.poste}
            onChange={handleChange}
            className="w-80 text-black rounded-lg p-2"
          />
        </div>
        {/* <span className="flex flex-col items-center gap-5">
          <p>Pied fort :</p>
          <select
            className="w-72 md:w-80 h-[28px] rounded-lg text-background-color-second"
            onChange={handleChange}
            value={formData.pied_fort}
          >
            <option value="">{formData.pied_fort}</option>
            <option value="gauche">gauche</option>
            <option value={formData.pied_fort}>droit</option>
          </select>
        </span> */}
        <div className="flex flex-col items-center gap-2">
          <p>Pied fort</p>
          <input
            type="text"
            name="pointure"
            value={formData.pied_fort}
            onChange={handleChange}
            className="w-80 text-black rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p>Pointure</p>
          <input
            type="text"
            name="pointure"
            value={formData.pointure}
            onChange={handleChange}
            className="w-80 text-black rounded-lg p-2"
          />
        </div>
        <input
          type="file"
          name="img"
          // value={`${import.meta.env.VITE_BACKEND_URL}/${formData.img}`}
          onChange={handleChange}
          className="w-[200px] p-2 rounded-lg text-sm text-white"
        />
        {/* <div className="flex flex-col items-center gap-2">
          <p>Avatar :</p>
          {formData.avatar ? (
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/${formData.avatar}`}
              alt="Photos de profil"
              // onChange={handleSearchChange}
              className="w-20 h-20 rounded-full"
            />
          ) : (
            <img
              src="/user.svg"
              alt="Photos de profil"
              // onChange={handleSearchChange}
              className="w-20 h-20 rounded-full"
            />
          )}
        </div> */}
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

EditUserModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  eventData: PropTypes.shape({
    city: PropTypes.string,
    date: PropTypes.string,
    address: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};
