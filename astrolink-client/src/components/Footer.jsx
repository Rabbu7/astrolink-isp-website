import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-black">
      <div className="h-16 w-1 mx-auto rounded bg-white mb-8"></div>
      <p className="text-lg font-light text-center mb-4">
        Interested in staying up to date with Astrolink?
      </p>
      <div className="flex flex-wrap gap-4 justify-center max-w-xl mx-auto mb-4">
        <input
          type="text"
          className="flex-1 rounded border-2 border-white/60 bg-white/15 px-4 py-3 text-white placeholder:text-white/60"
          placeholder="EMAIL"
        />
        <input
          type="button"
          className="rounded bg-neutral-700 text-white font-bold uppercase px-6 py-3"
          value="SIGN UP"
        />
      </div>
      <p className="text-xs text-gray-400 text-center mb-8">
        By clicking order now, you agree to our{' '}
        <a href="#" className="underline text-white">
          Privacy Policy
        </a>
      </p>
      <div className="text-center mt-16">
        <p className="text-xs text-gray-400 mb-2">Astrolink &copy; 2023</p>
        <div className="flex flex-wrap justify-center items-center gap-2 mb-2 text-xs text-gray-400">
          <a href="#" className="underline">Careers</a>
          <span>&Iota;</span>
          <a href="#" className="underline">Satellite Operators</a>
          <span>&Iota;</span>
          <a href="#" className="underline">Privacy & Legal</a>
          <span>&Iota;</span>
          <a href="#" className="underline">Privacy Preferences</a>
        </div>
        <p className="text-xs text-gray-400">
          Astrolink is a division of SpaceX. Visit us at{' '}
          <a href="#" className="underline text-white">Spacex.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;