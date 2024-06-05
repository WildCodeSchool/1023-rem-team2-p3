/* eslint-disable no-shadow */
import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";

export default function CopilotQR() {
  const [qrData, setQRData] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/stockEvent/user`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const user = data[0];
          const qrData = `Participant : ${user.firstname} ${user.lastname}, Informations de l'événement: Ville: ${user.city}, Date: ${new Date(user.date).toLocaleDateString("fr-FR")}, Adresse: ${user.address}`;
          setQRData(qrData);
        }
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <div className="flex flex-col  items-center justify-center">
      <h2 className="text-2xl font-primary-font">Mon ticket</h2>
      <p>Presentez-le le jour de l'événement</p>
      <QRCode
        value={qrData}
        className="font-secondary-font text-xl my-5 border-2 border-white rounded-lg p-2"
      />
    </div>
  );
}
