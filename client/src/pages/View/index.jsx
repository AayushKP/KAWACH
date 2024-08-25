import React from "react";
import ReactDOM from "react-dom";

const View = ({ complaint, onClose }) => {
  const { image, heading, location, description, imageMetadata } = complaint;
  const { captureTime, gps } = imageMetadata || {}; // Safely destructure, fallback to empty object

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-4/5 h-4/5 overflow-auto relative">
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
        <div className="flex flex-row justify-between mb-4">
          <h3 className="text-2xl font-semibold">{heading}</h3>
          <p className="text-gray-500">Location: {location}</p>
        </div>

        {image && (
          <div className="relative">
            <img
              src={`http://localhost:3000/uploads/${image}`}
              alt="Complaint"
              className="w-full h-80 object-cover rounded mb-4"
            />
            {imageMetadata && (
              <div className="absolute bottom-0 left-0 bg-black text-white p-2 text-xs">
                <p>
                  Capture Time:{" "}
                  {captureTime ? new Date(captureTime).toLocaleString() : "N/A"}
                </p>
                <p>Latitude: {gps?.latitude || "N/A"}</p>
                <p>Longitude: {gps?.longitude || "N/A"}</p>
              </div>
            )}
          </div>
        )}
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
    </div>,
    document.body
  );
};

export default View;
