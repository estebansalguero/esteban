import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./views";
import { Contact } from "./views/contact";
import { Resume } from "./views/resume";

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
