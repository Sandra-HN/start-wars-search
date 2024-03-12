import { useState } from "react";
import "./App.css"; // Style your components here
import ErrorBoundary from "./components/ErrorBoundary";
import ResultComponent from "./components/ResultComponent";
import SearchComponent from "./components/SearchComponent";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <ErrorBoundary>
      <div className="App container min-h-screen mx-auto p-4 bg-gradient-to-br from-violet-500 to-cyan-400">
        <h1 className="text-2xl font-bold mb-4 text-white">
          Star Wars Character Search
        </h1>
        <SearchComponent onSelect={setSelectedCharacter} />
        <ResultComponent character={selectedCharacter} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
