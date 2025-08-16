import { useState } from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Contact from './component/Contact';
import Payment from './component/Payment';
import Footer from './component/Footer';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    code: '+977',
    phone: '',
    message: '',
    dateOfBirth: '',
    calendarType: 'AD',
    timeOfBirth: '',
    placeOfBirth: '',
    paymentScreenshot: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'paymentScreenshot') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentInfo = formData.paymentScreenshot ? `Payment Screenshot: ${formData.paymentScreenshot.name}` : 'No payment screenshot uploaded';
    const prefilledMessage = `🌟 *Astrovya Consultation Request* 🌟

📝 *Personal Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.code} ${formData.phone}

🎂 *Birth Information:*
Date of Birth: ${formData.dateOfBirth} (${formData.calendarType})
Time of Birth: ${formData.timeOfBirth || 'Not provided'}
Place of Birth: ${formData.placeOfBirth || 'Not provided'}

💬 *Message:*
${formData.message}

💳 *Payment:*
${paymentInfo}

Thank you for choosing Astrovya! 🔮`;
    const phoneNumber = '+9779840059015';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefilledMessage)}`;
    window.open(url, '_blank');
    setFormData({
      name: '',
      email: '',
      code: '+977',
      phone: '',
      message: '',
      dateOfBirth: '',
      calendarType: 'AD',
      timeOfBirth: '',
      placeOfBirth: '',
      paymentScreenshot: null,
    });
  };

  const scrollToContact = () => {
    setCurrentPage('home');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const showPaymentInfo = () => {
    setCurrentPage('payment');
  };

  const goHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <Navbar scrollToContact={scrollToContact} showPaymentInfo={showPaymentInfo} />

      {/* Animated Stars Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {currentPage === 'home' && (
        <>
          <Hero scrollToContact={scrollToContact} showPaymentInfo={showPaymentInfo} />
          <Contact
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            showPaymentInfo={showPaymentInfo}
          />
          <Footer />
        </>
      )}

      {currentPage === 'payment' && (
        <Payment goHome={goHome} />
      )}
    </div>
  );
};

export default App;