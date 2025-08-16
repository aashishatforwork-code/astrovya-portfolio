import React from 'react';

const Contact = ({ formData, handleChange, handleSubmit, showPaymentInfo }) => {
  const countryCodes = [
    { code: '+1', label: 'USA (+1)' },
    { code: '+44', label: 'UK (+44)' },
    { code: '+91', label: 'India (+91)' },
    { code: '+61', label: 'Australia (+61)' },
    { code: '+977', label: 'Nepal (+977)' }
  ];

  return (
    <section id="contact" className="py-20 relative z-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white bg-opacity-15 backdrop-blur-xl border border-white border-opacity-30 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
              Contact Us
            </h2>
            <p className="text-white text-opacity-80 text-lg">
              Ready to explore your cosmic journey? Get in touch with our astrology experts
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white text-opacity-80 text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-xl text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-white text-opacity-80 text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-xl text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-2/3">
                <label className="block text-white text-opacity-80 text-sm font-medium mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div className="w-1/3">
                <label className="block text-white text-opacity-80 text-sm font-medium mb-2">
                  Calendar *
                </label>
                <select
                  name="calendarType"
                  value={formData.calendarType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                >
                  <option value="AD" className="bg-gray-800">AD (Gregorian)</option>
                  <option value="BS" className="bg-gray-800">BS (Bikram Sambat)</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-white text-opacity-80 text-sm font-medium mb-2">
                  Time of Birth
                </label>
                <input
                  type="time"
                  name="timeOfBirth"
                  value={formData.timeOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-white text-opacity-80 text-sm font-medium mb-2">
                  Place of Birth
                </label>
                <input
                  type="text"
                  name="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-xl text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  placeholder="City, Country"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/3">
                <label className="block text-white text-opacity-80 text-sm font-medium mb-2">
                  Country
                </label>
                <select
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                >
                  {countryCodes.map((option) => (
                    <option key={option.code} value={option.code} className="bg-gray-800">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-2/3">
                <label className="block text-white text-opacity-80 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-xl text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  placeholder="Your phone number"
                />
              </div>
            </div>
            <div className="bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-yellow-400 font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Payment Required
                </h3>
                <button
                  type="button"
                  onClick={showPaymentInfo}
                  className="text-yellow-400 hover:text-yellow-300 text-sm font-medium underline transition-colors duration-200"
                >
                  View Payment Details →
                </button>
              </div>
              <div className="text-white text-opacity-80 text-sm space-y-2">
                <div className="bg-white bg-opacity-10 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">🇳🇵 Nepal:</span>
                    <span className="text-yellow-400 font-bold text-lg">Rs. 2,100</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="font-medium">🌍 International:</span>
                    <span className="text-yellow-400 font-bold text-lg">$40 USD</span>
                  </div>
                </div>
                <p className="text-xs text-white text-opacity-60 text-center mt-2">
                  Click "View Payment Details" for payment methods and instructions
                </p>
              </div>
            </div>
            <div>
              <label className="block text-white text-opacity-80 text-sm font-medium mb-2">
                Your Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-xl text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell us about your astrological interests, specific questions, or type of reading you need..."
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" />
                </svg>
                Send via WhatsApp
              </button>
              <p className="text-white text-opacity-60 text-sm mt-4">
                Please ensure you have completed the payment before sending your message. Your message will be sent directly to our WhatsApp for timely assistance.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
