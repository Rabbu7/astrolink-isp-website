import Lottie from "lottie-react";
import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import technicianLottieData from "../../assets/lottie/technicianlogin.json";
import Swal from "sweetalert2";

const TechnicianLogin = () => {
  const { signInUser } = useContext(AuthContext); // Access the signInUser function from AuthContext
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();

    const email = event.target.email.value; // Get the email from the form
    const password = event.target.password.value; // Get the password from the form
    console.log("sign in", email, password);

    signInUser(email, password)
      .then((result) => {
        localStorage.setItem("technician-email", email);
        console.log("signed in fb", result.user);

        const lastSignInTime = result?.user?.metadata?.lastSignInTime; // Get the last sign-in time of the user
        const loginInfo = { email, lastSignInTime }; // Create a login info object with email and last sign-in time

        fetch(`http://localhost:5000/users`, {
          method: "PATCH", // Use PATCH method to update the user info
          headers: {
            "content-type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify(loginInfo), // Convert the loginInfo object to a JSON string
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("signed in info updated to db", data); // Handle the response from the server
            Swal.fire({
              title: "Awesome!",
              text: "Ready for new assignment?!!",
              imageUrl: "https://unsplash.it/400/200",
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: "Custom image",
            });
          });

        navigate("/technician");
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
          <h2 className="font-bold text-2xl text-[#e1ddec] text-center">
            Technician Login
          </h2>
          <p className="text-sm mt-7 text-[#a89bd0] text-opacity-70 text-center">
            For officials only
          </p>

          {/* Data entry group */}
          <form
            onSubmit={handleSignIn}
            className="flex flex-col gap-4"
            action=""
          >
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              placeholder="Your email"
            />
            <div className="relative">
              <input
                className="p-2 mt-8 rounded-xl border w-full"
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

            <button className="bg-gradient-to-r from-[#5234b3] to-[#03a9f4] rounded-xl text-white py-2 hover:bg-gradient-to-r hover:from-[#8138f6ad] hover:to-[#03a8f4ab]">
              Login
            </button>
          </form>

          <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
          </div>

          <p className="mt-5 text-xs border-b border-gray-400 py-4">
            <a href="" className="text-gray-200 hover:underline">
              Forgot Your password?
            </a>
          </p>
        </div>

        {/* Image */}
        <div className="sm:block hidden  w-1/2 ">
          {/* <img
                 className="sm:block hidden rounded-2xl h-full"
                 src="/src/assets/feature-5.webp"
                 alt="img-login"
               /> */}
          <Lottie animationData={technicianLottieData}></Lottie>
        </div>
      </div>
    </section>
  );
};

export default TechnicianLogin;
