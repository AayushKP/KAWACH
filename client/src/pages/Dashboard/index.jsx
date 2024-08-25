import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View from "../View";

const Dashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const navigate = useNavigate();

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
    navigate("/create");
  };

  const handleCardClick = (complaint) => {
    setSelectedComplaint(complaint);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <div>
        <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[220%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px] -z-20"></div>
      </div>
      <div>
        <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[20%] translate-y-[90%] rounded-full bg-[rgba(109,145,244,0.5)] opacity-50 blur-[80px] -z-20"></div>
      </div>
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
            className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => handleCardClick(complaint)}
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              {complaint.heading}
            </h3>

            {complaint.image && (
              <img
                src={`http://localhost:3000/uploads/${complaint.image}`}
                alt="Complaint"
                className="w-full h-40 object-cover rounded-t-lg"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {complaint.heading}
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                Location: {complaint.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      {isDialogOpen && selectedComplaint && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white border border-gray-200 rounded-lg shadow-lg p-8 max-w-2xl w-full mx-4 sm:mx-6 md:mx-auto">
            <button
              onClick={handleCloseDialog}
              className="absolute top-2 right-2 text-red-700 pr-3 pl-3 text-white rounded-full shadow-lg"
            >
              X
            </button>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {selectedComplaint.heading}
            </h3>
            {selectedComplaint.image && (
              <img
                src={`http://localhost:3000/uploads/${selectedComplaint.image}`}
                alt="Complaint"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            <p className="text-gray-700 text-sm mb-4">
              Location: {selectedComplaint.location}
            </p>
            <p className="text-gray-600">
              {/* Add more complaint details here if necessary */}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
