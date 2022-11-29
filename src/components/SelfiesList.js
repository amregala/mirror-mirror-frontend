import Selfie from "./Selfie";
import "../styles/SelfiesList.css";

const SelfiesList = () => {
  return (
    <div className="SelfiesList">
      <div>
        <Selfie />
        <Selfie />
        <Selfie />
        <Selfie />
      </div>
    </div>
  );
};

export default SelfiesList;
