import React, { useState, useEffect } from "react";

const Payment = ({ goHome }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white bg-opacity-15 backdrop-blur-xl border border-white border-opacity-30 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            {/* Back Button */}
            <button
              onClick={goHome}
              className="inline-flex items-center gap-2 text-white text-opacity-70 hover:text-white transition-colors duration-200 mb-6"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Contact Form
            </button>

            {/* Header */}
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
              Payment Information
            </h2>
            <p className="text-white text-opacity-80 text-lg mb-6">
              Complete your payment using any of the methods below
            </p>

            {/* Payment Instructions */}
            <div className="max-w-3xl mx-auto mb-8 bg-blue-900 bg-opacity-40 border border-blue-400 border-opacity-50 rounded-xl p-5 shadow-lg">
              <h3 className="text-blue-200 font-bold text-lg mb-4 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                Payment Instructions
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-white text-sm">
                <div className="flex items-start gap-2">
                  <span className="bg-blue-400 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <p className="font-medium text-blue-100">
                      Choose payment method:
                    </p>
                    <p className="text-blue-200 text-xs mt-1">
                      Nepal: Rs. 2,100 | International: $40
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-400 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <p className="text-blue-100 text-sm">
                    Send payment to respective account
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-400 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <p className="text-blue-100 text-sm">Take screenshot of payment</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-400 text-blue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    4
                  </span>
                  <p className="text-blue-100 text-sm">
                    Upload & submit consultation form
                  </p>
                </div>
              </div>
            </div>

            {/* Price Cards */}
            <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 bg-opacity-20 rounded-2xl p-6 border border-green-400 border-opacity-30">
                <div className="text-3xl mb-2">🇳🇵</div>
                <h3 className="text-xl font-bold text-white mb-2">Nepal</h3>
                <div className="text-3xl font-bold text-yellow-300">Rs. 2,100</div>
                <p className="text-white text-opacity-70 text-sm mt-2">
                  Domestic Consultation
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-opacity-20 rounded-2xl p-6 border border-blue-400 border-opacity-30">
                <div className="text-3xl mb-2">🌍</div>
                <h3 className="text-xl font-bold text-white mb-2">International</h3>
                <div className="text-3xl font-bold text-yellow-300">$40 USD</div>
                <p className="text-white text-opacity-70 text-sm mt-2">
                  Global Consultation
                </p>
              </div>
            </div>
          </div>

          {/* Domestic Payment Methods */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* eSewa */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-green-400">eSewa</h3>
                  <span className="bg-green-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                    🇳🇵 Nepal Only
                  </span>
                </div>
                <p className="text-white text-opacity-80">Digital Wallet Payment</p>
                <div className="mt-2 text-yellow-300 font-bold text-lg">Rs. 2,100</div>
              </div>
              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-4 mb-4 text-center">
                <p className="text-white text-opacity-60 text-sm mb-2">eSewa ID</p>
                <p className="text-2xl font-bold text-green-400">9840059015</p>
              </div>
              <div className="bg-gray-700 bg-opacity-50 rounded-xl p-8 text-center border-2 border-dashed border-gray-500">
                <div className="text-white text-opacity-60">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm">
                    eSewa QR Code or Payment Screenshot will be displayed here
                  </p>
                </div>
              </div>
            </div>

            {/* Khalti */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-purple-400">Khalti</h3>
                  <span className="bg-purple-400 text-white px-2 py-1 rounded-full text-xs font-bold">
                    🇳🇵 Nepal Only
                  </span>
                </div>
                <p className="text-white text-opacity-80">Digital Wallet Payment</p>
                <div className="mt-2 text-yellow-300 font-bold text-lg">Rs. 2,100</div>
              </div>
              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-4 mb-4 text-center">
                <p className="text-white text-opacity-60 text-sm mb-2">
                  Khalti Number
                </p>
                <p className="text-2xl font-bold text-purple-400">9840059015</p>
              </div>
              <div className="bg-gray-700 bg-opacity-50 rounded-xl p-8 text-center border-2 border-dashed border-gray-500">
                <div className="text-white text-opacity-60">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm">
                    Khalti QR Code or Payment Screenshot will be displayed here
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* International Payments */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-center text-white mb-6 flex items-center justify-center gap-2">
              <span>🌍</span>
              International Payment Options
              <span className="bg-blue-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                $40 USD
              </span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* PayPal */}
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20">
                <div className="text-center mb-4">
                  <h4 className="text-xl font-bold text-blue-400 mb-2">PayPal</h4>
                  <p className="text-white text-opacity-80 text-sm">
                    Worldwide Payment
                  </p>
                </div>
                <div className="bg-gray-700 bg-opacity-50 rounded-xl p-8 text-center border-2 border-dashed border-gray-500">
                  <div className="text-white text-opacity-60">
                    <svg
                      className="w-16 h-16 mx-auto mb-4 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm">PayPal Payment Link or QR Code</p>
                  </div>
                </div>
              </div>

              {/* Bank Transfer */}
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20">
                <div className="text-center mb-4">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">
                    Bank Transfer
                  </h4>
                  <p className="text-white text-opacity-80 text-sm">
                    Wire Transfer / Western Union
                  </p>
                </div>
                <div className="bg-gray-700 bg-opacity-50 rounded-xl p-8 text-center border-2 border-dashed border-gray-500">
                  <div className="text-white text-opacity-60">
                    <svg
                      className="w-16 h-16 mx-auto mb-4 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm">
                      Bank Details for International Transfers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Details */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-opacity-20 rounded-2xl p-6 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Account Details
            </h3>
            <div className="text-center space-y-2">
              <div className="text-white text-opacity-80">
                <span className="font-semibold">Account Name:</span>
                <span className="text-yellow-400 font-bold ml-2">
                  Astrovya Services
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-to-top floating button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-600 hover:to-purple-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          ⬆
        </button>
      )}
    </div>
  );
};

export default Payment;
