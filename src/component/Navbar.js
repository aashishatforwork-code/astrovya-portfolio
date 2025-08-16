import React from 'react';

const Navbar = ({ scrollToContact, showPaymentInfo }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-indigo-900 bg-opacity-50 backdrop-blur-lg border-b border-white border-opacity-20 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo: refreshes page to go back to home */}
        <div
          onClick={() => window.location.href = '/'}
          className="text-white text-2xl font-bold cursor-pointer"
        >
          Astrovya 🔮
        </div>

        <div className="space-x-4">
          <button
            onClick={scrollToContact}
            className="text-white text-opacity-80 hover:text-white hover:underline transition-colors"
          >
            Contact
          </button>
          <button
            onClick={showPaymentInfo}
            className="text-white text-opacity-80 hover:text-white hover:underline transition-colors"
          >
            Payment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
