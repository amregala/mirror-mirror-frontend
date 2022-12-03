import LandingNav from "../components/LandingNav";
import MetGrid from "../components/MetGrid";
// import SelfieGrid from "../components/SelfieGrid";
// import useFetchSelfies from "../hooks/useFetchSelfies";

const PublicLanding = () => {
  // const { uploads, loading, error } = useFetchSelfies();
  return (
    <>
      <LandingNav />
      <MetGrid />
      {/* <SelfieGrid uploads={uploads} /> */}
    </>
  );
};

export default PublicLanding;
