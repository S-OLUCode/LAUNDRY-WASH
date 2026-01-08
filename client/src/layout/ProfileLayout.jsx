import { Outlet, NavLink } from "react-router";
import { profileLinks } from "@/utils/constant";
import Logout from "@/components/Logout";
import UploadAvatar from "@/pages/profile/UploadAvatar";
import Footer from "@/components/Footer";

export default function ProfileLayout() {
  return (
    <>
      <UploadAvatar />
      <div className="container mx-auto px-4 md:grid grid-cols-12 gap-4">
        <div className="col-span-3 flex flex-col gap-2 mt-10">
          {profileLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) =>
                `transition-all duration-300 ease-in p-3 flex items-center gap-2 rounded-lg ${
                  isActive ? "bg-wash-purple" : ""
                }`
              }
              end
            >
              <link.icon />
              {link.label}
            </NavLink>
          ))}
          <Logout />
        </div>
        <div className="col-span-9 mt-10 md:mt-10">
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
