/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import UserInformationModal from "./UserInformationModal";

export default function MainContentUser() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const usersPerPage = 10;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset currentPage to 1 when a new search term is entered
  };

  const filteredUsers = users.filter((user) =>
    Object.values(user).some(
      (value) =>
        value !== null &&
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  function openModal(user) {
    setSelectedUser(user);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="flex flex-col text-center justify-center items-center">
      <h1 className="text-center text-[30px] font-primary-font">
        Tous les utilisateurs
      </h1>
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-80 text-black rounded p-2 m-10"
      />

      <div className=" py-10 px-36 overflow-x-auto">
        <div className="flex flex-col ">
          {currentUsers.map((user, index) => (
            <div
              key={user.id}
              onClick={() => openModal(user)}
              className={`px-4 py-2 flex justify-between gap-3 pointer ${index % 2 === 0 ? "bg-background-color-second" : "bg-[#5b4f67]"}`}
            >
              <p>{index + 1}</p>
              <p>{user.lastname}</p>
              <p>{user.firstname}</p>
              <p>{user.email}</p>
              <p>
                {format(new Date(user.birthday), "dd/MM/yyyy", {
                  locale: fr,
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <UserInformationModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          user={selectedUser}
        />
      </div>

      <div className="flex justify-between m-4 gap-5 ">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="py-2 px-4 bg-background-color-second text-white rounded pointer "
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentUsers.length < usersPerPage}
          className="py-2 px-8 bg-background-color-second text-white rounded pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}
