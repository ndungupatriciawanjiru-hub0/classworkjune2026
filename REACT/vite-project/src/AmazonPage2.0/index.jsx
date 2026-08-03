import Navigation from "./Navigation";
import SideBar from "./SideBar";
import MainSection from "./MainSection";
import "./index.css";

function AmazonPage2() {
  return (
    <div>
      <Navigation />
      <div
        style={{
          display: "flex",
        }}
      >
        <SideBar />
        <MainSection />
      </div>
    </div>
  );
}

export default AmazonPage2;