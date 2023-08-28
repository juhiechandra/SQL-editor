import "./showNoOutput.css";

const NoOutput = () => {
  return (
    <>
      <div className="all">
        <div className="container">
          <div className="top"></div>
          <div className="inner-oval">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "43%", marginTop: "1%", position: "relative" }}>
        <span style={{ fontSize: "18px", fontWeight: "lighter" }}>
          Click on Run to show Output
        </span>
      </div>
    </>
  );
};

export default NoOutput;
