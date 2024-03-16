import * as React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Note } from "./note";
import { Upload } from "./upload";
import Modal from "react-modal";

function App() {
  // App 컴포넌트가 렌더링 될 때 Modal.setAppElement(el)을 호출하여 appElement을 설정
  React.useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

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
