import React, { useState, useEffect } from "react";

export default function TotalPayments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/order`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPayments(data);
      })
      .catch((error) => console.error("Error fetching payments:", error));
  }, []);

  // Calcul du montant total à chaque changement dans le tableau des paiements
  const totalAmount = payments.reduce((acc, pay) => {
    return acc + Number(pay.amount);
  }, 0);

  // Formater le montant total pour l'affichage
  const formattedTotalAmount = `${totalAmount.toFixed(2)}€`;

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="font-primary-font text-center p-4 text-[20px]">
        <span>Total Payments</span>
      </div>
      <div className="rounded-xl bg-background-color-second text-white w-52 h-52 flex justify-center items-center flex-col">
        <span className="text-4xl font-bold">{formattedTotalAmount}</span>
      </div>
    </div>
  );
}
