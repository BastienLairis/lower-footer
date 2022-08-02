import { useState } from "react";
import "./App.css";

function App() {
  const [moreText, setMoreText] = useState(false);
  return (
    <div className="container">
      <header>Header</header>
      <main>
        <button onClick={() => setMoreText(!moreText)}>
          {!moreText ? "Plus de texte" : "Moins de texte"}
        </button>
        <p>
          {moreText
            ? "Un text long en plusieurs fois".repeat(2000)
            : "Un court text"}
        </p>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
