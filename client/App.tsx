import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Legend from "./pages/Legend";
import Legion from "./pages/Legion";
import Vision from "./pages/Vision";
import Protocol from "./pages/Protocol";
import Connect from "./pages/Connect";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/legend" element={<Legend />} />
        <Route path="/legion" element={<Legion />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/protocol" element={<Protocol />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
