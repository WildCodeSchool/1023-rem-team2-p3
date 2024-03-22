import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";
import TopMain from "../../components/TopMain/TopMain";

export default function Login() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.info(dataForm);
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
    })
      .then((res) => res.json())
      .then((res) => {
        console.info("res :>> ", res);
        if (res.status === 401 || res.status === 500) {
          setTimeout(() => {
            setErrorMessage(res.message);
            setLoading(false);
          }, 2000);
        } else {
          localStorage.setItem("token", JSON.stringify(res));
          setTimeout(() => {
            navigate("/");
            setLoading(false);
          }, 2000);
        }
      })
      .catch((err) => console.info("err :>> ", err));
  };

  return (
    <>
      <TopMain
        title="Se Connecter"
        description="Bon retour parmis nous&nbsp;!"
      />
      <div className="xl:w-[700px] mt-8 mb-4 ml-8 mr-8">
        {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <div className="relative text-white">
            <input
              type="text"
              id="email"
              name="email"
              className="input"
              onChange={handleChange}
              value={dataForm.email}
              required
              autoComplete="email"
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
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              className="input"
              onChange={handleChange}
              value={dataForm.password}
              required
              autoComplete="password"
            />
            <button
              type="button"
              className="absolute top-4 right-4 text-gray-400 focus:outline-none transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <Eye /> : <EyeOff />}
            </button>
            <label
              htmlFor="password"
              className="absolute top-4 left-4 pointer-events-none transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] text-gray-400"
            >
              Mot de passe
            </label>
          </div>
          <div className="relative text-white place-self-center">
            <button
              type="submit"
              className="py-3 px-5 text-md font-bold text-center tracking-widest text-secondary bg-primary focus:outline-none 
            bg-gradient-to-r from-[#4CACFF] via-[#A070EF] to-[#8E78DA] rounded-xl hover:bg-gradient-to-r hover:from-[#4CACFF] hover:via-[#4CACFF] hover:to-[#4CACFF] ease-in font-primary-font w-full md:w-[200px]"
            >
              {loading ? "Patientez..." : "Se Connecter"}
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col justify-center mb-[200px]">
        <p className="text-white text-center">
          <a
            className="text-primary-color"
            href="/login"
            onClick={(e) => {
              e.preventDefault();
              navigate("/forgot/password");
            }}
          >
            Mot de passe Oublié ?
          </a>
        </p>
        <p className="text-white">
          Vous n'avez pas encore compte ?&nbsp;
          <a
            className="text-primary-color"
            href="/login"
            onClick={(e) => {
              e.preventDefault();
              navigate("/signup");
            }}
          >
            Inscrivez-vous
          </a>
        </p>
      </div>
    </>
  );
}
