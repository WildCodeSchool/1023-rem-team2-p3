/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function Recapitulatif({ selectedEvent, selectedFormula }) {
  const { city, address, date } = selectedEvent;
  const { description, price, title } = selectedFormula;

  return (
    <>
      <div className="text-white border-2 border-red-600 my-8 flex flex-col p-4 items-start center">
        <h1 className="self-center">Recapitulatif</h1>
        <p>Vous avez choisi de participer a l'événement : {city}</p>
        <p>Adresse du Stade : {address}</p>
        <p>
          Date de l'événement :{" "}
          {new Date(date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p>Formule Choisie : {title}</p>
        <p>Prix : {price} €</p>
        <div className="flex flex-row gap-2">
          <p>Code Promo : </p> &nbsp;
          <input type="text" className="rounded" />
          <button className="bg-red-600 text-white rounded px-2">
            Utiliser
          </button>
        </div>
      </div>
      <form
        action="/create-checkout-session"
        method="POST"
        className="bg-red-600 text-white rounded px-2 mb-4"
      >
        <button type="submit">Passer Au Paiement</button>
      </form>
    </>
  );
}
