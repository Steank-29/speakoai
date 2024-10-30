import React, { useState } from "react";
import "./index.css";
import inquiryImage from './inquiry.jpg';

function App() {
  const [openSection, setOpenSection] = useState(0); // Initialize to open the first section

  const toggleText = (index) => {
    setOpenSection(openSection === index ? null : index); 
  };

  return (
    <div className="bg-mixed min-h-screen flex flex-col items-center pt-10">
      <h1 className="text-3xl font-bold font-jakarta text-center mb-4">
        Help and Support
      </h1>
      <p className="text-md text-gray-900 text-center max-w-md mx-4">
        We're here to help! Please review this page, and if you still have questions, contact us via chat or email.
      </p>

      <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-20 pt-10">
        <div className="text-center mb-4 md:mb-0">
          <h2 className="text-xl font-semibold font-jakarta">Technical Support</h2>
          <p className="text-gray-900 max-w-xs mx-auto">
            Please provide a detailed description of your issue. The more details, the better. And we will get back to you as soon as possible.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold font-jakarta">Billing Inquiries</h2>
          <p className="text-gray-900 max-w-xs mx-auto">
            Please include your user ID, billing details, and how you purchased. The more detail, the better. And we will assist you.
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row w-full max-w-6xl">
        <div className="flex-1 pt-10 px-4 flex flex-col items-start">
          <button className="bg-black text-white font-bold py-2 px-4 rounded-[16px] hover:bg-gray-800 transition duration-300 text-md">
            &#x25CF; Help
          </button>
          <p className="text-4xl font-jakarta text-black font-bold mt-2">
            Frequently Asked <br /> Questions
          </p>
          <img
            src={inquiryImage}
            alt="Inquiry"
            className="mt-4 w-64 h-auto"
          />
        </div>

        <div className="flex-1 flex flex-col items-start pt-10">
          <div className="p-6 mb-6 w-full">
            {["How to cancel a subscription?", "What about Android?", "Have A New Voice Request?", "Why is it so expensive?", "General Inquiries?"].map((question, index) => (
              <div key={index}>
                <p className="text-lg font-jakarta font-bold text-gray-800 text-center flex justify-between items-center">
                  {question}
                  <button
                    onClick={() => toggleText(index)}
                    className="bg-transparent text-black text-2xl focus:outline-none ml-4"
                  >
                    {openSection === index ? '-' : '+'}
                  </button>
                </p>
                {openSection === index && (
                  <p className="text-sm text-gray-900">
                    You can cancel your subscription directly from your account settings. Please visit your profile on the device you purchased. Under "Billing," you'll find the option to "manage" or cancel your Pro subscription.
                  </p>
                )}
                <div className="h-0.5 bg-gray-400 w-full my-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
