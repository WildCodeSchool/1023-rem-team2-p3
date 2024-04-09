import { useState } from "react";
import AddNotesModal from "./AddNotesModal";

export default function AddNotes() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  return (
    <div>
      <div className="flex flex-col justify-center">
        <h1 className="text-center text-[30px] font-primary-font">
          Ajouter les notes aux participants
        </h1>
        <p className="font-secondary-font text-[20px] ">
          Cliquez sur "NEW NOTE" pour attribuer les notes aux participants
        </p>
        <hr className="mb-4" />
      </div>
      <div>
        <button
          type="submit"
          onClick={openAddModal}
          className="bg-[#544b5d] hover:bg-gray-300 w-[120px] h-[30px] text-base rounded-lg text-white"
        >
          NEW NOTE
        </button>
        <AddNotesModal
          isOpen={isAddModalOpen}
          onRequestClose={() => setIsAddModalOpen(false)}
        />
      </div>
    </div>
  );
}
