import { NavLink } from "react-router-dom";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <div className="">
      <nav className="mx-auto w-11/12 sm:grid lg:flex justify-between items-center py-4 px-5">
        <div>
          <Logo></Logo>
        </div>
        <div>
          <ul className="text-xl font-semibold flex justify-around gap-6">
            {/* home */}
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                }
              >
                Home
              </NavLink>
            </li>
            {/* donation */}
            <li>
              <NavLink
                to="/Donation"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                }
              >
                Donation
              </NavLink>
            </li>
            {/* Statistics */}
            <li>
              <NavLink
                to="/Statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;