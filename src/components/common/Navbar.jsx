import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { FiMenu, FiX, FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/palm-reading", label: "Palm Analysis" },
    { path: "/tarot-reading", label: "Tarot Reading" },
    { path: "/profile", label: "Profile" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#161625] border-b border-violet-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-violet-400"
          >
             Unlock Your Destiny with AI
          </Link>

          {/* Navigation after Login */}
          {isAuthenticated && (
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? "text-violet-400"
                      : "text-white"
                  } hover:text-violet-400 transition`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {isAuthenticated && (
              <>
                <span className="text-gray-300 font-medium">
                  {user?.username}
                </span>

                <button
                  onClick={() => {
                    logout();
                    navigate("/login");
                  }}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white"
                >
                  <FiLogOut />
                </button>
              </>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && isAuthenticated && (
        <div className="md:hidden bg-[#1f1f2e] px-6 py-4">

          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-white hover:text-violet-400"
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={() => {
              logout();
              navigate("/login");
              setMobileMenuOpen(false);
            }}
            className="mt-3 text-red-400"
          >
            Logout
          </button>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
