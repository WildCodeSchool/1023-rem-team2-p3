import React from "react";

export default function NotFound() {
  return (
    <div className="text-white">
      <h1 className=" text-9xl">404</h1>
      <h2 className=" text-2xl">Page not found</h2>
      <h3>Ooooups, quelque chose s'est mal passé.</h3>
      <p>
        La page que vous essayez d'ouvrir n'existe pas. Vous avez peut-être mal
        saisi l'adresse, ou la page a été déplacée vers une autre URL. Si vous
        pensez qu'il s'agit d'une erreur, veuillez contacter notre equipe via le
        formulaire de contact.{" "}
      </p>
    </div>
  );
}
