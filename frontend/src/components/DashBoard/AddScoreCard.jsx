/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";

export default function AddScoreCard() {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [userNotes, setUserNotes] = useState([]);
  const [eventUsers, setEventUsers] = useState([]);

  // Récupérez les utilisateurs lors du chargement initial
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // Récupérez les événements lors du chargement initial
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

  // Récupérez les utilisateurs inscrits à l'événement sélectionné
  useEffect(() => {
    // if (selectedEvent) {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/stockEvent`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const filteredUsers = data.filter(
          (user) => user.event_id === parseInt(selectedEvent, 10)
        );
        setEventUsers(filteredUsers);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // }
  }, [selectedEvent]);

  // Récupérez les notes attribuées à l'utilisateur sélectionné
  useEffect(() => {
    if (selectedUser) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/note`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const filteredNotes = data.filter(
            (note) => note.user_id === parseInt(selectedUser, 10)
          );
          setUserNotes(filteredNotes);
          console.info("selectedUser:", selectedUser);
          console.info("filteredNotes:", filteredNotes);
          console.info("data:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [selectedUser]);

  const handleEventChange = (e) => {
    setSelectedEvent(e.target.value);
    setSelectedUser("");
    // Videz eventUsers lorsque l'événement est changé
    setEventUsers([]);
  };

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  return (
    <div className="flex flex-col text-center items-center lg:pt-10 w-full">
      <h2 className="text-2xl font-primary-font mb-4">Affichage des notes</h2>
      <label>
        <p className="text-lg mb-4">Selectionnez un événement:</p>
        <span className="text-white text-[20px] font-secondary-font">
          Evénement:
          <select
            className="w-80 m-8 text-background-color-second"
            onChange={handleEventChange}
          >
            <option value="">Sélectionnez un événement</option>
            {events.map((event) => (
              <option className="text-xs" key={event.id} value={event.id}>
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
              <option className="text-xs" key={user.id} value={user.user_id}>
                {user.lastname} {user.firstname} {user.email}
              </option>
            ))}
          </select>
        </span>
      </label>
      <div className="flex text-white justify-between mx-auto gap-1">
        <div className="text-white mx-auto">
          <p className="text-lg mb-4">Notes attribuées:</p>
          <table className=" hidden lg:block border-collapse border border-white mx-auto">
            <thead>
              <tr>
                {userNotes.length > 0 &&
                  Object.keys(userNotes[0]).map(
                    (key) =>
                      key !== "id" &&
                      key !== "created_at" &&
                      key !== "updated_at" &&
                      key !== "user_id" && (
                        <th
                          key={key}
                          className="border border-white font-bold text-[8px] p-2"
                        >
                          {key.replace("_", " ").toUpperCase()}
                        </th>
                      )
                  )}
              </tr>
            </thead>
            <tbody>
              {userNotes.map((note) => (
                <tr key={note.id}>
                  {Object.entries(note).map(
                    ([key, value]) =>
                      key !== "id" &&
                      key !== "created_at" &&
                      key !== "updated_at" &&
                      key !== "user_id" && (
                        <td key={key} className="border border-white p-2">
                          {value}
                        </td>
                      )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <div className=" lg:hidden flex flex-col mx-auto py-4">
            {userNotes.map((note) =>
              Object.entries(note).map(
                ([name, value]) =>
                  name !== "id" &&
                  name !== "created_at" &&
                  name !== "updated_at" &&
                  name !== "user_id" &&
                  value && (
                    <div className="flex flex-col">
                      <p className="border border-white  p-2">{name}</p>
                      <p className="border border-white  p-2">{value}</p>
                    </div>
                  )
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
