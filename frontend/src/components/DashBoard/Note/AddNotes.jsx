import { useState } from "react";
import AddNotesModal from "./AddNotesModal";

export default function AddNotes() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  return (
    <div className="flex  flex-col text-center items-center lg:pt-10 w-full">
      <h1 className="text-center text-[30px] font-primary-font">
        Ajouter les notes aux participants
      </h1>
      <p className="font-secondary-font text-[20px]  p-4">
        Cliquez sur "Ajouter une note" pour attribuer les notes aux participants
      </p>
      <div>
        <button
          type="submit"
          onClick={openAddModal}
          className="bg-[#544b5d] hover:bg-gray-300 w-[150px] h-[30px] text-base rounded-lg text-white"
        >
          Ajouter une note
        </button>
        <AddNotesModal
          isOpen={isAddModalOpen}
          onRequestClose={() => {
            setIsAddModalOpen(false);
          }}
        />
      </div>
    </div>
  );
}
