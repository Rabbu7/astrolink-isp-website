import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileMenuOpen]);

  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: "url('/src/assets/heropage-2.webp')",
        }}
      >
        <header className="flex items-center justify-between py-5 px-4 relative z-20">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <img
              src="/src/assets/astrolink.png"
              alt=""
              className="hidden lg:block w-40 h-16"
            />
            <img
              src="/src/assets/space-x logo.png"
              alt="Space X logo"
              className="block lg:hidden w-28 h-8"
            />
          </div>

          <div className="hidden xl:flex justify-between space-x-96">
            <nav className="hidden xl:flex space-x-8">
              <a
                className="border-b-2 border-white font-semibold uppercase"
                href="#"
              >
                residential
              </a>
              <a className="font-semibold uppercase" href="#">
                business
              </a>
            </nav>
            <div className="hidden xl:flex space-x-4">
              {/* <a
                href="/register"
                className="rounded-full px-6 py-2 bg-white text-black font-semibold uppercase transition-colors duration-200 hover:bg-gray-200"
              >
                Register
              </a> */}

              <Link
                to="/register"
                className="rounded-full px-6 py-2 bg-white text-black font-semibold uppercase transition-colors duration-200 hover:bg-gray-200"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="rounded-full px-6 py-2 bg-transparent border border-white text-white font-semibold uppercase transition-colors duration-200 hover:bg-white hover:text-black"
              >
                Sign In
              </Link>
            </div>
          </div>

          <button
            className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <span className="block w-7 h-1 bg-white rounded transition-all duration-300 mb-1"></span>
            <span className="block w-7 h-1 bg-white rounded transition-all duration-300 mb-1"></span>
            <span className="block w-7 h-1 bg-white rounded transition-all duration-300"></span>
          </button>

          <div
            className={`fixed top-0 right-0 h-full bg-black bg-opacity-95 z-50 flex flex-col px-8 py-8 transform ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 w-full sm:w-2/3 md:w-1/2 xl:w-1/4`}
            style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}
          >
            <div className="flex justify-between items-center mb-8">
              <img
                src="/src/assets/astrolink.png"
                alt=""
                className="w-32 h-16"
              />
              <button
                className="text-white text-3xl font-bold"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                &times;
              </button>
            </div>
            <nav className="flex flex-col space-y-6 text-lg font-semibold uppercase">
              <Link
                to="/register"
                className="rounded-full text-center px-6 py-2 bg-white text-black font-semibold uppercase transition-colors duration-200 hover:bg-gray-200"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="rounded-full text-center px-6 py-2 bg-transparent border border-white text-white font-semibold uppercase transition-colors duration-200 hover:bg-white hover:text-black"
              >
                Sign In
              </Link>
              <a href="#" className="border-b-2 border-white">
                residential
              </a>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="">
                  Admin Panel
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-2xl z-1 w-52 p-2 shadow-sm"
                >
                  <li >
                    <Link to="/managerlogin">Manager Login</Link>
                  </li>
                  <li>
                    <Link to="/technicianlogin">Technician Login</Link>
                  </li>
                </ul>
              </div>
              <a href="#">business</a>
              <a href="#">roam</a>
              <a href="#">mobility</a>
              <a href="#">technical</a>
              <a href="#">support</a>
              <a href="#">map</a>
              <a href="#">resources</a>
              <a href="#">specifications</a>
              <a href="#">us</a>
            </nav>
          </div>

          <div
            className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-xs ${
              mobileMenuOpen ? "" : "hidden"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        </header>

        <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 w-full flex justify-center pointer-events-none z-10">
          <div className="flex flex-col items-center space-y-4 w-full max-w-lg pointer-events-auto bg-transparent">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4">
                order Astrolink
              </h1>
              <p className="text-lg font-light max-w-xl mx-auto">
                Astrolink provides high-speed, low-latency broadband internet
                across the globe. Within each coverage area, orders are
                fulfilled on a first-come, first-served basis.
              </p>
            </div>
            {/* searchbox div */}
            <div className="flex w-full flex-wrap gap-4">
              <input
                type="text"
                className="flex-1 rounded border-2 border-white/60 bg-white/15 px-4 py-3 text-white placeholder:text-white/60"
                placeholder="SERVICE ADDRESS"
              />
              <input
                type="button"
                className="rounded bg-white text-black font-bold uppercase px-6 py-3"
                value="order now"
              />
            </div>
            <a
              href="#"
              className="flex items-center gap-2 text-white/80 hover:underline mt-4"
            >
              view availability map
              <img
                src="/src/assets/right-arrow.svg"
                className="w-4 h-4"
                alt=""
              />
            </a>
            <p className="text-xs text-gray-400 mt-2">
              By clicking order now, you agree to our
              <a href="#" className="underline text-white">
                Privacy Policy
              </a>
            </p>
            <img
              src="/src/assets/down-arrow.svg"
              alt="Down arrow"
              className="w-8 h-8 animate-bounce-custom mt-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
