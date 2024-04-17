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

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events`)
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        const updatedEvents = filtered.map((filt) => {
          const updatedEvent = { ...filt }; // Create a copy of the object
          if (new Date(updatedEvent.date) <= Date.now()) {
            updatedEvent.status = "inactive"; // Update the status property
          }
          return updatedEvent;
        });
        setEvents(updatedEvents);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterEvents = (event) => {
    if (statusFilter === "all") {
      return true;
    }
    return event.status === statusFilter;
  };

  const handleFilterChange = (status) => {
    setStatusFilter(status);
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
  return (
    <div className=" flex flex-col text-center items-center font-secondary-font mt-10">
      <h1 className="text-center text-[30px] font-primary-font">
        Tous les evenements
      </h1>
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-80 text-black rounded-lg p-2 m-10"
      />
      <div className="flex space-x-4 mt-4">
        <button
          onClick={() => handleFilterChange("active")}
          className={`py-2 px-4 rounded-lg ${
            statusFilter === "active"
              ? "bg-gray-300 text-[#544b5d]"
              : "bg-[#544b5d] text-white"
          }`}
        >
          Actifs
        </button>
        <button
          onClick={() => handleFilterChange("inactive")}
          className={`py-2 px-4 rounded-lg ${
            statusFilter === "inactive"
              ? " bg-gray-300 text-[#544b5d]"
              : "bg-[#544b5d] text-white"
          }`}
        >
          Inactifs
        </button>
        <button
          onClick={openAddModal}
          className="bg-[#544b5d] rounded-lg hover:bg-gray-300 p-2"
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
      <div className="text-white grid grid-cols-4 justify-center items-center font-secondary-font m-20">
        {events
          .filter((event) =>
            event.city.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .filter(filterEvents)
          .map((event, index) => (
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
