"use client"; // This tells Next.js it's a Client Component

import { useState } from "react";
import { SiNike } from "react-icons/si";
export default function Sign_up() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = () => {
    console.log({ email, password, firstName, lastName, birthday, country, gender, termsAccepted });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
        
        {/* Nike Logo */}
        <div className="flex justify-center mb-4">
        <SiNike />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-center mb-4">BECOME A NIKE MEMBERS</h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
        </p>

        {/* Login Form */}
        <div className="space-y-4">
          {/* Email Input */}
          <input
            type="email"
            className="border border-gray-300 p-2 w-full rounded-md"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <input
            type="password"
            className="border border-gray-300 p-2 w-full rounded-md"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* First Name */}
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          {/* Last Name */}
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {/* Birthday Input */}
          <input
            type="date"
            className="border border-gray-300 p-2 w-full rounded-md"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            placeholder="Birthday"
            title="Birthday"
          />

          {/* Birthday Question */}
          <div className="text-sm text-gray-600 mb-2">Get a Nike Member Reward every year on your Birthday.</div>
          <select
            className="border border-gray-300 p-2 w-full rounded-md"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            aria-label="Select your country"
          >
            <option value="">Select a Country</option>
            <option value="Pakistan">Pakistan</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>

          {/* Gender Selection */}
          <div className="mt-2">
            <span className="text-sm text-gray-600">Select Gender:</span>
            <div className="flex space-x-4 mt-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  aria-label="Male"
                  onChange={() => setGender("Male")}
                  className="border-gray-500"
                />
                <span className="ml-2 text-sm">Male</span>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  aria-label="Female"
                  onChange={() => setGender("Female")}
                  className="border-gray-500"
                />
                <span className="ml-2 text-sm">Female</span>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mt-4 flex items-center space-x-2">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="border-gray-500"
              aria-label="Accept Terms and Conditions"
            />
            <span className="text-sm text-gray-600">
              I agree to the <a href="#" className="text-blue-500">Terms and Policy</a>
            </span>
          </div>

          {/* Join Us Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
          >
            Join Us
          </button>

          {/* Already Signed-In Link */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">Already have an account? </span>
            <a href="#" className="text-blue-500 font-medium">Sign-In</a>
          </div>
        </div>
      </div>
    </div>
  );
}
