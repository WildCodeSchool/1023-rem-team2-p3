import Counter from "./components/Counter";
import logo from "./assets/logo.svg";

import "./App.css";

function App() {
  return (
    <div className="bg-gradient-to-r from-primary-color to-secondary-color">
      <header className="font-primary-font">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="font-primary-font">Hello Vite + React !</p>

        <Counter />

        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
