import React, { useEffect, useState } from "react";
import EditUserModal from "./EditUserModal";
import AddProfileCopilotModal from "./AddProfileCopilotModal";

export default function UserCopilot() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState();
  const [notification, setNotification] = useState({
    message: "",
    success: false,
  });

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/informations`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.info(data);
        setFormData(data);
      })
      .catch((err) => console.info(err));
  }, [isAddModalOpen, isEditModalOpen, notification.message]);

  return (
    <div className="flex flex-col gap-4 text-white font-secondary-font items-center w-full py-5">
      {isEditModalOpen && (
        <EditUserModal
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
          userData={formData}
          notification={notification}
          setNotification={setNotification}
        />
      )}
      <h1 className=" text-2xl">Votre information personnelle :</h1>
      {formData?.map((users, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="grid grid-cols-1 lg:grid-cols-2 w-full justify-center items-center gap-5"
        >
          <div className="flex flex-col items-center gap-5">
            <p>Numéro de téléphone :</p>
            <input
              type="text"
              value={users.numero_de_telephone}
              className="w-80 text-black rounded-lg p-2"
              readOnly
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>Ville :</p>
            <input
              type="text"
              value={users.ville}
              className="w-80 text-black rounded-lg p-2"
              readOnly
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>Adresse postale :</p>
            <input
              type="text"
              value={users.adresse_postale}
              className="w-80 text-black rounded-lg p-2"
              readOnly
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>Sexe :</p>
            <input
              type="text"
              value={users.sexe}
              className="w-80 text-black rounded-lg p-2"
              readOnly
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>Taille :</p>
            <input
              type="text"
              value={users.taille}
              className="w-80 text-black rounded-lg p-2"
              readOnly
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>Poids :</p>
            <input
              type="text"
              value={users.poids}
              className="w-80 text-black rounded-lg p-2"
              readOnly
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>Poste :</p>
            <input
              type="text"
              value={users.poste}
              className="w-80 text-black rounded-lg p-2"
              readOnly
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>Pied fort :</p>
            <input
              type="text"
              value={users.pied_fort}
              className="w-80 text-black rounded-lg p-2"
              readOnly
            />
          </div>
          <div className="flex flex-col items-center gap-5 h-full">
            <p>Pointure :</p>
            <input
              type="text"
              value={users.pointure}
              className="w-80 text-black rounded-lg p-2"
              readOnly
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>Avatar :</p>
            {users.avatar ? (
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${users.avatar}`}
                alt="Photos de profil"
                className="w-40 h-40 rounded-full"
              />
            ) : (
              <img
                src="/user.svg"
                alt="Photos de profil"
                className="w-40 h-40 rounded-full"
              />
            )}
          </div>
        </div>
      ))}
      {formData?.length ? (
        <button
          onClick={openEditModal}
          type="button"
          className="flex justify-center items-center text-white bg-gray-400 p-2 rounded-lg text-center "
        >
          Mettre à jour mes informations
        </button>
      ) : (
        <button
          onClick={openAddModal}
          type="button"
          className="flex justify-center items-center text-white bg-gray-400 p-2 rounded-lg text-center "
        >
          Veuillez saisir vos informations
        </button>
      )}
      {isAddModalOpen && (
        <AddProfileCopilotModal
          isOpen={isAddModalOpen}
          onRequestClose={closeAddModal}
          notification={notification}
          setNotification={setNotification}
        />
      )}
    </div>
  );
}
