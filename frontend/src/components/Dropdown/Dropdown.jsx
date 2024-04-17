import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { GiPositionMarker } from "react-icons/gi";
import { BsCalendar3 } from "react-icons/bs";

export default function Dropdown({ setSelectedEvent }) {
  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState({
    id: "",
    address: "",
    city: "",
    date: "",
  });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const dataFiltred = data.filter((eventFiltred) => {
          return eventFiltred.status === "active";
        });
        setEvents(dataFiltred);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  useEffect(() => {
    setSelectedEvent(selected.id);
  }, [selected, setSelectedEvent]);
  return (
    <>
      <div className="flex flex-col mt-20 mb-10">
        {selected.id ? (
          <div className="text-white flex flex-col items-center">
            <div className="text-white flex flex-row">
              <h2>Vous avez choisi :</h2> &nbsp;
              <p>
                {selected.address}, à {selected.city}
              </p>{" "}
              &nbsp;
              <p>
                le{" "}
                {new Date(selected.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="font-medium h-80 min-w-96">
        <div
          onClick={() => setOpen(!open)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              setOpen(!open);
            }
          }}
          className="w-full p-2 flex items-center justify-between rounded-2xl bg-[#4D3E5C] border-gray-500 border text-white"
          tabIndex={0}
          role="button"
        >
          {selected.address && selected.city
            ? `${selected.address}, ${selected.city}`
            : "Sélectionne un Evenement"}
          <BiChevronDown
            size={20}
            className={`${open && "rotate-180 transition-transform"}`}
          />
        </div>
        <ul
          className={`bg-[#4D3E5C] mt-2 overflow-y-auto ${open ? "max-h-60" : "max-h-0"}`}
        >
          {events?.map(({ id, city, address, date }) => (
            <li
              key={id}
              className="text-sm hover:bg-primary-color hover:text-white flex flex-row justify-between"
            >
              <button
                onClick={() => {
                  setOpen(false);
                  setSelected({ id, address, city, date });
                }}
                className="w-full m-2"
              >
                <div className="flex flex-row p-2 items-baseline gap-1">
                  <GiPositionMarker />
                  {address},{city}
                </div>
                <div className="flex flex-row p-2 items-baseline gap-1">
                  <BsCalendar3 />
                  {new Date(date).toLocaleDateString("fr-FR")}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

Dropdown.propTypes = {
  setSelectedEvent: PropTypes.func.isRequired,
};
