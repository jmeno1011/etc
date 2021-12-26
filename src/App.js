// import logo from "./logo.svg";
import "./App.css";
import logo1 from "./meno-logo.png";
import logo2 from "./meno_logo.png";

function App() {
  return (
    <div className="App">
      <section style={{ display: "flex" }} className="header">
        {/* <img src={logo1} style={{ height: "1rem" }} /> */}
        <img src={logo2} />
        <h1>blog</h1>
      </section>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Food</a>
            </li>
            <li>
              <a href="">Hobby</a>
            </li>
            <li>
              <a href="">Game</a>
            </li>
            <li>
              <a href="">Dream</a>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <h1>추가할내용</h1>
      </div>
    </div>
  );
}

export default App;
