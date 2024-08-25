import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import View from "../View";

const Dashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedComplaint, setSelectedComplaint] = useState(null); // State to manage the selected complaint
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to manage dialog visibility

  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await fetch("http://localhost:3000/complaints");
        if (!response.ok) {
          throw new Error("Failed to fetch complaints");
        }
        const data = await response.json();
        setComplaints(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  const handleCreateComplaint = () => {
    navigate("/create"); // Navigate to /create
  };

  const handleCardClick = (complaint) => {
    setSelectedComplaint(complaint);
    setIsDialogOpen(true); // Open the dialog with the selected complaint
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false); // Close the dialog
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-center">Complaints Dashboard</h2>
        <button
          onClick={handleCreateComplaint}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Complaint
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {complaints.map((complaint) => (
          <div
            key={complaint._id}
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => handleCardClick(complaint)} // Handle card click
            style={{
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)", // Glow effect
            }}
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              {complaint.heading}
            </h3>

            {complaint.image && (
              <img
                src={`http://localhost:3000/uploads/${complaint.image}`}
                alt="Complaint"
                className="w-full h-40 object-cover rounded mb-4"
              />
            )}
            <p className="text-gray-400 text-sm">
              Location: {complaint.location}
            </p>
          </div>
        ))}
      </div>
      {isDialogOpen && selectedComplaint && (
        <View complaint={selectedComplaint} onClose={handleCloseDialog} />
      )}
    </div>
  );
};

export default Dashboard;
