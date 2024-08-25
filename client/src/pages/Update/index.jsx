import { useState, useEffect } from 'react';
import { FaThumbsUp, FaThumbsDown, FaEdit, FaTrash } from 'react-icons/fa';

const Update = () => {
  const [imageMetadata, setImageMetadata] = useState({
    width: 0,
    height: 0,
    size: 0,
    dateCaptured: '', // New property for storing the date
  });

  useEffect(() => {
    const fetchImageMetadata = async () => {
      const img = new Image();
      const imageUrl = 'https://via.placeholder.com/300';
      img.src = imageUrl;

      img.onload = () => {
        fetch(imageUrl)
          .then((response) => response.blob())
          .then((blob) => {
            setImageMetadata({
              width: img.width,
              height: img.height,
              size: (blob.size / 1024).toFixed(2), // Convert size to KB
              dateCaptured: new Date().toLocaleString(), // Capture the current date and time
            });
          });
      };
    };

    fetchImageMetadata();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-600">
      <div className="relative w-2/3 h-auto bg-white shadow-2xl rounded-2xl p-8 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 ease-in-out">
        {/* Heading Section */}
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-center text-gray-900">Card Heading</h2>
        </div>

        {/* Image Section */}
        <div className="mb-6 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Placeholder"
            className="rounded-lg shadow-lg mb-4"
          />
          <div className="text-sm text-gray-600">
            <p>Width: {imageMetadata.width}px</p>
            <p>Height: {imageMetadata.height}px</p>
            <p>Size: {imageMetadata.size} KB</p>
            <p>Date Captured: {imageMetadata.dateCaptured}</p> {/* Display the date */}
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-6">
          <p className="text-gray-700 text-center">
            This is a description of the card. It provides some details about the content displayed in the card.
          </p>
        </div>

        {/* Upvote/Downvote and Update/Delete Section */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <button className="flex items-center text-green-500 hover:text-green-700 transition-colors duration-200">
              <FaThumbsUp className="mr-2" /> Upvote
            </button>
            <button className="flex items-center text-red-500 hover:text-red-700 transition-colors duration-200">
              <FaThumbsDown className="mr-2" /> Downvote
            </button>
          </div>

          {/* Update/Delete Section */}
          <div className="flex space-x-6">
            <button className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200">
              <FaEdit className="mr-2" /> Update
            </button>
            <button className="flex items-center text-red-500 hover:text-red-700 transition-colors duration-200">
              <FaTrash className="mr-2" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
