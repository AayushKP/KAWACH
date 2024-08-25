import React from "react";
import ReactDOM from "react-dom";

const View = ({ complaint, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-4/5 h-4/5 overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-row justify-between">
          <h3 className="text-2xl font-semibold mb-4">{complaint.heading}</h3>
          <p className="text-gray-500">Location: {complaint.location}</p>
        </div>

        {complaint.image && (
          <img
            src={`http://localhost:3000/uploads/${complaint.image}`}
            alt="Complaint"
            className="w-full h-80 object-cover rounded mb-4"
          />
        )}
        <p className="text-gray-700 mb-4">{complaint.description}</p>
      </div>
    </div>,
    document.body
  );
};

export default View;
