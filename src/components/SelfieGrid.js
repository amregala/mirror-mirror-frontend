import "../styles/SelfiesGrid.css";

import SelfieCard from "./SelfieCard";
const SelfieGrid = ({ uploads, handleDelete, handleUploadSelected }) => {

  return (
    <div className="sGrid">
      {uploads &&
        uploads.map(upload => (
          <SelfieCard
            key={upload._id}
            upload={upload}
            handleDelete={handleDelete}
            handleUploadSelected={handleUploadSelected}
          />
        ))}
    </div>
  );
};

export default SelfieGrid;
