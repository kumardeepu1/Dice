import { useState } from "react";
import "./App.css";

const imgUrl =
  "https://images.pexels.com/photos/1443894/pexels-photo-1443894.jpeg?cs=srgb&dl=pexels-reto-b%C3%BCrkler-1443894.jpg&fm=jpg";

function App() {
  const [data, setData] = useState({});

  function onClick() {
    fetch("https://provider.dice.tech/v1/theme/ANTPZ")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return new Error("An error");
      })
      .then((data) => {
        setData(data);
      });
  }

  const { logo, ...styles } = data || {};

  return (
    <div className="App">
      <div className="left">
        <img src={imgUrl} alt="left" />
      </div>
      <div className="right">
        <div className="form-box">
          <div>
            <img height={50} width={80} src={logo||"/dice-logo-dark.png"} />
          </div>
          <div>
            <h2>Log In</h2>
            <p>Enter your credentials</p>
          </div>
          <div>
            <label style={styles} className="label">
              {" "}
              Email
            </label>
            <input className="input" />
          </div>
          <div>
            <label className="label"> Password</label>
            <input className="input" />
          </div>
          <div>
            <strong> Forgot Password?</strong>
            <p>
              te a login page as shown below on click of login it should do get
              Api call and on response you will get some styling and dice
              logo.the login page should update with t
            </p>
          </div>
          <div>
            <button onClick={onClick} className="btn">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
