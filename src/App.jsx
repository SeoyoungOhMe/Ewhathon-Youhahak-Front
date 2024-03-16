import * as React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Note } from "./note";
import { Upload } from "./upload";

function App() {
  return (
    <Router>
      <div className="APP">
        <Routes>
          <Route path="/" element={<Note />} />
          <Route path="/Upload" element={<Upload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
