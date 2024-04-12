/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { ImCross } from "react-icons/im";

export default function PaymentInfoModal({ isOpen, onRequestClose, payment }) {
  if (!payment) {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="User Details"
        className="absolute  text-center"
      >
        <button onClick={onRequestClose}>
          <ImCross />
        </button>
        <h2 className="text-2xl font-bold mb-4">
          Informations détaillées du payment
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
      className="absolute top-1/2 left-[40px] transform w-[80rem] text-[8px] text-center bg-[#281f31] text-white p-4 m-8 rounded-lg"
    >
      <button onClick={onRequestClose} className="absolute right-4">
        <ImCross />
      </button>
      <h2 className="text-sm font-bold m-2">
        Informations détaillées du payment
      </h2>
      <div className="flex justify-between mx-auto gap-1">
        {Object.entries(payment).map(([key, value]) => {
          if (key !== "hashedPassword") {
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

PaymentInfoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  payment: PropTypes.object,
};
