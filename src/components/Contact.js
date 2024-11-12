import React, { useState } from 'react';
import './Contact.css'; // Importing CSS for animations

const Contact = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isNameVisible, setIsNameVisible] = useState(true);
  const [isLastNameVisible, setIsLastNameVisible] = useState(false);
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  // Handle name input change
  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value.trim()) {
      setIsLastNameVisible(true); // Show last name input once name is filled
      setShowPrompt(true);  // Show prompt after name is filled
    } else {
      setIsLastNameVisible(false); // Hide last name input if name is cleared
      setShowPrompt(false);  // Hide prompt if name is cleared
    }
  };

  // Handle last name input change
  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastName(value);
    if (value.trim()) {
      setIsEmailVisible(true); // Show email input once last name is filled
      setShowPrompt(true);  // Show prompt after last name is filled
    } else {
      setIsEmailVisible(false); // Hide email input if last name is cleared
      setShowPrompt(false);  // Hide prompt if last name is cleared
    }
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.trim()) {
      setShowPrompt(true);  // Show prompt after email is filled
    } else {
      setShowPrompt(false);  // Hide prompt if email is cleared
    }
  };

  // Handle key press for Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (isNameVisible && !isLastNameVisible) {
        setIsLastNameVisible(true); // Show last name input when Enter is pressed after name is filled
        setShowPrompt(false);  // Hide prompt after showing last name input
      } else if (isLastNameVisible && !isEmailVisible) {
        setIsEmailVisible(true); // Show email input when Enter is pressed after last name is filled
        setShowPrompt(false);  // Hide prompt after showing email input
      }
    }
  };

  // Handle next button click to proceed to next input field
  const handleNextClick = () => {
    if (isNameVisible && !isLastNameVisible) {
      setIsLastNameVisible(true); // Show last name field
    } else if (isLastNameVisible && !isEmailVisible) {
      setIsEmailVisible(true); // Show email field
    }
    setShowPrompt(false);  // Hide the prompt after user clicks next
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800"> {/* Dark background */}
      <div className="contact-form-container max-w-lg w-full p-6 border rounded-lg shadow-lg bg-white animate-slideUp">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className={`form-group mb-4 ${isNameVisible ? 'animate-fadeIn' : ''}`}>
            <label htmlFor="name" className="block text-lg mb-2 text-gray-800">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              onKeyPress={handleKeyPress}
              placeholder="Enter your name"
              className="p-2 border rounded w-full bg-gray-100 text-gray-800 transition-all duration-300"
              required
            />
          </div>

          {/* Show prompt after name is filled */}
          {isNameVisible && (
            <div className="prompt text-center mb-4 animate-slideUp">
              <p className="text-gray-700">Press "Enter" or click Next to proceed to Last Name</p>
              <button
                type="button"
                onClick={handleNextClick}
                className="p-2 bg-blue-500 text-white rounded mt-2 hover:bg-blue-600 transition-colors duration-200"
              >
                Next
              </button>
            </div>
          )}

          {/* Conditionally render last name input */}
          {isLastNameVisible && (
            <div className={`form-group mb-4 ${isLastNameVisible ? 'animate-fadeIn' : ''}`}>
              <label htmlFor="last-name" className="block text-lg mb-2 text-gray-800">Last Name</label>
              <input
                type="text"
                id="last-name"
                value={lastName}
                onChange={handleLastNameChange}
                onKeyPress={handleKeyPress}
                placeholder="Enter your last name"
                className="p-2 border rounded w-full bg-gray-100 text-gray-800 transition-all duration-300"
                required
              />
            </div>
          )}

          {/* Show prompt after last name is filled */}
          {isLastNameVisible && (
            <div className="prompt text-center mb-4 animate-slideUp">
              <p className="text-gray-700">Press "Enter" or click Next to proceed to Email</p>
              <button
                type="button"
                onClick={handleNextClick}
                className="p-2 bg-blue-500 text-white rounded mt-2 hover:bg-blue-600 transition-colors duration-200"
              >
                Next
              </button>
            </div>
          )}

          {/* Conditionally render email input */}
          {isEmailVisible && (
            <div className={`form-group mb-4 ${isEmailVisible ? 'animate-fadeIn' : ''}`}>
              <label htmlFor="email" className="block text-lg mb-2 text-gray-800">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                onKeyPress={handleKeyPress}
                placeholder="Enter your email"
                className="p-2 border rounded w-full bg-gray-100 text-gray-800 transition-all duration-300"
                required
              />
            </div>
          )}

          {/* Show prompt after email is filled */}
          {isEmailVisible && (
            <div className="prompt text-center mb-4 animate-slideUp">
              <p className="text-gray-700">Press "Enter" to Submit</p>
            </div>
          )}

          {/* Submit Button */}
          {isEmailVisible && (
            <div className="form-group text-center mt-4">
              <button type="submit" className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200">
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
