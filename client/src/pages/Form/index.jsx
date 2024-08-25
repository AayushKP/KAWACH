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
        // Reset form after successful submission
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
    <div className="max-w-lg mx-auto mt-8 justify-center">
      <h2 className="text-2xl font-bold mb-4">Submit a Complaint</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        encType="multipart/form-data"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter complaint heading"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter complaint description"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleFileChange} // Handle file input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter location"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComplaintForm;
