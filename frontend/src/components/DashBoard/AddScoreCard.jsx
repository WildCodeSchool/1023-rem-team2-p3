/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";

export default function AddScoreCard() {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [notes, setNotes] = useState([]);
  const [eventUsers, setEventUsers] = useState([]);

  // Récupérez les utilisateurs lors du chargement initial
  useEffect(() => {
    fetchUsers();
  }, []);

  // Récupérez les événements lors du chargement initial
  useEffect(() => {
    fetchEvents();
  }, []);

  // Récupérez les utilisateurs inscrits à l'événement sélectionné
  useEffect(() => {
    if (selectedEvent) {
      fetchEventUsers(selectedEvent);
    }
  }, [selectedEvent]);

  // Récupérez les notes pour l'événement sélectionné
  useEffect(() => {
    if (selectedEvent && selectedUser) {
      fetchNotes(selectedEvent, selectedUser);
    }
  }, [selectedEvent, selectedUser]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          },
        }
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/events`
      );
      const data = await response.json();
      const filtered = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setEvents(filtered);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const fetchEventUsers = async (eventId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/stockEvent?id=${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          },
        }
      );
      const data = await response.json();
      setEventUsers(data);
    } catch (error) {
      console.error("Error fetching event users:", error);
    }
  };

  const fetchNotes = async (eventId, userId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/mynote`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          },
        }
      );
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleEventChange = (e) => {
    setSelectedEvent(e.target.value);
    setSelectedUser("");
  };

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  return (
    <div className="flex flex-col text-center items-center ml-44 mt-5">
      <h2 className="text-2xl font-primary-font mb-4">Affichage des notes</h2>
      <label>
        <p className="text-lg mb-4">Selectionnez un événement:</p>
        <span className="text-white text-[20px] font-secondary-font">
          Evénement:
          <select
            className="w-80 m-8 text-background-color-second"
            onChange={handleEventChange}
            value={selectedEvent}
          >
            <option value="">Sélectionnez un événement</option>
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.city} {new Date(event.date).toLocaleDateString("fr-FR")}{" "}
                {event.address}
              </option>
            ))}
          </select>
        </span>
      </label>
      <label>
        <p className="text-lg mb-4">Selectionnez un participant:</p>
        <span className="text-white text-[20px] font-secondary-font">
          Participant:
          <select
            className="w-80 m-8 text-background-color-second"
            onChange={handleUserChange}
            value={selectedUser}
          >
            <option value="">Sélectionnez un participant</option>
            {eventUsers.map((user) => (
              <option key={user.id} value={user.id}>
                {user.lastname} {user.firstname}{" "}
                {new Date(user.birthday).toLocaleDateString("fr-FR")}{" "}
              </option>
            ))}
          </select>
        </span>
      </label>
      <div className="flex text-white justify-between mx-auto gap-1">
        <p className="text-lg mb-4">Notes attribuées:</p>
        {notes.map((note) => (
          <div key={note.id} className="flex flex-col">
            <div className="font-bold font-white">
              Note physique: {note.note_physique}
            </div>
            <div className="font-bold font-white">
              Note vitesse:{note.note_vitesse}
            </div>
            <div className="font-bold font-white">
              Note passe:{note.note_passe}
            </div>
            <div className="font-bold font-white">Note tir:{note.note_tir}</div>
            <div className="font-bold font-white">
              Note dribble:{note.note_dribble}
            </div>
            <div className="font-bold font-white">
              Note vista:{note.note_vista}
            </div>
            <div className="font-bold font-white">Note cf:{note.note_cf}</div>
            <div className="font-bold font-white">
              Note plongeon:{note.note_plongeon}
            </div>
            <div className="font-bold font-white">
              Note arrets:{note.note_arrets}
            </div>
            <div className="font-bold font-white">
              Note dega:{note.note_dega}
            </div>
            <div className="font-bold font-white">
              Note pied faible: {note.note_pied_faible}
            </div>
            <div className="font-bold font-white">Total : {note.gen}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
