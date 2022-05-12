import { Route, Routes } from "react-router-dom";

import AddFeedback from "./pages/add-feedback/add-feedback";
import EditFeeddback from "./pages/edit-feedback/edit-feedback";
import Feedback from "./pages/feedback/feedback";
import Main from "./pages/main/main";

// -----> Scss-link
import "./sass/main.scss";

function App() {
  return (
      <Routes>
        <Route path="/" element={< Main />} />
        <Route path="/feedback/:id" element={<Feedback />}  />
        <Route path="/add-feedback" element={<AddFeedback />} />
        <Route path="/edit-feedback/:id" element={<EditFeeddback/>} />
      </Routes>
  );
}

export default App;
