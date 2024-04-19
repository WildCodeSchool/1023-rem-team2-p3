import Sidebar from "../../components/DashBoard/Sidebar";
import Header from "../../components/DashBoard/Header";
import MainContentUser from "../../components/DashBoard/User/MainContentUser";

export default function User() {
  return (
    <div className=" text-white font-secondary-font bg-[#281f31] w-[81rem] lg:h-auto rounded-[20px] my-10 ">
      <Header />
      <div className="flex">
        <Sidebar />
        <MainContentUser />
      </div>
    </div>
  );
}
