/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { ImCross } from "react-icons/im";

Modal.setAppElement("#root");
function RolesModals({ isOpen, onRequestClose, user }) {
  if (user?.is_admin === "user") {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Changement role"
        className="absolute top-1/2 left-1/2 right-auto bottom-auto mr-[-50%] transform -translate-x-1/2 -translate-y-1/2 md:w-[25rem] lg:w-[40rem] w-auto text-[8px] text-center bg-[#281f31] text-white p-2 rounded-lg"
      >
        <button onClick={onRequestClose} className="absolute right-4">
          <ImCross />
        </button>
        <h2 className="text-sm font-bold m-2">
          {user?.firstname} {user?.lastname} est devenu un admin.
        </h2>
      </Modal>
    );
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Changement role"
      className="absolute top-1/2 left-1/2 right-auto bottom-auto mr-[-50%] transform -translate-x-1/2 -translate-y-1/2 md:w-[25rem] lg:w-[40rem] w-auto text-[8px] text-center bg-[#281f31] text-white p-2 rounded-lg"
    >
      <button onClick={onRequestClose} className="absolute right-4">
        <ImCross />
      </button>
      <h2 className="text-sm font-bold m-2">
        {user?.firstname} {user?.lastname} est devenu un user.
      </h2>
    </Modal>
  );
}

RolesModals.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default RolesModals;
