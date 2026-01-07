import LogoTwo from "@/components/LogoTwo";
import { Outlet } from "react-router";

export default function ForgetLayout() {
  return (
    <>
      <div className="auth-background mx-auto flex justify-center pt-6">
        <LogoTwo />
      </div>
      <Outlet />
    </>
  );
}
