import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import EditUserModal from "./EditUserModal";

export default function UserCopilot() {
  const { user } = useContext(UserContext);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const openEditModal = () => {
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };
  // useEffect(() => {}, [user, closeEditModal, setIsEditModalOpen]);
  //   console.info("user", user);
  return (
    <div className="flex flex-col gap-4 text-white font-secondary-font items-center w-full py-5">
      <h1 className=" text-2xl">Vos information Personnels :</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-center items-center gap-5">
        <div className="flex flex-col items-center gap-5">
          <p>Numéro de téléphone :</p>
          <input
            type="text"
            value={user.data.numero_de_telephone}
            // onChange={handleSearchChange}
            className="w-80 text-black rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-center gap-5">
          <p>Ville :</p>
          <input
            type="text"
            value={user.data.ville}
            // onChange={handleSearchChange}
            className="w-80 text-black rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-center gap-5">
          <p>Adresse postale :</p>
          <input
            type="text"
            value={user.data.adresse_postale}
            // onChange={handleSearchChange}
            className="w-80 text-black rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-center gap-5">
          <p>Sexe :</p>
          <input
            type="text"
            value={user.data.sexe}
            // onChange={handleSearchChange}
            className="w-80 text-black rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-center gap-5">
          <p>Taille :</p>
          <input
            type="text"
            value={user.data.taille}
            // onChange={handleSearchChange}
            className="w-80 text-black rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-center gap-5">
          <p>Poids :</p>
          <input
            type="text"
            value={user.data.poids}
            // onChange={handleSearchChange}
            className="w-80 text-black rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-center gap-5">
          <p>Poste :</p>
          <input
            type="text"
            value={user.data.poste}
            // onChange={handleSearchChange}
            className="w-80 text-black rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-center gap-5">
          <p>Pied fort :</p>
          <input
            type="text"
            value={user.data.pied_fort}
            // onChange={handleSearchChange}
            className="w-80 text-black rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-center gap-5 h-full">
          <p>Pointure :</p>
          <input
            type="text"
            value={user.data.pointure}
            // onChange={handleSearchChange}
            className="w-80 text-black rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-center gap-5">
          <p>Avatar :</p>
          {user.data.avatar ? (
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/${user.data.avatar}`}
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
      <button
        onClick={openEditModal}
        type="button"
        className="flex justify-center items-center text-white bg-gray-400 p-2 rounded-lg text-center "
      >
        Mettre à jour mes informations
      </button>
      {isEditModalOpen && (
        <EditUserModal
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
          userData={user}
        />
      )}
    </div>
  );
}
