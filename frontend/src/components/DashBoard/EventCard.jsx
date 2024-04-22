/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import AddEventModal from "./AddEventModal";
import ModifyEventModal from "./ModifyEventModal";

export default function EventCard() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("active");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const eventPerPage = 6;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events`)
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setEvents(filtered);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filterEvents = (event) => {
    if (statusFilter === "all") {
      return true;
    }
    return event.status === statusFilter;
  };

  const handleFilterChange = (status) => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  const nextPage = () => {
    const totalFilteredEvents = events.filter(filterEvents);
    const totalPages = Math.ceil(totalFilteredEvents.length / eventPerPage);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPages) => prevPages - 1);
    }
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openEditModal = (event) => {
    setSelectedEvent(event);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const updateEvent = (updatedEvent) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events/${updatedEvent.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify(updatedEvent),
    })
      .then((response) => response.json())
      .then((data) => {
        console.info("Success:", data);
        const updatedEvents = events.map((event) => {
          if (event.id === updatedEvent.id) {
            return updatedEvent;
          }
          return event;
        });
        setEvents(updatedEvents);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const totalFilteredEvents = events.filter(filterEvents);
  const totalPages = Math.ceil(totalFilteredEvents.length / eventPerPage);
  const currentEvents = totalFilteredEvents.slice(
    (currentPage - 1) * eventPerPage,
    currentPage * eventPerPage
  );

  return (
    <div className="flex flex-col text-center items-center font-secondary-font w-full lg:pt-10">
      <h1 className="text-center text-[30px] font-primary-font">
        Tous les événements
      </h1>
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-80 text-black rounded-lg p-2 m-5"
      />
      <div className="flex space-x-4">
        <button
          onClick={() => handleFilterChange("active")}
          disabled={statusFilter === "active"}
          className={`py-2 px-2 rounded-lg w-auto ${
            statusFilter === "active"
              ? "bg-gray-300 text-[#544b5d]"
              : "bg-[#544b5d] text-white"
          }`}
        >
          Actifs
        </button>
        <button
          onClick={() => handleFilterChange("inactive")}
          disabled={statusFilter === "inactive"}
          className={`py-2 px-2 rounded-lg w-auto ${
            statusFilter === "inactive"
              ? " bg-gray-300 text-[#544b5d]"
              : "bg-[#544b5d] text-white"
          }`}
        >
          Inactifs
        </button>
        <button
          onClick={openAddModal}
          className="bg-[#544b5d] rounded-lg hover:bg-gray-300 p-2 w-auto"
        >
          Ajouter un événement
        </button>
        {isAddModalOpen && (
          <AddEventModal
            isOpen={isAddModalOpen}
            onRequestClose={closeAddModal}
          />
        )}
      </div>
      <div className="text-white grid sm:grid-cols-2 lg:grid-cols-3 justify-center items-center font-secondary-font m-5">
        {currentEvents.map((event, index) => (
          <div
            key={index}
            className="relative text-start items-stretch border border-white bg-[#4D3E5C] cursor-pointer p-5 rounded-[20px] m-2 w-[200px] h-[200px]"
          >
            <HiOutlinePencilAlt
              className="absolute top-1 right-1 w-8 h-8"
              onClick={() => openEditModal(event)}
            />
            <h3>Ville: {event.city}</h3>
            <p>Date: {new Date(event.date).toLocaleDateString("fr-FR")}</p>
            <p>Adresse: {event.address}</p>
            <p>Quantité: {event.quantity}</p>
            <p>Status: {event.status}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between m-4 gap-5">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="py-2 px-4 bg-background-color-second text-white rounded pointer"
        >
          Précédent
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="py-2 px-8 bg-background-color-second text-white rounded pointer"
        >
          Suivant
        </button>
      </div>
      {isEditModalOpen && (
        <ModifyEventModal
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
          eventData={selectedEvent}
          onUpdateEvent={updateEvent}
        />
      )}
    </div>
  );
}
