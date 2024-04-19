/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { ImCross } from "react-icons/im";

function DiscountInfoModal({ isOpen, onRequestClose, payment }) {
  if (!payment) {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="User Details"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 text-center"
      >
        <button onClick={onRequestClose}>
          <ImCross />
        </button>
        <h2 className="text-2xl font-bold mb-4">
          Informations détaillées de l'utilisateur
        </h2>
        <p className="text-2xl font-bold mb-4">
          Les informations de l'utilisateur ne sont pas disponibles.
        </p>
      </Modal>
    );
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="User Details"
      className="absolute top-1/2 left-1/2 right-auto bottom-auto mr-[-50%] transform -translate-x-1/2 -translate-y-1/2 md:w-[25rem] lg:w-[40rem] w-auto text-[8px] text-center bg-[#281f31] text-white p-2 rounded-lg"
    >
      <button onClick={onRequestClose} className="absolute right-4">
        <ImCross />
      </button>
      <h2 className="text-sm font-bold m-2">
        Informations détaillées de l'utilisateur
      </h2>
      <div className="flex flex-col  justify-between mx-auto gap-2">
        {Object.entries(payment).map(([key, value]) => {
          if (key !== "hashedPassword" && value) {
            return (
              <div key={key} className="flex flex-col">
                <span className="font-bold">{key}</span>
                <span>{value}</span>
              </div>
            );
          }
          return null;
        })}
      </div>
    </Modal>
  );
}

DiscountInfoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  payment: PropTypes.object,
};

export default DiscountInfoModal;
