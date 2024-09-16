import React from "react";

const NoteAndFileUpload = ({
  note,
  file,
  handleNoteChange,
  handleFileChange,
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Add a Note and Upload Files
      </h2>

      <textarea
        value={note}
        onChange={handleNoteChange}
        placeholder="Enter any notes or special instructions here"
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
        rows="4"
      />

      <input
        type="file"
        onChange={handleFileChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />

      {file && (
        <div className="mt-4">
          <p className="text-gray-700">Uploaded File: {file.name}</p>
        </div>
      )}
    </div>
  );
};

export default NoteAndFileUpload;
