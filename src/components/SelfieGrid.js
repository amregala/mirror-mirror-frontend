import "../styles/SelfiesGrid.css";

import SelfieCard from "./SelfieCard";
const SelfieGrid = ({ uploads, handleDelete, cardSelectedforEdit, handleChange }) => {

  return (
    <div className="sGrid">
      {uploads &&
        uploads.map(upload => (
          <SelfieCard
            key={upload._id}
            upload={upload}
            handleDelete={handleDelete}
            cardSelectedforEdit={cardSelectedforEdit}
            handleChange={handleChange}
          />
        ))}
    </div>
  );
};

export default SelfieGrid;
