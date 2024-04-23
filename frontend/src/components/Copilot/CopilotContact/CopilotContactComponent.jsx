/* eslint-disable no-alert */
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function CopilotContactComponent() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); // État pour suivre le succès de l'envoi du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_z81tqku",
        "template_09fag4o",
        {
          from_name: formData.name,
          to_name: "TheLab Team",
          from_email: formData.email,
          to_email: "thelabfr.contact@gmail.com",
          contact: formData.contact,
          subject: formData.subject,
          message: formData.message,
        },
        "oc3eKWIanydO423xS"
      )
      .then(
        () => {
          setLoading(false);
          setFormData({
            name: "",
            email: "",
            contact: "",
            subject: "",
            message: "",
          });
          setSuccess(true); // Mettre à jour l'état de succès
        },
        (error) => {
          setLoading(false);
          console.error("error", error);
          alert("Une erreur s'est produite, veuillez réessayer");
        }
      );
  };
  return (
    <div className="flex  flex-col text-center items-center lg:pt-10 w-full">
      <h1 className="text-center text-[30px] font-primary-font my-14">
        Contactez-nous
      </h1>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        onSubmit={handleSubmit}
      >
        <div className="relative text-white">
          <input
            type="text"
            id="name"
            name="name"
            className="input"
            required
            value={formData.name}
            onChange={handleChange}
            autoComplete="given-name"
          />
          <label
            htmlFor="name"
            className="absolute top-4 left-4 pointer-events-none transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] text-gray-400"
          >
            Nom
          </label>
        </div>
        <div className="relative text-white">
          <input
            type="email"
            id="email"
            name="email"
            className="input"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="your-email"
          />
          <label
            htmlFor="email"
            className="absolute top-4 left-4 pointer-events-none transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] text-gray-400"
          >
            Email
          </label>
        </div>
        <div className="relative text-white">
          <input
            type="tel"
            id="contact"
            name="contact"
            className="input"
            required
            value={formData.contact}
            onChange={handleChange}
            autoComplete="contact"
            pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
            title="Entrez un numéro de téléphone correct"
          />
          <label
            htmlFor="contact"
            className="absolute top-4 left-4 pointer-events-none transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1) ] text-gray-400"
          >
            Téléphone
          </label>
        </div>
        <div className="relative text-white">
          <input
            type="text"
            id="subject"
            name="subject"
            className="input"
            required
            value={formData.subject}
            onChange={handleChange}
            autoComplete="subject"
          />
          <label
            htmlFor="subject"
            className="absolute top-4 left-4 pointer-events-none transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] text-gray-400"
          >
            Sujet
          </label>
        </div>
        <div className="relative sm:col-span-2 text-white">
          <textarea
            id="message"
            name="message"
            className="input resize-none"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            autoComplete="off"
          />
          <label
            htmlFor="message"
            className="absolute top-4 left-4 pointer-events-none transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] text-gray-400"
          >
            Votre message
          </label>
        </div>
        <div className=" relative flex flex-row  items-center w-[118px] text-white">
          <button
            type="submit"
            className="bg-[#544b5d] hover:bg-gray-300 w-[150px] h-[30px] text-base rounded-lg text-white"
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>
        </div>
      </form>
      {success && (
        <p className="text-violet-500 font-primary-font text-2xl m-4">
          Votre message a été envoyé avec succès !
        </p>
      )}
    </div>
  );
}
