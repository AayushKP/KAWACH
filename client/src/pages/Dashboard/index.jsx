import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Complaints Dashboard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {complaints.map((complaint) => (
          <div
            key={complaint._id}
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)", // Glow effect
            }}
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              {complaint.heading}
            </h3>
            <p className="text-gray-300 mb-4">{complaint.description}</p>
            {complaint.image && (
              <img
                src={complaint.image}
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
    </div>
  );
};

export default Dashboard;
