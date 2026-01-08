import LogoTwo from "@/components/LogoTwo";
import { Outlet } from "react-router";

export default function ForgetLayout() {
  return (
    <>
      <div className=""    style={{ backgroundImage: "url('/LaundryMachine.svg')" }}>
        <div className="mx-auto flex justify-center pt-6">
          <LogoTwo />
        </div>
        <Outlet />
      </div>
    </>
  );
}
