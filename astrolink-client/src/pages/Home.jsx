import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* header */}
      <Header></Header>

      {/* FEATURES SECTION */}
      <section className="py-10">
        {/* FEATURE 1 */}
        <div className="flex flex-col xl:flex-row items-center max-w-6xl mx-auto mb-12">
          <div className="w-full xl:w-1/2">
            <img
              src="/src/assets/feature-1.webp"
              alt=""
              className="rounded-lg aspect-video"
            />
          </div>
          <div className="w-full xl:w-1/2 flex flex-col justify-center px-6 py-8">
            <h1 className="text-2xl md:text-3xl font-bold uppercase mb-6">
              STREAMING, VIDEO CALLS, ONLINE GAMING & MORE
            </h1>
            <p className="font-light mb-4">
              With Astrolink, users can engage in activities that historically
              have not been possible with satellite internet.
            </p>
            <p className="font-light mb-8">
              Astrolink’s high-speed, low-latency service is made possible via
              the world’s largest constellation of highly advanced satellites
              operating in a low orbit around the Earth.
            </p>
            <button className="w-full rounded border-2 border-white font-semibold px-4 py-3 uppercase hover:bg-white hover:text-black transition">
              learn more
            </button>
          </div>
        </div>
        {/* FEATURE 2 */}
        <div className="flex flex-col xl:flex-row items-center max-w-6xl mx-auto mb-12">
          <div className="w-full xl:w-1/2 xl:order-2">
            <img
              src="/src/assets/feature-2.jpg"
              alt=""
              className="rounded-lg aspect-video"
            />
          </div>
          <div className="w-full xl:w-1/2 flex flex-col justify-center px-6 py-8">
            <h1 className="text-2xl md:text-3xl font-bold uppercase mb-6">
              EASY SELF-INSTALL
            </h1>
            <p className="font-light mb-4">
              Your Astrolink Kit arrives with everything you need to get online
              in minutes including your Astrolink, WiFi router, cables and base.
            </p>
            <p className="font-light mb-8">
              Click{" "}
              <a href="#" className="underline">
                here
              </a>{" "}
              to view Starlink technical specifications.
            </p>
            <button className="w-full rounded border-2 border-white font-semibold px-4 py-3 uppercase hover:bg-white hover:text-black transition">
              learn more
            </button>
          </div>
        </div>
        {/* FEATURE 3 */}
        <div className="flex flex-col xl:flex-row items-center max-w-6xl mx-auto mb-12">
          <div className="w-full xl:w-1/2">
            <img
              src="/src/assets/feature-3.jpg"
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="w-full xl:w-1/2 flex flex-col justify-center px-6 py-8">
            <h1 className="text-2xl md:text-3xl font-bold uppercase mb-6">
              NO CONTRACTS, 30-DAY TRIAL
            </h1>
            <p className="font-light mb-2">
              Long term contracts prevent both parties from making sensible
              changes when necessary.
            </p>
            <p className="font-light mb-2">
              With Astrolink, it’s a fair deal both ways. Starlink can adjust
              terms and pricing as needed, and customers can cancel at any time,
              for any reason.
            </p>
            <p className="font-light mb-8">
              Try any Astrolink Service for 30 days and, if not satisfied,
              return the hardware for a full refund.
            </p>
            <button className="w-full rounded border-2 border-white font-semibold px-4 py-3 uppercase hover:bg-white hover:text-black transition">
              learn more
            </button>
          </div>
        </div>
        {/* FEATURE 4 (Background Image) */}
        <div
          className="flex items-center justify-center min-h-[60vh] bg-cover bg-center mb-12"
          style={{ backgroundImage: "url('src/assets/feature-4.webp')" }}
        >
          <div className="max-w-2xl mx-auto bg-black/70 p-8 rounded-lg">
            <h1 className="text-2xl md:text-3xl font-bold uppercase mb-6">
              TRAVEL WITH ASTROLINK
            </h1>
            <p className="font-light mb-4">
              With ASTROlink’s Mobile plans, you can take your high-speed,
              low-latency internet service with you wherever you go.
            </p>
            <p className="font-light mb-8">
              Pause and resume your plan based on your travel needs and stay
              connected in any location where Starlink is available.
            </p>
            <button className="w-full rounded border-2 border-white font-semibold px-4 py-3 uppercase hover:bg-white hover:text-black transition">
              learn more
            </button>
          </div>
        </div>
        {/* FEATURE 5 */}
        <div className="flex flex-col xl:flex-row items-center max-w-6xl mx-auto mb-12">
          <div className="w-full xl:w-1/2">
            <img
              src="/src/assets/feature-5.webp"
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="w-full xl:w-1/2 flex flex-col justify-center px-6 py-8">
            <h1 className="text-2xl md:text-3xl font-bold uppercase mb-6">
              MANAGE ASTROLINK ON THE MOBILE APP
            </h1>
            <p className="font-light mb-2">
              The Astrolink app helps you customize settings, receive updates,
              access{" "}
              <a href="#" className="underline">
                Support
              </a>
              , and see real time performance data like download speed, latency,
              and uptime.
            </p>
            <p className="font-light mb-8">
              Download the app to determine the best set up location before
              install. Astrolink needs a clear view of the sky to connect to
              satellites.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="w-full rounded border-2 border-white font-semibold px-4 py-3 uppercase hover:bg-white hover:text-black transition">
                download for ios
              </button>
              <button className="w-full rounded border-2 border-white font-semibold px-4 py-3 uppercase hover:bg-white hover:text-black transition">
                download for android
              </button>
            </div>
          </div>
        </div>
        {/* FEATURE 6 */}
        <div className="flex flex-col xl:flex-row items-center max-w-6xl mx-auto mb-12">
          <div className="w-full xl:w-1/2">
            <img
              src="/src/assets/feature-6.webp"
              alt=""
              className="rounded-lg aspect-4/3"
            />
          </div>
          <div className="w-full xl:w-1/2 flex flex-col justify-center px-6 py-8">
            <h1 className="text-2xl md:text-3xl font-bold uppercase mb-6">
              LEADER IN SPACE SUSTAINABILITY
            </h1>
            <p className="font-light mb-8">
              Astrolink not only leads the industry in innovations to reduce
              satellite brightness, but also on-orbit debris mitigation —
              meeting or exceeding all regulatory and industry standards.
            </p>
            <button className="w-full rounded border-2 border-white font-semibold px-4 py-3 uppercase hover:bg-white hover:text-black transition">
              learn more
            </button>
          </div>
        </div>
        {/* FEATURE 7 */}
        <div className="flex flex-col xl:flex-row items-center max-w-6xl mx-auto mb-12">
          <div className="w-full xl:w-1/2 xl:order-2">
            <img
              src="/src/assets/feature-7.webp"
              alt=""
              className="rounded-lg aspect-4/3"
            />
          </div>
          <div className="w-full xl:w-1/2 flex flex-col justify-center px-6 py-8">
            <h1 className="text-2xl md:text-3xl font-bold uppercase mb-6">
              ENGINEERED BY SPACEX
            </h1>
            <p className="font-light mb-8">
              SpaceX is leveraging its experience in building rockets and
              spacecraft to deploy the world’s most advanced broadband internet
              system. As the world’s leading provider of launch services – and
              the only provider with an orbital class reusable rocket – SpaceX
              has deep experience with both spacecraft and on-orbit operations.
            </p>
            <button className="w-full rounded border-2 border-white font-semibold px-4 py-3 uppercase hover:bg-white hover:text-black transition">
              learn more
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-10 bg-[#272626] text-center">
        <h1 className="text-2xl md:text-3xl font-bold uppercase mb-8">
          Customer quotes
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
          {/* TESTIMONIAL 1 */}
          <div className="bg-black/60 rounded-lg p-6 flex flex-col items-center">
            <p className="text-lg font-light mb-4">
              “It’s an entirely different world...Before Astrolink we had to
              ration data and we couldn’t stream. Now we have files downloading,
              Pandora playing, Zoom going and there’s no latency whatsoever.”
            </p>
            <span className="text-base text-gray-300">
              - William D. from Colorado, USA
            </span>
          </div>
          {/* TESTIMONIAL 2 */}
          <div className="bg-black/60 rounded-lg p-6 flex flex-col items-center">
            <p className="text-lg font-light mb-4">
              “Absolute game changer! There’s no overpromising and
              underdelivering like our old slow provider. Plug it in and show
              Dishy the sky, that’s it! In under 5 minutes we’ve gone from the
              forgotten to having the fastest internet connection in the area.”
            </p>
            <span className="text-base text-gray-300">
              - Aaron W. from Southern England
            </span>
          </div>
          {/* TESTIMONIAL 3 */}
          <div className="bg-black/60 rounded-lg p-6 flex flex-col items-center">
            <p className="text-lg font-light mb-4">
              “Millions are not connected to the Internet — we're thrilled to
              say that we're no longer among them. Blistering fast and online in
              minutes, Astrolink ends a six-year journey.”
            </p>
            <span className="text-base text-gray-300">
              - Neil V. from New South Wales Australia
            </span>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
