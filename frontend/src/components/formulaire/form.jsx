/* eslint-disable no-alert */
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const [loading, setLoading] = useState(false);
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
        },
        (error) => {
          setLoading(false);
          console.error("error", error);
          alert("Une erreur s'est produite, veuillez réessayer");
        }
      );
  };
  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
          className="py-3 px-5 text-md font-bold text-center tracking-widest text-secondary bg-primary sm:w-fit focus:outline-none 
            bg-gradient-to-r from-[#4CACFF] via-[#A070EF] to-[#8E78DA] rounded-xl hover:bg-gradient-to-r hover:from-[#4CACFF] hover:via-[#4CACFF] hover:to-[#4CACFF]  ease-in"
        >
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </div>
    </form>
  );
}
