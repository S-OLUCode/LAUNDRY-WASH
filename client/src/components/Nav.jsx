import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import { useAuth } from "@/hooks/useAuth";
import { ChevronDown, LogOut, User } from "lucide-react";
import UserAvatar from "./UserAvatar";
import Drawer from "./Drawer";

export default function Nav() {
  const { user, handleLogout } = useAuth();

  return (
    <>
      <div className=" bg-grayish-black py-4 flex justify-between">
        <div className=" container px-2 md:px-8 flex mx-auto  items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-6 text-white text-xl">
            <Link className="">Services</Link>
            <Link className="">About us</Link>
            <Link className="">Contact Us</Link>
            {user ? (
              <NavLink
                to="/book-laundry"
                className={({ isActive }) =>
                  isActive
                    ? "text-wash-purple font-semibold "
                    : "text-wash-white"
                }
              >
                Book Laundry
              </NavLink>
            ) : null}
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <UserAvatar />
            ) : (
              <>
                <div className="hidden md:flex gap-4 items-center text-xs">
                  <Link
                    to="/signup"
                    className="text-white bg-wash-purple px-4 py-2 rounded-full"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className="text-wash-bg-wash-purple border border-wash-bg-wash-purple px-4 py-2 rounded-full"
                  >
                    Log In
                  </Link>
                </div>
              </>
            )}
            <div className="md:hidden">
              <Drawer handleLogout={handleLogout} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
