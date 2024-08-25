import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    heading: "",
    description: "",
    image: null, // Initialize image as null
    location: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] }); // Update image with selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object to handle file uploads
    const data = new FormData();
    data.append("heading", formData.heading);
    data.append("description", formData.description);
    data.append("location", formData.location);
    if (formData.image) {
      data.append("image", formData.image); // Append image file to FormData
    }

    try {
      const response = await fetch("http://localhost:3000/complaints", {
        method: "POST",
        body: data, // Send FormData object
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Complaint submitted:", responseData);
        setFormData({
          heading: "",
          description: "",
          image: null,
          location: "",
        });
        // Navigate to /dashboard
        navigate("/dashboard");
      } else {
        console.error("Error submitting complaint:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting complaint:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Submit a Complaint
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
        encType="multipart/form-data"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="heading"
          >
            Heading
          </label>
          <input
            type="text"
            name="heading"
            id="heading"
            value={formData.heading}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Enter complaint heading"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Enter complaint description"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleFileChange} // Handle file input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Enter location"
            required
          />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200"
          >
            Submit Complaint
          </button>
          <button
            type="button"
            onClick={() => navigate("/dashboard")} // Navigate to the dashboard
            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200"
          >
            Go to Dashboard
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComplaintForm;
