/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";
// import PropTypes from "prop-types";

Modal.setAppElement("#root"); // This line is needed for accessibility reasons

export default function EditProductModal({
  isOpen,
  onRequestClose,
  eventData,
}) {
  const [formData, setFormData] = useState(eventData);

  console.info("eventData", eventData);
  const handleChange = (event) => {
    const { name, value, files } = event.target;
    console.info("files", files);
    if (name === "img") {
      if (files === null) {
        const file = `${import.meta.env.VITE_BACKEND_URL}/${formData.img}`;
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
    console.info("formData", formData);
  };

  const updateProduct = (updatedProduct) => {
    console.info("formData", formData);
    console.info("updatedProduct", updatedProduct);
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    console.info("formDataToSend", formDataToSend);
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/products/${updatedProduct.id}`,
      {
        method: "PUT",
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
        body: formDataToSend,
        // body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.info("Success:", data);
        console.info("eventData", eventData);

        // const updatedProducts = { ...formData, ...updatedProduct };
        setFormData(updatedProduct);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct(formData);
    onRequestClose();
  };
  console.info("formData", formData);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modifier un produit"
      className="absolute top-1/2 left-1/2 right-auto bottom-auto mr-[-50%] transform -translate-x-1/2 -translate-y-1/2 md:w-[25rem] lg:w-[40rem] text-[8px] text-center bg-[#281f31] text-white p-4 rounded-lg font-secondary-font"
    >
      <button className="flex " onClick={onRequestClose}>
        <ImCross />
      </button>
      <h2 className="text-2xl font-bold mb-4">Modifier un produit</h2>
      <p className="text-xs mb-4">Veuillez modifier les champs suivants :</p>
      <hr className="mb-4" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between items-center text-black gap-4"
      >
        <input
          type="file"
          name="img"
          // value={`${import.meta.env.VITE_BACKEND_URL}/${formData.img}`}
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
          className="bg-[#544b5d] hover:bg-gray-300 w-[90px] h-[30px] text-base rounded-lg text-white"
        >
          Enregistrer
        </button>
      </form>
    </Modal>
  );
}
