import React, { useState } from "react";

function LoginSignup() {
  const [currentView, setCurrentView] = useState("login");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {currentView === "login" ? (
        // **Login Form**
        <div className="text-center border border-black w-80 p-8 mt-2 bg-white shadow-md">
          <form onSubmit={handleLoginSubmit}>
            <h1 className="text-4xl font-bold text-center mb-6">Login</h1>
            <div className="relative my-4">
              <label
                htmlFor="login-email"
                className="text-lg font-bold block mb-1"
              >
                Email:
              </label>
              <input
                id="login-email"
                type="email"
                placeholder="Email"
                required
                className="border border-black p-2 w-full"
              />
            </div>
            <div className="relative my-4">
              <label
                htmlFor="login-password"
                className="text-lg font-bold block mb-1"
              >
                Password:
              </label>
              <input
                id="login-password"
                type="password"
                placeholder="Password"
                required
                className="border border-black p-2 w-full"
              />
            </div>
            <a
              href="#"
              className="text-gray-900 mt-2 mb-2 flex hover:underline font-medium"
            >
              Forgot Password?
            </a>
            <div>
              <button
                type="submit"
                className="m-2 p-2 w-full rounded-md border border-black bg-black text-white"
              >
                Login
              </button>
            </div>
            <div className="text-center text-base mt-3">
              <p>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setCurrentView("register")}
                  className="text-blue-500 hover:underline font-medium"
                >
                  Register
                </button>
              </p>
            </div>
          </form>
        </div>
      ) : (
        // **Registration Form**
        <div className="text-center border border-black w-80 p-8 mt-2 bg-white shadow-md">
          <form onSubmit={handleRegisterSubmit}>
            <h1 className="text-4xl font-bold text-center mb-6">Register</h1>
            <div className="relative my-4">
              <label
                htmlFor="register-name"
                className="text-lg font-bold block mb-1"
              >
                Name:
              </label>
              <input
                id="register-name"
                type="text"
                placeholder="Name"
                required
                className="border border-black p-2 w-full"
              />
            </div>
            <div className="relative my-4">
              <label
                htmlFor="register-email"
                className="text-lg font-bold block mb-1"
              >
                Email:
              </label>
              <input
                id="register-email"
                type="email"
                placeholder="Email"
                required
                className="border border-black p-2 w-full"
              />
            </div>
            <div className="relative my-4">
              <label
                htmlFor="register-password"
                className="text-lg font-bold block mb-1"
              >
                Password:
              </label>
              <input
                id="register-password"
                type="password"
                placeholder="Password"
                required
                className="border border-black p-2 w-full"
              />
            </div>
            <div className="relative my-4">
              <label
                htmlFor="register-confirm-password"
                className="text-lg font-bold block mb-1"
              >
                Confirm Password:
              </label>
              <input
                id="register-confirm-password"
                type="password"
                placeholder="Confirm Password"
                required
                className="border border-black p-2 w-full"
              />
            </div>
            <div className="mt-2 mb-2 text-left">
              <label className="flex items-center">
                <input type="checkbox" required className="mr-2" />I agree to
                the terms & conditions
              </label>
            </div>
            <p className="font-bold text-xl mt-4">Register As</p>
            <div className="flex justify-center">
              <button
                type="button"
                className="border border-black m-2 p-2 h-10 w-48 rounded bg-black text-white"
              >
                Customer
              </button>
              <button
                type="button"
                className="border border-black m-2 p-2 h-10 w-48 rounded bg-black text-white"
              >
                Designer
              </button>
            </div>
            <div className="text-center text-base mt-3">
              <p>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setCurrentView("login")}
                  className="text-blue-500 hover:underline font-medium"
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginSignup;
