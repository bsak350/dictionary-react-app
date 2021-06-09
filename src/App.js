import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary App</h1>
        <Dictionary defaultKeyword="island" />
        <br />
        <p>
          Project coded by Brittany Sak
          <br />
          Open sourced by {""}
          <a
            href="https://github.com/bsak350/dictionary-react-app.git"
            target="_blank"
            rel="noreferrer"
          >
            Github {""}
          </a>
          and hosted by {""}
          <a
            href="https://unruffled-tesla-bdc61e.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </p>
      </div>
    </div>
  );
}
