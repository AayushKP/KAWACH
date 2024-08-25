import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [isError, setIsError] = useState(false); // State to manage error message color
  const navigate = useNavigate();

  // Function to handle login
  const handleLogin = async () => {
    setLoading(true);
    const payload = { email, password };

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setIsError(false); // Set to false when request is successful
        localStorage.setItem("token", data.token); // Store the token
        navigate("/dashboard"); // Navigate to the dashboard
      } else {
        setMessage(data.message || "Login failed.");
        setIsError(true); // Set to true when there's an error
      }
    } catch (error) {
      setMessage("Server error. Please try again later.");
      setIsError(true); // Set to true for server errors
    } finally {
      setLoading(false); // Reset loading state when request completes
    }
  };

  // Function to handle signup
  const handleSignup = async () => {
    setLoading(true);
    const payload = { email, password };

    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Signup successful, please login.");
        setIsError(false); // Set to false when request is successful
        setEmail(""); // Clear email field
        setPassword(""); // Clear password field
        setIsLogin(true); // Switch to login mode after signup
        navigate("/dashboard");
      } else {
        setMessage(data.message || "Signup failed.");
        setIsError(true); // Set to true when there's an error
      }
    } catch (error) {
      setMessage("Server error. Please try again later.");
      setIsError(true); // Set to true for server errors
    } finally {
      setLoading(false); // Reset loading state when request completes
    }
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div>
        <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[220%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-80 blur-[80px] "></div>
      </div>
      <div>
        <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[20%] translate-y-[90%] rounded-full bg-[rgba(109,145,244,0.5)] opacity-80 blur-[80px] "></div>
      </div>
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 z-10">
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
          {isLogin ? "LOGIN" : "SIGN UP"}
        </h2>
        {message && (
          <p
            className={`text-center mb-4 ${
              isError ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200"
              disabled={loading}
            >
              {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
            </button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-indigo-500 hover:text-indigo-700 font-bold focus:outline-none"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
