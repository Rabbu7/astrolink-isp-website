import Lottie from "lottie-react";
import React, { useContext } from "react";
import RegisterLottieData from "../assets/lottie/satelite2.json";
import AuthContext from "../context/AuthContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext); // Access the createUser function from AuthContext
  const navigate = useNavigate();

  // Function to handle the sign-up form submission
  const handleRegister = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const name = event.target.name.value; // Get the name from the form
    const email = event.target.email.value; // Get the email from the form
    const password = event.target.password.value; // Get the password from the form

    console.log("sign up", name, email, password);

    // Call the createUser function from AuthContext to create a new user
    // It returns a promise, so we can handle the result or error accordingly.
    createUser(email, password)
      .then((result) => {
        // Signed up
        console.log("result created in fb", result.user);

        const createdAt = result?.user?.metadata?.creationTime; // Get the creation time of the user
        const newUser = { name, email, role:"customer", createdAt }; // Create a new user object with name and email

        // Here you can handle the user data, e.g., save it to the database
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          }, // Set the content type to JSON
          body: JSON.stringify(newUser), // Convert the newUser object to a JSON string
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("user created to db", data);
          });

        navigate("/customer");
      })
      .then((error) => {
        console.log(error.message);
      });
  };
  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('src/assets/login bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Login container */}
      <div className="bg-[#7ad3f62a] flex rounded-2xl shadow-lg max-w-3xl p-4">
        {/* Form */}

        <div className="sm:w-1/2 px-16">
          <div className="w-18">
            <Lottie animationData={RegisterLottieData}></Lottie>
          </div>
          <h2 className="font-bold text-2xl text-[#d3cee7] text-center mb-12">
            Sign Up Now !!!
          </h2>

          {/* Data entry group */}
          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-1"
            action=""
          >
            <label className="label">Name</label>
            <input
              className="p-2 mb-7 rounded-xl border"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <label className="label">Email</label>
            <input
              className="p-2 mb-7 rounded-xl border"
              type="email"
              name="email"
              placeholder="Your email"
            />
            <div className="relative">
              <label className="label">Password</label>
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Your password"
              />
              {/* SVG Eye */}
              <svg
                className="bi bi-eye-fill absolute top-1/2 right-4 translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </div>

            <button className="btn btn-neutral mt-8 bg-gradient-to-r from-[#5234b3] to-[#03a9f4] rounded-xl text-white py-2 hover:bg-gradient-to-r hover:from-[#8138f6ad] hover:to-[#03a8f4ab] border-none">
              Sign Up
            </button>
          </form>

          <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
          </div>
          <div className="mt-3 text-xs flex justify-between items-center">
            <p>
              <a href="#" className="text-gray-200 hover:underline">
                Already have an account?
              </a>
            </p>
            <Link
              to="/login"
              className="py-2 px-5 text-white bg-blue-500 border rounded-xl hover:bg-blue-700 border-none"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="sm:block hidden w-1/2">
          <img
            className="sm:block hidden rounded-2xl h-full"
            src="/src/assets/feature-5.webp"
            alt="img-login"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
