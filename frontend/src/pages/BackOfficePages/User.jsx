import Sidebar from "../../components/DashBoard/Sidebar";
import Header from "../../components/DashBoard/HeaderBackOffice";
import MainContentUser from "../../components/DashBoard/User/MainContentUser";

export default function User() {
  return (
    <div className="w-[90%] text-white font-secondary-font bg-[#281f31] lg:h-auto rounded-[20px] my-10 ">
      <div className="block lg:hidden">
        <Header />
        <MainContentUser />
      </div>
      <div className="hidden lg:flex lg:flex-col">
        <Header />
        <div className=" lg:flex lg:flex-row lg:w-full ">
          <Sidebar />
          <MainContentUser />
        </div>
      </div>
    </div>
  );
}
