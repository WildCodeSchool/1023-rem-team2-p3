import React from "react";
import Header from "../../components/DashBoard/Header";
// import Sidebar from "../../components/DashBoard/Sidebar";

export default function User() {
  return (
    <div className=" text-white font-secondary-font bg-[#281f31] lg:w-[81rem] lg:h-auto rounded-[20px] my-10">
      <Header />
      <div className="flex flex-col">
        <h1 className="text-center text-[30px] font-primary-font">Users</h1>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className=" inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden ">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium">
                  <tr>
                    <th className="px-4 py-2">lastname</th>
                    <th className="px-4 py-2">firstname</th>
                    <th className="px-4 py-2">email</th>
                    <th className="px-4 py-2">sexe</th>
                    <th className="px-4 py-2">numero_de_telephone</th>
                    <th className="px-4 py-2">adresse_postale</th>
                    <th className="px-4 py-2">ville</th>
                    <th className="px-4 py-2">is_admin</th>
                    <th className="px-4 py-2">birthday</th>
                    <th className="px-4 py-2">status</th>
                    <th className="px-4 py-2">avatar</th>
                    <th className="px-4 py-2">taille</th>
                    <th className="px-4 py-2">poids</th>
                    <th className="px-4 py-2">pointure</th>
                    <th className="px-4 py-2">pied_fort</th>
                    <th className="px-4 py-2">poste</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">John Doe</td>
                    <td className="border px-4 py-2">John Doe</td>
                    <td className="border px-4 py-2">John Doe</td>
                    <td className="border px-4 py-2">John Doe</td>
                    <td className="border px-4 py-2">John Doe</td>
                    <td className="border px-4 py-2">John Doe</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">John Doe</td>
                    <td className="border px-4 py-2">John Doe</td>
                    <td className="border px-4 py-2">John Doe</td>
                    <td className="border px-4 py-2">John Doe</td>
                    <td className="border px-4 py-2">John Doe</td>
                    <td className="border px-4 py-2">John Doe</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <Sidebar /> */}
    </div>
  );
}
