import React, { useEffect, useState } from "react";
// import { UserContext } from "../../../context/UserContext";
import EditUserModal from "./EditUserModal";

export default function UserCopilot() {
  // const { user } = useContext(UserContext);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState();
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
  }, [isEditModalOpen]);
  console.info("isEditModalOpen", isEditModalOpen);
  // useEffect(() => {}, [user, closeEditModal, setIsEditModalOpen]);
  console.info("formData", formData);

  // console.info("formData.avatar", formData.avatar);
  return (
    <div className="flex flex-col gap-4 text-white font-secondary-font items-center w-full py-5">
      {isEditModalOpen && (
        <EditUserModal
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
          userData={formData}
        />
      )}
      <h1 className=" text-2xl">Vos information Personnels :</h1>
      {formData?.map((users) => (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-center items-center gap-5">
          <div className="flex flex-col items-center gap-5">
            <p>Numéro de téléphone :</p>
            <input
              type="text"
              value={users.numero_de_telephone}
              // onChange={handleSearchChange}
              className="w-80 text-black rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>Ville :</p>
            <input
              type="text"
              value={users.ville}
              // onChange={handleSearchChange}
              className="w-80 text-black rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>Adresse postale :</p>
            <input
              type="text"
              value={users.adresse_postale}
              // onChange={handleSearchChange}
              className="w-80 text-black rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>Sexe :</p>
            <input
              type="text"
              value={users.sexe}
              // onChange={handleSearchChange}
              className="w-80 text-black rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>Taille :</p>
            <input
              type="text"
              value={users.taille}
              // onChange={handleSearchChange}
              className="w-80 text-black rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>Poids :</p>
            <input
              type="text"
              value={users.poids}
              // onChange={handleSearchChange}
              className="w-80 text-black rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>Poste :</p>
            <input
              type="text"
              value={users.poste}
              // onChange={handleSearchChange}
              className="w-80 text-black rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>Pied fort :</p>
            <input
              type="text"
              value={users.pied_fort}
              // onChange={handleSearchChange}
              className="w-80 text-black rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col items-center gap-5 h-full">
            <p>Pointure :</p>
            <input
              type="text"
              value={users.pointure}
              // onChange={handleSearchChange}
              className="w-80 text-black rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>Avatar :</p>
            {users.avatar ? (
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${users.avatar}`}
                alt="Photos de profil"
                // onChange={handleSearchChange}
                className="w-40 h-40 rounded-full"
              />
            ) : (
              <img
                src="/user.svg"
                alt="Photos de profil"
                // onChange={handleSearchChange}
                className="w-40 h-40 rounded-full"
              />
            )}
          </div>
        </div>
      ))}

      <button
        onClick={openEditModal}
        type="button"
        className="flex justify-center items-center text-white bg-gray-400 p-2 rounded-lg text-center "
      >
        Mettre à jour mes informations
      </button>
    </div>
  );
}
