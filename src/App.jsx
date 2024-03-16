import * as React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Note } from "./note";

function App() {
  return (
    <Router>
      <div className="APP">
        <Routes>
          <Route path="/" element={<Note />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
