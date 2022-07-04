import "./App.css";
function App() {
  return (
    <div className="login-page">
      <div className="Image-Section">
        <div className="Title">
          <div className="Ball" id="Ball-1"></div>
          <div className="Title-x" id="csi">
            CSI
          </div>
          <div className="Title-x" id="Csi-marketing">
            Marketing
          </div>
          <div className="Irritating-Balls">
            <div className="Ball" id="Ball-3"></div>
            <div className="mutliple-smaller-balls">
              <div className="smaller-ball"></div>
              <div className="smaller-ball"></div>
              <div className="smaller-ball"></div>
              <div className="smaller-ball"></div>
              <div className="smaller-ball"></div>
              <div className="smaller-ball"></div>
            </div>
          </div>
        </div>
        <div className="extra-details">
          <div className="extra" id="extra-1">
            CSI Chapter VIT-AP
          </div>
          <div className="extra" id="extra-2">
            Join hands to help for Students
          </div>
        </div>
        <div className="Ball" id="Ball-2"></div>
      </div>
      <div className="Detail-Input">
        <div className="texts" id="intro">
          Welcome to CSI Marketing Website
        </div>
        <div className="texts" id="email">
          Email
          <div className="inputs">
            <input type="text" id="email-id-input" className="inputs-fields" />
          </div>
        </div>
        <div className="texts" id="password">
          Password
          <div className="inputs">
            <input
              type="password"
              id="password-input"
              className="inputs-fields"
            />
          </div>
        </div>
        <div className="login-d">
          <button className="button" id="login ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
